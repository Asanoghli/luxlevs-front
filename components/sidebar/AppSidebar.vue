<script>
import AppSidebarClosed from "~/components/sidebar/AppSidebarClosed.vue";
import AppSidebarOpened from "~/components/sidebar/AppSidebarOpened.vue";
import {SidebarConstants} from "~/constants/SessionConstants.js";
import {
  useCreateNullValuePersistenceCookieOrGetExisted
} from "~/composable/useCreateCookie.js";

export default {
  components: {AppSidebarOpened, AppSidebarClosed},
  setup() {
    let sidebarState = useAppSidebar();
    const {locale, setLocale} = useI18n();

    return {locale, setLocale, sidebarState};
  },
  async created() {
    // CHECK SIDEBAR STATUS FROM COOKIE AND CREATE IT IF DOES NOT EXISTS
    if (process.server) { // RUN ONLY SERVER SIDE
      let sidebarCookie = useCreateNullValuePersistenceCookieOrGetExisted(SidebarConstants.IS_SIDEBAR_OPEN);
      if (sidebarCookie.value === undefined || sidebarCookie.value === true) {
        this.sidebarState.isSidebarOpen = true;
        sidebarCookie.value = true
      } else {
        this.sidebarState.isSidebarOpen = false
        sidebarCookie.value = false;
      }
    }
  }
}
</script>
<template>
  <app-sidebar-opened v-show="sidebarState.isSidebarOpen"/>
  <app-sidebar-closed v-show="!sidebarState.isSidebarOpen"/>
</template>