<script>

export default {
  setup() {
    let sidebarState = useAppSidebar();
    definePageMeta({
      layout : 'admin-layout'
    })
    return {sidebarState}
  }
}
</script>
<template>
  <h1>Hello ADMIN Users :</h1>
  <hr>
  {{sidebarState.isSidebarOpen}}
</template>