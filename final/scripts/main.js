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