<script>

import UsersTableSearchBar from "~/components/users/usersTableSearchBar.vue";
import UsersCreateNewUserModal from "~/components/users/usersCreateNewUserModal.vue";
import Pagination from "~/components/common/Pagination.vue";
import {ADMIN_URLS} from "~/constants/WebApiUrlsConstants.js";

export default {
  components: {Pagination, UsersCreateNewUserModal, UsersTableSearchBar},
  async setup() {
    let route = useRoute();
    let pageNumber = ref(route.query.page ? route.query.page : 1);
    let usersStore = useUsersStore();
    let response  = await usersStore.FetchUsers(pageNumber);

    definePageMeta({
      layout: 'admin-layout',
      middleware: [
          'auth-middleware'
      ]
    })

    return {usersStore,pages : response.pagesCount,rows : response.rowCount,pageNumber : pageNumber}
  },
  watch : {
    pageNumber : function (to,from){
      let pageNumber = to === undefined ? 1 : to
      this.usersStore.FetchUsers(pageNumber);
    }
  }
}
</script>
<template>
  <div class="h-full w-full max-h-dvh overflow-hidden flex flex-col">
    <users-table-search-bar/>
    <div class="w-full overflow-x-hidden">
      <users-table-component/>
      <pagination v-model="pageNumber"  :page-count="pages" :rows-count="rows"/>
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