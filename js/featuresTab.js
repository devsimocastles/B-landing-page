


const tabTitles = document.querySelectorAll("span[data-tabtitleid]");

function handleTitle(e){
   e.target.classList.add("active");
   tabTitles.forEach(title => {
     console.log(e.target.dataset.tabtitleid);
      console.log(title.dataset.tabtitleid);
   })
}


tabTitles.forEach(title => {
   title.addEventListener("click", handleTitle);
})