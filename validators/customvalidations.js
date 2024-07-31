import {ValidationConstants} from "~/constants/ValidationConstants.js";
import {ADMIN_URLS} from "~/constants/WebApiUrlsConstants.js";
import {AuthConstants} from "~/constants/SessionConstants.js";

export const PasswordMustContainOneCharacter = function (value){
    if (!ValidationConstants.ADMIN.PASSWORD_MUST_CONTAINS_ONE_CHARACTER) return true;

    return /[^a-zA-Z0-9]/g.test(value);
};

export const PasswordMustContainsOneLowerCase = function (value){
    if(!ValidationConstants.ADMIN.PASSWORD_MUST_CONTAINS_ONE_LOWERCASE) return true;

    return /[a-z]/.test(value);
}
export const PasswordMustContainsOneUpperCase = function (value){
    if(!ValidationConstants.ADMIN.PASSWORD_MUST_CONTAINS_ONE_UPPERCASE) return true;

        return /[A-Z]/.test(value);
}
export const PasswordMustContainsOneNumeric = function (value){
    if(!ValidationConstants.ADMIN.PASSWORD_MUST_CONTAINS_ONE_DIGIT) return true;

        return /\d/.test(value)
};
export  const CheckEmailIfExists = async function (value){
    let token = useCreateNullValuePersistenceCookieOrGetExisted(AuthConstants.USER_TOKEN);
    if(token.value === undefined) return;

   let response = await $fetch(ADMIN_URLS.USERS.CHECK_EMAIL,{
        query : {email :value},
        method : 'GET',
        headers : {
            'Authorization' : 'Bearer '+ token.value
        }
    })

    return response;
}