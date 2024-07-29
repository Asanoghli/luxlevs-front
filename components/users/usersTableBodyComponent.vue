<script>
export default {
  setup(){
    let usersStore = useUsersStore();
    return{usersStore}
  },

}
</script>
<template>
  <tbody class="bg-white divide-y divide-gray-200 overflow-hidden">
  <tr class="h-14 overflow-hidden" v-for="user in usersStore.users" :key="user.id" :class="user.checked ? 'bg-gray-300' : null">
    <td class="px-6 whitespace-nowrap">
      <label @click="user.checked = !user.checked">
        <svg v-show="user.checked" xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 32 32">
          <path fill="gray"
                d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/>
          <path fill="gray" d="m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58z"/>
        </svg>
        <svg v-show="!user.checked" xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 32 32">
          <path fill="gray"
                d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/>
        </svg>
      </label>
    </td>
    <td class="px-6 whitespace-nowrap">
      <div class="text-sm font-medium text-gray-900">
        {{ user.firstName }} {{ user.lastName }}
      </div>
    </td>
    <td class="px-6 whitespace-nowrap">
      <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
    </td>
    <td class="px-6 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
    </td>
    <td class="px-6 whitespace-nowrap text-sm text-gray-500">
      Admin
    </td>
    <td class="px-6 whitespace-nowrap text-sm text-gray-500">
      jane.cooper@example.com
    </td>
    <td class="px-6 whitespace-nowrap  text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
      <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
    </td>
  </tr>
  </tbody>
</template>
