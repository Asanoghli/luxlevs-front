<script>
import UsersTableHeadComponent from "~/components/users/usersTableHeadComponent.vue";
import {useUsersStore} from "~/stores/useUsersStore.js";

export default {
  components: {UsersTableHeadComponent},
  setup() {
    let usersStore = useUsersStore();
    return {usersStore}
  }
}
</script>
<template>
  <table class="w-full  divide-y divide-gray-200 overflow-x-auto">
    <users-table-head-component/>
    <users-table-body-component/>
  </table>

</template>
