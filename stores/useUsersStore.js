import {defineStore} from "pinia";

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

            ])
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