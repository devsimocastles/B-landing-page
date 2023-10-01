
// hambrguer menu transition
const hamburguer_menu = document.getElementById("hamburguer_menu");
const hamburguer_icon = document.getElementById("hamburguer_icon");
// main menu (it will be hidden when the ham- menu is active)
const main_menu = document.getElementById("main_menu");

// close icon
const close_icon = document.getElementById("close_icon"); 

let isMenuActive = false;

function updateMenuStatus(isMenuActive){
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

hamburguer_icon.addEventListener("click", (e) => {
    isMenuActive == true ? isMenuActive = false : isMenuActive = true;
    updateMenuStatus(isMenuActive);
})

close_icon.addEventListener("click", () => {
    isMenuActive = false;
    updateMenuStatus(isMenuActive)
})
