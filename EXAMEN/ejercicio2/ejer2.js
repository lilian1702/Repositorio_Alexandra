
let opciones=document.querySelector("#filas")

let objetos=[{nombre:"Lilian",edad:36,email:"lilian@gmail.com"},
    {nombre:"mery", edad:60,email:"mery@gmail.com"},
    {nombre:"juan",edad:35,email:"juan@gmail.com"}];

objetos.forEach(objeto=>{
    filas.innerHTML+=`
        <tr>
        <td>${objeto.nombre}</td>
        <td>${objeto.edad}</td>
        <td>${objeto.email}</td>
        </tr>
    `;
});

