import { authController } from "./controller.js"

export const authView = {
    loginBtn: document.querySelector("#loginBtn"),
    resetBtn: document.querySelector("#resetBtn"),
    divMsg: document.querySelector("#result-auth-msg"),
    form: document.querySelector("#loginForm"),

    init(){
        const thisArg = this
        if (this.resetBtn){
            this.resetBtn.addEventListener("click", function(e){
                thisArg.resetForm
            })
        }

        if (this.loginBtn){
            this.loginBtn.addEventListener("click", function(e){
                e.preventDefault()
                thisArg.getData()
            })
        }
    },

    responseMsg(msg){
        if (this.divMsg){
            this.divMsg.innerHTML = `<p>${msg}</p>`
        }
    },
    resetForm(){
        if(this.form){
            this.form.reset()
        }
    },
    getData(){
        let email = document.querySelector("#email").value
        let pasword = document.querySelector("#password").value

        let result = authController.validateCredentials(email, pasword)

        if (result.status) {
            window.location.replace("../index.html")
        }
        else{
            this.responseMsg(result.msg)
        }
    }

}