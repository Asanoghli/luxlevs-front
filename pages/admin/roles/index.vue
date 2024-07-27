<script>

export default {
  setup() {
    definePageMeta({
      layout : 'admin-layout',
      middleware : [
          'auth-middleware'
      ]
    })
  }
}
</script>
<template>
  <h1>Hello ADMIN Roles</h1>
</template>