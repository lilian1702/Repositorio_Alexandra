let tareas = ["Eliminar", "buscar","traer","saltar","mirar",];

let div = document.querySelector("#div");

tareas.forEach(btn => {
    let boton = document.createElement("button");
    boton.innerHTML = btn; //
    div.appendChild(boton); // 
});


