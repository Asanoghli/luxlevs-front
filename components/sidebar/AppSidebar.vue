<script>
import ChangeLanguageSidebar from "~/components/sidebar/changeLanguageSidebar.vue";
import AppSidebarClosed from "~/components/sidebar/AppSidebarClosed.vue";
import AppSidebarOpened from "~/components/sidebar/AppSidebarOpened.vue";

export default {
  components: {AppSidebarOpened, AppSidebarClosed, ChangeLanguageSidebar},
  setup() {
    let sidebarState = useAppSidebar();
    let isSidebarOpen = sidebarState.isSidebarOpen;
    const {locale, setLocale} = useI18n();
    return {locale, setLocale, isSidebarOpen, sidebarState};
  },
  methods: {
    ToggleSideBar() {
      this.sidebarState.ToggleSidebar();
      console.log(this.sidebarState.isSidebarOpen);
    }
  }
}
</script>
<template>
  <app-sidebar-opened v-show="sidebarState.isSidebarOpen"/>
  <app-sidebar-closed v-show="!sidebarState.isSidebarOpen"/>
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