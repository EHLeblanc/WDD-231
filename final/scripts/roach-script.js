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