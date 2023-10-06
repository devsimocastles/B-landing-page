


// HTML NODES ///////////////////////////////////////////
const tabTitles = Array.from(document.querySelectorAll("span[data-tabtitleid]"));
const tabContent = document.getElementById("tab-content");


// CURRENT ACTIVE TAB ////////////////////////////
let activeTabId = 1;

// set the first tab as default //////////////////
tabTitles[0].classList.add("active")
updateTab(activeTabId);


// add click event listener for all tab title ////////
tabTitles.forEach(title => {
   title.addEventListener("click", handleTitle);
})


//// FUNCTIONS ///////////////////////////////////////////////////////


/*
   This function returns the html code that
   will be appended to the tabContent HTML node.
*/
function createTab(imgSrc, title, content) {
   return `
   <section class="tab">
      <div class="tab-hero-container">
        <img src="${imgSrc}" alt="${title}">
      </div>
      <div class="content">
      <header>
         <h3>${title}</h3>
      </header>
        <p>${content}</p>
      </div>
      <div class='bg-pattern'></div>
   </section>
      `;
}


/*
   this function takes and id and updates the
   tab content depending on the passed id
*/
function updateTab(tabId) {
   let tab;
   if (tabId == 1) tab = createTab(
      "../images/illustration-features-tab-1.png",
      "Bookmark in one click",
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites");
   if (tabId== 2) tab = createTab(
      "../images/illustration-features-tab-2.png",
      "Intelligent search", 
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.");
   if (tabId== 3) tab = createTab(
      "../images/illustration-features-tab-3.png",
      "Share your bookmarks",
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
   ) 
   tabContent.innerHTML = tab;
   // add the "active" class after 100 ms, it's a transition for opacity, from 0 to 1 ///////
   setTimeout(() => document.querySelector(".tab").classList.add("active"), 250);
}

/*
   This function updates the current active tab, and shows it respectively
*/
function handleTitle(e) {

   activeTabId = e.target.dataset.tabtitleid;

   e.target.classList.add("active");

   const inactiveTabs = Array.from(tabTitles)

      .filter(tab => tab.dataset.tabtitleid != e.target.dataset.tabtitleid);

   inactiveTabs.forEach(tab => tab.classList.remove("active"));

   setTimeout(() => updateTab(activeTabId), 200)
   
}
