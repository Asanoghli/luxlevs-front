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
  <div class="w-full">
    <table class="divide-y divide-gray-200 w-full">
      <users-table-head-component/>
      <users-table-body-component/>
    </table>
  </div>


</template>
<style scoped>
</style>