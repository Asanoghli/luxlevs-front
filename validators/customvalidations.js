import {ValidationConstants} from "~/constants/ValidationConstants.js";

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
}