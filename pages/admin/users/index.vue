<script>

import UsersTableSearchBar from "~/components/users/usersTableSearchBar.vue";

export default {
  components: {UsersTableSearchBar},
  setup() {
    let sidebarState = useAppSidebar();
    definePageMeta({
      layout: 'admin-layout'
    })

    return {sidebarState}
  },

}
</script>
<template>
  <div class="w-full h-full max-h-dvh overflow-y-scroll">
    <users-table-search-bar/>
    <users-table-component/>
  </div>
</template>
<style scoped>
.checkmark {
  height: 25px;
  width: 25px;
  background-color: white;
}

.checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox-input {
  position: absolute;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-input:checked ~ .checkmark {
  background-color: #2196F3;
}

.container input:checked ~ .checkmark:after {
  display: block;
}
</style>