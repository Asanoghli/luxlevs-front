<script>
import AppSidebarClosed from "~/components/sidebar/AppSidebarClosed.vue";
import AppSidebarOpened from "~/components/sidebar/AppSidebarOpened.vue";
import {SidebarConstants} from "~/constants/SessionConstants.js";

export default {
  components: {AppSidebarOpened, AppSidebarClosed},
  setup() {
    let sidebarState = useAppSidebar();
    const {locale, setLocale} = useI18n();

    return {locale, setLocale, sidebarState};
  },
  created() {
    // CHECK SIDEBAR STATUS FROM COOKIE AND CREATE IT IF DOES NOT EXISTS
    if(process.server){ // RUN ONLY SERVER SIDE
      console.log('TWICE');
      let sidebarCookie = useCookie(SidebarConstants.IS_SIDEBAR_OPEN);
      if (sidebarCookie.value === null || sidebarCookie.value === true) {
        this.sidebarState.isSidebarOpen = true;
      } else{
        this.sidebarState.isSidebarOpen = false
        sidebarCookie.value = false;
      }
    }
    //END CHECK SIDEBAR STATUS FROM COOKIE AND CREATE IT IF DOES NOT EXISTS

  }
}
</script>
<template>
  <app-sidebar-opened v-show="sidebarState.isSidebarOpen"/>
  <app-sidebar-closed v-show="!sidebarState.isSidebarOpen"/>
  <hr>
  {{sidebarState.isSidebarOpen}}
</template>
<style>
.active {
  @apply text-gray-200 bg-gray-700 rounded;
}

.sidebar-item {
  @apply flex items-center w-full h-12 px-3 mt-2 rounded;
}

.sidebar-item:hover:not(.active) {
  @apply bg-gray-700 text-gray-300
}

.sidebar-bottom {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 5rem;
  width: 100%;
  height: max-content;
}

.sidebar-bottom-hide {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  bottom: 5rem;
  width: 100%;
  height: max-content;
}

.show {
  animation: showAnim .3s ease-in-out;
}

.hide {
  animation: hideAnim .3s ease-in-out;
}

@keyframes showAnim {
  from {
    @apply w-16;
  }
  to {
    @apply w-80;

  }
}

@keyframes hideAnim {
  from {
    @apply w-80;
  }
  to {
    @apply w-16;
  }
}
</style>