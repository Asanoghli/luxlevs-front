import {defineStore} from "pinia";
import {ADMIN_URLS} from "~/constants/WebApiUrlsConstants.js";
import {AuthConstants} from "~/constants/SessionConstants.js";

export const useUsersStore = defineStore('usersStore', {
    state: () => {
        return {
            users: reactive([
                {
                    id: 1, firstName: 'Levan', lastName: 'Asanoghli', checked: false
                },
                {
                    id: 2, firstName: 'Sandro', lastName: 'Zangurashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },
                {
                    id: 1, firstName: 'Levan', lastName: 'Asanoghli', checked: false
                },
                {
                    id: 2, firstName: 'Sandro', lastName: 'Zangurashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },
                {
                    id: 1, firstName: 'Levan', lastName: 'Asanoghli', checked: false
                },
                {
                    id: 2, firstName: 'Sandro', lastName: 'Zangurashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },
                {
                    id: 1, firstName: 'Levan', lastName: 'Asanoghli', checked: false
                },
                {
                    id: 2, firstName: 'Sandro', lastName: 'Zangurashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },
                {
                    id: 1, firstName: 'Levan', lastName: 'Asanoghli', checked: false
                },
                {
                    id: 2, firstName: 'Sandro', lastName: 'Zangurashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },
                {
                    id: 1, firstName: 'Levan', lastName: 'Asanoghli', checked: false
                },
                {
                    id: 2, firstName: 'Sandro', lastName: 'Zangurashvili', checked: false
                },
                {
                    id: 1, firstName: 'Giorgi', lastName: 'Zubashvili', checked: false
                },

            ]),
            showCreateNewUserModal : false
        }
    },
    actions : {
        ToggleCreateUserModal(){
            this.showCreateNewUserModal = !this.showCreateNewUserModal;
        },
        async CreateUser(user){
            let userToken = useCreateNullValuePersistenceCookieOrGetExisted(AuthConstants.USER_TOKEN);

            let response = null;
            try {
                response = await $fetch(ADMIN_URLS.USERS.CREATE,{
                    body : user,
                    method:'POST',
                    headers : {
                        'Authorization': 'Bearer ' + userToken.value
                    }
                })
            }
            catch{
                response = null
            }

            return response;
        }
    },
    getters:  {
        GetIsEveryUserChecked() {
            return this.users.every(user => user.checked);
        },
        GetIsAnyoneChecked() {
            return this.users.some(user => user.checked);
        },

    }
})