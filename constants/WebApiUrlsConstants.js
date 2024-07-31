let baseUrl = 'http://localhost:5144/admin';
export const ADMIN_URLS = {
    USERS : {
        ALL_LIST :`${baseUrl}/users`,
        CREATE :`${baseUrl}/users/create`,
        CHECK_EMAIL:`${baseUrl}/users/check-email`,
    }
}