import { authService } from "./service.js"

export const authController = {
    statusAuth: false,
    userAuthenticated: {
        name: "",
        email: ""
    },

    authenticated(user){
        this.statusAuth=true
        this.userAuthenticated.name = user.name
        this.userAuthenticated.email = user.email        
    },

    validateCredentials(email, password){
        const result = {}
        let user = authService.getUserByEmail(email)
        let validate = false
        //si existe el user
        //validar email y pasword aqui luego
        if (user.status){
            validate = (password === user.data.password) && (email === user.data.email) ? true : false
            //si las credenciales son correctas llamar a authenticated y colocar dentro de result status true y msg: "login existoso"
            if(validate){
                this.authenticated(user.data)
                result.status = true
                result.msg = "login exitoso"                
            }
            else{
                // si las credenciales no son correctas colocar dentro de result status: false y msg: "credenciale snvalidas"
                result.status = false
                result.msg = "credenciales incorrectas"
            }
        }
        else{
            // sino existe el user colocar dentro del resulto status: false y msg: 
            result.status = false
            result.msg = user.msg
        }

        return result

    }


    

}