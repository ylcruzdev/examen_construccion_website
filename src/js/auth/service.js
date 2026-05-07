export const authService = {

    users: [
        {
            email: "ylcruz.dev@gmail.com",
            password: "12345678",
            name: "Yoandres La Cruz"
        },
        {
            email: "luis.alfonso@gmail.com",
            password: "87654321",
            name: "Luis Afonso"
        },
    ],

    getUserByEmail(email){
        const result = {}

        let user = this.users.filter(user => user.email === email)

        result.status = user.length > 0 ? true : false
        result.msg = result.status ? "usuario existe" : "usuario no existe"
        result.data = result.status ? user[0] : ""

        return result
    }  

}