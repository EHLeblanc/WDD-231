document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu");
  
    menu.addEventListener("click", () => handleMenuClick());
  
  });
  
  function handleMenuClick() {
    const nav = document.querySelector("#navigation");
  
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    
    menu.setAttribute("aria-expanded", !isExpanded);
    
    nav.setAttribute("aria-hidden", isExpanded);
  
    nav.classList.toggle("expanded");
    nav.classList.toggle("collapsed");
  
    menu.textContent = isExpanded ? "☰" : "✖";
  }

const cYearElement = document.getElementById("currentyear"); 
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "Last Modified: " + modified;
}

fetch('./data/roach.json')
  .then(response => response.json())
  .then(infos => {
    const container = document.getElementById("cards-section");

    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/';

    const factsToDisplay = isHomePage ? infos.slice(0, 6) : infos;

    factsToDisplay.forEach(info => {
      const item = document.createElement("div")
      item.classList.add("card");
      

      item.innerHTML = `
        <h3>${info.name}</h3>
        <p>${info.orgin}</p>
        <p>${info.size}</p>
        <p>${info.benefit}</p>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => console.error('Error loading facts:', error));