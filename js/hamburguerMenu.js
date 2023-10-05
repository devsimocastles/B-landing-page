

let isMenuActive = false;

function updateMenuStatus() {

    let hamburguer_menu = document.getElementById("hamburguer_menu");
    let hamburguer_icon = document.getElementById("hamburguer_icon");
    // main menu (it will be hidden when the ham- menu is active)
    let main_menu = document.getElementById("main_menu");

    // close icon
    let close_icon = document.getElementById("close_icon");

    isMenuActive = !isMenuActive;
    if (isMenuActive == true) {
        hamburguer_menu.classList.add("active");
        main_menu.classList.add("hidden");
        setTimeout(() => hamburguer_menu.classList.add("animation"), 100);
    } else {
        setTimeout(() =>
        hamburguer_menu.classList.remove("active"), 100);
        hamburguer_menu.classList.remove("animation");
        main_menu.classList.remove("hidden");

    }
}

document.getElementById("hamburguer_icon").addEventListener("click", (e) => {
    updateMenuStatus();
})

document.getElementById("close_icon").addEventListener("click", () => {
    updateMenuStatus();
})

export { updateMenuStatus, isMenuActive }