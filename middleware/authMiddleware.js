import {AuthConstants} from "~/constants/SessionConstants.js";

export default defineNuxtRouteMiddleware(async (to, from,next) => {
    let hasAuthTokenCookie = useCookie(AuthConstants.USER_TOKEN);

    let hasTokenCookie = hasAuthTokenCookie.value !== undefined;

    let authStore = useAuthStore();
    let isLoginPage = to.name === 'admin';


    // if user has not Cookie and tries to open restricted Page, then forward him to login page if he does not tries to open login page
    if (!hasTokenCookie && !isLoginPage) {
        authStore.$reset();
        hasAuthTokenCookie.value = undefined;
        abortNavigation();
        return navigateTo('/admin');
    }
    // If has not Token and TO is Login Page, do nothing.
    if(!hasTokenCookie && isLoginPage){
        return;
    }
    let isValidToken = await authStore.ValidateToken(hasAuthTokenCookie.value);

    if (isLoginPage && isValidToken) { // If Login page And AUTHENTICATED
        return navigateTo('/admin/users')
    }
    if (!isLoginPage && !isValidToken) {
        abortNavigation();
        hasAuthTokenCookie.value = undefined;
        return navigateTo({path: '/admin'})
    }
})