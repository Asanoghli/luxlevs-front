<script>
import {useCreateNullValuePersistenceCookieOrGetExisted} from "~/composables/useCreateCookie.js";
import {AuthConstants, SidebarConstants} from "~/constants/SessionConstants.js";

export default {
  setup() {
    let {setLocale} = useI18n();
    let authStore = useAuthStore();
    let tokenCookie = useCookie(AuthConstants.USER_TOKEN);
    let validToCookie = useCookie(AuthConstants.USER_TOKEN_VALID_TO);


    return {setLocale, authStore, tokenCookie, validToCookie};
  },
  async created() {
    // Check LANGUAGE Settings
    let languageCookie = useCreateNullValuePersistenceCookieOrGetExisted(SidebarConstants.GET_UI_LANGUAGE);
    if (languageCookie.value === undefined) languageCookie.value = this.locale;
    else await this.setLocale(languageCookie.value);

    // Check AUTH Credintials
    console.log(this.tokenCookie)
    if (this.tokenCookie.value !== undefined && this.validToCookie.value !== undefined) {
      console.log('yep');
      this.authStore.AuthByCookie(this.tokenCookie.value, this.validToCookie.value);
    }
  }
}
</script>
<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>
<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>