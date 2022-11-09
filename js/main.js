const d = document;

const $hamburger = d.querySelector(".nav__hamburguer");
const $close = d.querySelector(".nav__close");

const $menu = d.querySelector(".menu");

d.addEventListener("click", (e) => {

    console.log(e.target);
    if (e.target.matches(".nav__hamburguer *")) {
        $hamburger.style.zIndex = "90";
        $hamburger.style.visibility="hidden";
        $menu.classList.add("show");
    }

    if (e.target.matches(".nav__close *")) {
        $hamburger.style.zIndex = "99";
        $hamburger.style.visibility="visible";
        $menu.classList.remove("show");
    }
})
