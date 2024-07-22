<script>
import AppSidebar from "~/components/sidebar/AppSidebar.vue";

export default {
  components: {AppSidebar},
  setup() {
  },
  methods: {}
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