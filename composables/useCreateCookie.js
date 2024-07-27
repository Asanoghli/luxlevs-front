import {SidebarConstants} from "~/constants/SessionConstants.js";

export const useCreatePersistenceCookie = (cookieKey, cookieValue) => {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1)
    let newCookie = useCookie(cookieKey, {
        expires: currentDate,
        maxAge: 60 * 60 * 24 * 365
    });

    newCookie.value = cookieValue;
}
export  const useCreateNullValuePersistenceCookieOrGetExisted = (cookieKey)=>{
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1)

    let newCookie = useCookie(cookieKey, {
        expires: currentDate,
        maxAge: 60 * 60 * 24 * 365
    });

    return newCookie;
}