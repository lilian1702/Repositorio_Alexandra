
let div = document.querySelector("#div");

fetch("https://pokeapi.co/api/v2/pokemon?limit=9") 
    .then((respuesta) => respuesta.json())
    .then((data) => {
        console.log(data); 
        data.results.forEach((pokemon) => {
            fetch(pokemon.url) 
                .then((respuesta) => respuesta.json())
                .then((details) => {
                    let item = document.createElement("div");
                    item.innerHTML = `
                        <p>${details.name}</p>
                        <img src="${details.sprites.front_default}" alt="${details.name}">
                    `;
                    div.appendChild(item);
                })
                
        });
    })
