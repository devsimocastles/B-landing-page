
import { desktopMenu, mobileMenu } from "./menuTemplates.js";
import { updateMenuStatus, isMenuActive } from "./hamburguerMenu.js";

const menu_wrapper = document.getElementById("menu_wrapper");

console.log(menu_wrapper);

function updateMenu(e) {
    setTimeout(() => {
        if(e.target.innerWidth >= 1024) menu_wrapper.innerHTML = desktopMenu;
        if (e.target.innerWidth <= 1023){
            menu_wrapper.innerHTML = mobileMenu;
            document.getElementById("hamburguer_icon").onclick = updateMenuStatus;
            document.getElementById("close_icon").onclick = updateMenuStatus;
        } 
    }, 100);
}

window.onload = (e) => updateMenu(e);
window.addEventListener("resize", updateMenu);