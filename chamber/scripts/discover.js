import { events } from "../data/events.mjs";

const cards = document.querySelector("#cards");

places.forEach((place, index) => {
    const card = document.createElement("article");

    card.classList.add(`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    cards.appendChild(card);
});