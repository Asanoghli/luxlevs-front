<script>
export  default {
  setup(){
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
  MAIN PAGE
</template>