import {defineStore} from 'pinia'
import {SidebarConstants} from "~/constants/SessionConstants.js";
import {useCreatePersistenceCookie} from "~/composable/useCreateCookie.js";

export const useAppSidebar = defineStore('world', {
    state: () => {
        return {
            isSidebarOpen: true,
        }
    },
    actions: {
        ToggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;

            useCreatePersistenceCookie(SidebarConstants.IS_SIDEBAR_OPEN,this.isSidebarOpen);
        }
    }
})