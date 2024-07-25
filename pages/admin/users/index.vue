<script>

export default {
  setup() {
    let sidebarState = useAppSidebar();
    definePageMeta({
      layout: 'admin-layout'
    })
    let users = [
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli'
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili'
      }
    ]
    return {sidebarState,users}
  }
}
</script>
<template>
  <div class="w-full">
    <table class="w-full divide-y divide-gray-200 overflow-x-auto">
      <thead class="bg-gray-200">
      <tr>
        <th scope="col" class="px-6 size-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <label for="" class="flex items-center gap-3">
            <input checked="checked" class="size-5 hidden" type="checkbox">
            <span class="w-6 h-6 border border-gray-900"></span>
          </label>
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
      <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="user in users" :key="user.id">
        <td class="px-6 whitespace-nowrap">
              <label for="" class="flex items-center gap-3">
                <input checked="checked" class="size-5 hidden" type="checkbox">
                <span class="w-6 h-6 border border-gray-900"></span>
              </label>
        </td>
        <td class="px-6 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">
            {{user.firstName}} {{user.lastName}}
          </div>
          <div class="text-sm text-gray-500">
            jane.cooper@example.com
          </div>
        </td>
        <td class="px-6 whitespace-nowrap">
          <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
          <div class="text-sm text-gray-500">Optimization</div>
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
    </table>
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