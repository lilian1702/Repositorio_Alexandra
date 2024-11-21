//Usa document.getElementById para seleccionar el <div> con el ID info y muestra en la consola el texto dentro de ese <div>.
//Usa document.querySelector para seleccionar el primer elemento con la clase detalle y cambia su texto a "Este es un detalle modificado".
//Usa document.querySelectorAll para seleccionar todos los elementos de tipo <p> y cambia su color de fondo a lightblue.

let div = document.getElementById("info");
div.innerHTML = "Bienvenido";


let detalle = document.querySelector(".detalle");
detalle.textContent ="este es un detalle modificado";

detalle.style.backgroundColor="lightblue";


