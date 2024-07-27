import {AuthConstants} from "~/constants/SessionConstants.js";

export default defineNuxtRouteMiddleware((to, from) => {
    let hasAuthTokenCookie = useCookie(AuthConstants.USER_TOKEN);
    // if user has not Cookie and tries to open restricted Page, then forward him to login page if he does not tries to open login page
    let hasValidToken = hasAuthTokenCookie.value !== undefined;

    let authStore = useAuthStore();
    let isLoginPage = to.name === 'admin';

    if (!hasValidToken && !isLoginPage) {
        authStore.$reset();
        abortNavigation();
        return navigateTo('/admin');
    }

    if (isLoginPage && hasValidToken) { // If Login page And AUTHENTICATED
        return navigateTo('/admin/users')
    }
    if (!isLoginPage && !hasValidToken) {
        abortNavigation();
        return navigateTo({path: '/admin'})
    }
})