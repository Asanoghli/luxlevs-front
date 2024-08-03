<script>

import UsersTableSearchBar from "~/components/users/usersTableSearchBar.vue";
import UsersCreateNewUserModal from "~/components/users/usersCreateNewUserModal.vue";
import Pagination from "~/components/common/Pagination.vue";

export default {
  components: {Pagination, UsersCreateNewUserModal, UsersTableSearchBar},
  setup() {
    let usersStore = useUsersStore();
    definePageMeta({
      layout: 'admin-layout',
      middleware: [
          'auth-middleware'
      ]
    })

    return {usersStore}
  },

}
</script>
<template>
  <div class="h-full w-full max-h-dvh overflow-hidden flex flex-col">
    <users-table-search-bar/>
    <div class="w-full overflow-x-hidden">
      <users-table-component/>
      <pagination page-count="10"/>
    </div>
  </div>
<users-create-new-user-modal v-show="usersStore.showCreateNewUserModal"/>
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