let arreglo=[{nombre:"constanza",apellido:"quita",correo:"squita@gmail.com"},{nombre:"david",apellido:"quira", correo:"david@gmial.com"}];

let tbody=document.querySelector("#tbody");

arreglo.forEach((a) => {
    tbody.innerHTML+=`
    <tr>
            <td>${a.nombre}</td>
            <td>${a.apellido}</td>
            <td>${a.correo}</td>
           </tr> `;
});