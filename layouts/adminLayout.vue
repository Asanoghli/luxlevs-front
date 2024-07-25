<script>
import AppSidebar from "~/components/sidebar/AppSidebar.vue";
import {SidebarConstants} from "~/constants/SessionConstants.js";

export default {
  components: {AppSidebar},
  setup() {
    let sidebarState = useAppSidebar();

    return {sidebarState};
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