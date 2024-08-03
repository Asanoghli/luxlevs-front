import {defineStore} from "pinia";
import {ADMIN_URLS} from "~/constants/WebApiUrlsConstants.js";
import {AuthConstants} from "~/constants/SessionConstants.js";
import {useWebsiteStore} from "~/stores/appWebsiteStore.js";

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
                }
            ]),
            showCreateNewUserModal: false
        }
    },
    actions: {
        ToggleCreateUserModal() {
            this.showCreateNewUserModal = !this.showCreateNewUserModal;
        },
        async CreateUser(user) {
            let websiteStore = useWebsiteStore();
            let userToken = useCreateNullValuePersistenceCookieOrGetExisted(AuthConstants.USER_TOKEN);

            let response = null;
            try {
                response = await $fetch(ADMIN_URLS.USERS.CREATE, {
                    body: user,
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + userToken.value
                    }
                })
            } catch {
                response = null
            }

            if (response == null) {
                websiteStore.ShowToast(-1, 'მომხმარებლის დამატების დროს მოხდა შეცდომა.')
                return {isSuccess: false};
            }
            if (response.errors) {
                websiteStore.ShowToast(-1, response.errors[0].errorMessage);
                return {isSuccess: false};
            }
            if (response.isSuccess) {
                websiteStore.ShowToast(1, 'მომხმარებელი წარმატებით დაემატა');

                return {userId: response.data.id, isSuccess: true};
            }
        },
          async FetchUsers(pageNumber) {
            let cookie = useCreateNullValuePersistenceCookieOrGetExisted(AuthConstants.USER_TOKEN);
            let usersResponse =  await useFetch(ADMIN_URLS.USERS.ALL_LIST, {
                query: {
                    pageNumber: pageNumber
                },
                headers: {
                    "Authorization": "Bearer " + cookie.value
                }
            })
             this.users    = usersResponse.data.value.dataList;

            return usersResponse;
        }
    },
    getters: {
        GetIsEveryUserChecked() {
            return this.users.every(user => user.checked);
        },
        GetIsAnyoneChecked() {
            return this.users.some(user => user.checked);
        },

    }
})