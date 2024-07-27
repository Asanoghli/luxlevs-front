import {defineStore} from "pinia";
import {AuthConstants} from "~/constants/SessionConstants.js";
import {useCookie} from "#app";
import {useCreatePersistenceCookie} from "~/composables/useCreateCookie.js";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            isAuthenticated: false,
            userData: reactive({}),
            token: '',
        }
    },
    actions: {
        async Authenticate(authCredentials) {
            // let config = useRuntimeConfig();
            let response = await $fetch('http://localhost:5144/login', {
                body: authCredentials,
                method: 'POST',
            });

            if (response.data) {
                this.AuthByCookie(response.data.token, response.data.validTo);

                return true;
            }

            return false;
        },
        AuthByCookie(token, validTo) {
            this.token = token;
            this.validTo = validTo;
            useCreatePersistenceCookie(AuthConstants.USER_TOKEN, this.token);
        }
    },
    getters: {
        isAuthenticated() {
            let cookie = useCreateNullValuePersistenceCookieOrGetExisted(AuthConstants.USER_TOKEN);
            let isValid = cookie.value !== undefined;

            return isValid;
        }
    }
})