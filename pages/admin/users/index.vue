<script>

export default {
  setup() {
    let sidebarState = useAppSidebar();
    definePageMeta({
      layout: 'admin-layout'
    })
    let users = reactive([
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      },
      {
        id: 1, firstName: 'Levan', lastName: 'Asanoghli',checked : false
      },
      {
        id: 2, firstName: 'Giorgi', lastName: 'Zubashvili',checked: false
      }
    ])

    return {sidebarState,users}
  },
  methods : {
    CheckAllUsers(event,isChecked){
      this.users.forEach((user)=>{
        user.checked = isChecked;
      });
    },
  },
  computed : {
    GetIsEveryUserChecked(){
      return this.users.every(user=>user.checked);
    },
    GetIsAnyoneChecked(){
      return this.users.some(user=>user.checked);
    }
  }
}
</script>
<template>
  <div class="w-full h-full max-h-dvh overflow-y-scroll  overflow-y-hidden">
    <table class="w-full  divide-y divide-gray-200 overflow-x-auto">
      <thead class="bg-gray-200 sticky top-0">
      <tr>
        <th scope="col" class="px-6 size-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <span v-show="GetIsAnyoneChecked">
<!--If All Of Them Checked-->
          <svg v-show="GetIsEveryUserChecked"  @click="CheckAllUsers($event,false)" xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 32 32"><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/><path fill="gray" d="m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58z"/></svg>
<!--         If SomeOne Checked-->
          <svg v-show="GetIsAnyoneChecked && !GetIsEveryUserChecked"  @click="CheckAllUsers($event,true)"  xmlns="http://www.w3.org/2000/svg" class="size-8"   viewBox="0 0 32 32"><path fill="gray" d="M10 14h12v4H10z"/><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/></svg>
          </span>
<!-- If No One Checked-->
          <svg v-show="!GetIsEveryUserChecked && !GetIsAnyoneChecked" @click="CheckAllUsers($event,true)" xmlns="http://www.w3.org/2000/svg" class="size-8"  viewBox="0 0 32 32"><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/></svg>
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
      <tr class="h-14" v-for="user in users" :key="user.id">
        <td class="px-6 whitespace-nowrap">
          <label @click="user.checked = !user.checked">
            <svg v-show="user.checked" xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 32 32"><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/><path fill="gray" d="m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58z"/></svg>
            <svg v-show="!user.checked" xmlns="http://www.w3.org/2000/svg" class="size-8"  viewBox="0 0 32 32"><path fill="gray" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"/></svg>
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