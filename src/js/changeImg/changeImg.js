export const ChangeImg = {
    init() {
        const hero = document.querySelector(".hero")
        if (!hero) return

        hero.addEventListener("mouseenter", function () {
            this.style.backgroundImage = `linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('src/img/semaforo-real.jpg')`
        })

        hero.addEventListener("mouseleave", function () {
            this.style.backgroundImage = ""
        })
    }
}
