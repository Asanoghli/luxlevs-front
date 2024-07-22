import {defineStore} from '@pinia/nuxt'
export  const useSidebarStore = defineStore('SidebarStore',{
    state : ()=>{
        return {
          counter : 0
        };
    }
})