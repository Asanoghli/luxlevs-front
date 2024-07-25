<script>
import {useCreateNullValuePersistenceCookieOrGetExisted} from "~/composables/useCreateCookie.js";
import {SidebarConstants} from "~/constants/SessionConstants.js";

export default {
  setup() {
    let {setLocale} = useI18n();


    return {setLocale};
  },
  async created() {
    // Check LANGUAGE Settings
    let languageCookie = useCreateNullValuePersistenceCookieOrGetExisted(SidebarConstants.GET_UI_LANGUAGE);
    if (languageCookie.value === undefined) languageCookie.value = this.locale;
    else await this.setLocale(languageCookie.value);
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