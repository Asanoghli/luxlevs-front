import {SidebarConstants} from "~/constants/SessionConstants.js";

export const useGetLocaleValue = ()=>{
    let currentLanguage = 'ge';
    let cookie = useCookie(SidebarConstants.GET_UI_LANGUAGE);
    return cookie.value === undefined ? 'ge' : cookie.value;
}