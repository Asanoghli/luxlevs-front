<script>
import AppSidebar from "~/components/sidebar/AppSidebar.vue";
import {SidebarConstants} from "~/constants/SessionConstants.js";

export default {
  components: {AppSidebar},
  setup() {
    let sidebarState = useAppSidebar();

    return {sidebarState};
  },
  methods: {},
  mounted(){
    // Is Sidebar Open Or Close
    let hasKey = localStorage.getItem(SidebarConstants.IS_SIDEBAR_OPEN);
    if(hasKey === null || hasKey ==='true') this.sidebarState.isSidebarOpen = true;
    else
      this.sidebarState.isSidebarOpen = false
  }
}
</script>
<template>
  <header>
  </header>
  <main class="flex">
    <aside class="h-dvh">
      <AppSidebar class="w-full"/>
    </aside>
    <slot/>
  </main>
</template>
<style scoped>

</style>