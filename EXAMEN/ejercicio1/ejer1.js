let lista= document.querySelector("#lista");
lista.style.background="yellow";

let listaDom=[{nombre:"lilian"},{nombre:"juan"}, {nombre:"Natalia"}];

listaDom.forEach(dom=>{
    lista.innerHTML+=`
    <ol>
    <li>${dom.nombre}</li>
    <ol>`
});
