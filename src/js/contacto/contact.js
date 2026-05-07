export const Contact = {
    init() {
        const privCheckbox = document.querySelector("#privacidad")
        const submitBtn = document.querySelector("#contactoSubmitBtn")

        if (submitBtn) submitBtn.disabled = true

        if (privCheckbox && submitBtn) {
            privCheckbox.addEventListener("change", function () {
                submitBtn.disabled = !this.checked
            })
        }
    }
}
