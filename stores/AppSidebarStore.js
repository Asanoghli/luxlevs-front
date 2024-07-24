import {defineStore} from 'pinia'
import {SidebarConstants} from "~/constants/SessionConstants.js";

export const useAppSidebar = defineStore('world', {
    state: () => {
        return {
            isSidebarOpen: true,
        }
    },
    actions: {
        ToggleSidebar() {
            let currentDate = new Date();
            let nextYearThisDate = new Date(currentDate.getFullYear()+1,currentDate.getMonth(),currentDate.getDate());
            this.isSidebarOpen = !this.isSidebarOpen;
            let sideBarCookie = useCookie(SidebarConstants.IS_SIDEBAR_OPEN,{
                expires : nextYearThisDate.getTime
            });
            console.log(currentDate)
            console.log(nextYearThisDate)
            sideBarCookie.value = this.isSidebarOpen;

        }
    }
})