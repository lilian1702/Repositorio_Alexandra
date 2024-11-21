let parrafo= document.createElement("p");
parrafo.textContent= "este es un parrafo creado dinamicamente";
document.body.appendChild(parrafo);

let boton= document.querySelector("#eliminar");
boton.addEventListener("click", ()=>{
    parrafo.remove();
})




