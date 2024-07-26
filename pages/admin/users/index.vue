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
  <div class="w-full h-full max-h-dvh overflow-y-scroll">
    <div class="px-6 bg-gray-700 h-16 flex items-center justify-end">
      <div class="flex-grow flex gap-2 w-full justify-start items-center">
        <input class=" focus:outline-0 p-3 w-1/3 box-content text-white bg-gray-900  rounded" type="text" placeholder="Search">
        <button class="p-3 px-5 h-full flex flex-row items-center justify-center gap-2 bg-blue-600 rounded hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5M9.5 7a1 1 0 0 1 1-1a4.5 4.5 0 0 1 4.5 4.5a1 1 0 1 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1"/></g></svg>
          <span class="text-white">Search</span>
        </button>
      </div>
      <div class="w-1/3 flex justify-end">
        <button class="flex text-white p-3 bg-blue-600 justify-center items-center gap-2 font-thin rounded  hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 5-5zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1m-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>
          <span>მომხმარებლის დამატება</span>
        </button>
      </div>
    </div>
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