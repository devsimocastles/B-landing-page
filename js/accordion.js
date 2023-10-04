

const accordionsHeader = Array.from(document.querySelectorAll("h4[data-accordionid]"));
const dropdowns = Array.from(document.querySelectorAll("div[data-accordioncontentid]"));
const tabsArrows = Array.from(document.querySelectorAll(".arrow-icon"));

console.log(tabsArrows);

accordionsHeader.forEach(acc => {
    acc.addEventListener("click", (e) => {
        dropdowns.forEach((content, i) => {
            content.classList.remove("active");
            if(content.dataset.accordioncontentid == e.target.dataset.accordionid) {
                content.classList.add("active");
            }
        })
        tabsArrows.forEach((arrow) => {
            arrow.classList.remove("active");
            if(arrow.dataset.arrowid == e.target.dataset.accordionid){
                arrow.classList.add("active");
            }
        })
    })
})