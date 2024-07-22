import {defineStore}  from 'pinia'
export  const useAppSidebar = defineStore('world',{
state: ()=>{
   return {
      isSidebarOpen : true,
   }
},
actions : {
   ToggleSidebar(){
      this.isSidebarOpen = !this.isSidebarOpen;
      console.log('JS : '+this.isSidebarOpen);
   }
}
})