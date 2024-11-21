let nuevoElemento= document.createElement("div");
nuevoElemento.textContent = "soy un nuevo div";
document.body.appendChild(nuevoElemento);
let nDiv = document.createElement("div");
nDiv.textContent="div nuevo"
nuevoElemento.parentNode.replaceChild(nDiv, nuevoElemento);

