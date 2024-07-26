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
  <div class="h-full w-full max-h-dvh overflow-y-scroll overflow-x-scroll flex flex-col">
    <users-table-search-bar/>
    <div class="w-full overflow-x-scroll">
      <users-table-component/>
    </div>
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