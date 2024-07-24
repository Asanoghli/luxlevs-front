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
            currentDate.setFullYear(currentDate.getFullYear()+1)

            this.isSidebarOpen = !this.isSidebarOpen;
            let sideBarCookie = useCookie(SidebarConstants.IS_SIDEBAR_OPEN,{
                expires : currentDate,
                maxAge : 60 * 60 * 24 * 365

            });
            sideBarCookie.value = this.isSidebarOpen;
        }
    }
})