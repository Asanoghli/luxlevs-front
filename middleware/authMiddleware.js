import {AuthConstants} from "~/constants/SessionConstants.js";

export default defineNuxtRouteMiddleware((to, from) => {
    let authStore = useAuthStore();

    let isLoginPage = to.name === 'admin';
    let hasValidToken = authStore.ValidateToken;


    if (isLoginPage && hasValidToken) { // If Login page And AUTHENTICATED
        return navigateTo('/admin/users')
    }
    if(!isLoginPage && !hasValidToken){
        abortNavigation();
        return navigateTo({path: '/admin'})
    }
})