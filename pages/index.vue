<script>
export  default {
  setup(){
    let num = ref(false);


    return {num};
  },
  methods : {
    TestMe(){
      this.num = !this.num;
    }
  }
}
</script>
<template>
  <h1 @click="TestMe">Hello WOrld - {{num}}</h1>
</template>