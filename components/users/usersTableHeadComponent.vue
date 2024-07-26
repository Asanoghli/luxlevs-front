<script>
export default {
  setup(){
    let usersStore = useUsersStore();

    return {usersStore};
  },
  methods: {
    CheckAllUsers(event, isChecked) {
      this.usersStore.users.forEach((user) => {
        user.checked = isChecked;
      });
    },
  }
}
</script>
<template>
  <thead class="bg-gray-200 ">
  <tr>
    <th scope="col" class="px-6 size-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <span v-show="usersStore.GetIsAnyoneChecked">
          <!--If All Of Them Checked-->
          <svg v-show="usersStore.GetIsEveryUserChecked"  @click="CheckAllUsers($event,false)" xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 32 32"><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/><path fill="gray" d="m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58z"/></svg>
            <!--         If SomeOne Checked-->
          <svg v-show="usersStore.GetIsAnyoneChecked && !usersStore.GetIsEveryUserChecked"  @click="CheckAllUsers($event,true)"  xmlns="http://www.w3.org/2000/svg" class="size-8"   viewBox="0 0 32 32"><path fill="gray" d="M10 14h12v4H10z"/><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/></svg>
          </span>
      <!-- If No One Checked-->
      <svg v-show="!usersStore.GetIsEveryUserChecked && !usersStore.GetIsAnyoneChecked" @click="CheckAllUsers($event,true)" xmlns="http://www.w3.org/2000/svg" class="size-8"  viewBox="0 0 32 32"><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/></svg>
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      FULLNAME
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Title
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Status
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Role
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Email
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Actions
    </th>
  </tr>
  </thead>
</template>