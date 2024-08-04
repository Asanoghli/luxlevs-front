<script>

import UsersTableSearchBar from "~/components/users/usersTableSearchBar.vue";
import UsersCreateNewUserModal from "~/components/users/usersCreateNewUserModal.vue";
import Pagination from "~/components/common/Pagination.vue";
import {ADMIN_URLS} from "~/constants/WebApiUrlsConstants.js";

export default {
  components: {Pagination, UsersCreateNewUserModal, UsersTableSearchBar},
  async setup() {
    let usersStore = useUsersStore();
    let route = useRoute();
    let router = useRouter();
    let queryPage = route.query.page;
    let currentPage = ref(1);
    if(queryPage && queryPage >0){
      currentPage = queryPage;
    }
    else{
     await router.push({
        path : '/admin/users'
      })
    }
    currentPage = ref(route.query.page && route.query.page > 0 ? route.query.page : 1);
    let response  = await usersStore.FetchUsers(currentPage);
    let totalPagesCount = response.pagesCount;
    let totalRowsCount = response.rowCount;
    if(currentPage.value <1 || currentPage > totalPagesCount){
      await router.push({
        path : '/admin/users',
        query : {}
      });
    }

    definePageMeta({
      layout: 'admin-layout',
      middleware: [
          'auth-middleware'
      ]
    })

    return {usersStore,totalPagesCount,totalRowsCount,currentPage,router,route}
  },
  watch : {
    currentPage : function (to,from){
      let pageNumber = to === undefined ? 1 : to

        if(pageNumber === 1) this.router.push({
           query:{},
          path : '/admin/users'
        })
      else  this.router.push({
          query:{page : pageNumber},
          path : '/admin/users'
        })
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
      <pagination  v-model="currentPage"  :page-count="totalPagesCount" :rows-count="totalRowsCount"/>
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