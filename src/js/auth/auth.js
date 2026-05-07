import { authController } from "./controller.js"
import { authView } from "./view.js"

export const Auth = {

    init(){
        authView.init()
    },

    hello(){
        let validateCredentials = authController.validateCredentials("ylcruz.dev@gmail.com", "12345678")
        console.log(validateCredentials)
    },

}