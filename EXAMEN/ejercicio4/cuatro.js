let div=document.querySelector("#div");
fetch("https://jsonplaceholder.typicode.com/posts ")
    .then(respuesta=>respuesta.json())
    .then(datos => {
        console.log(datos);
        datos.forEach(dato => {
            let li=document.createElement('li');
            li.innerHTML = `
                <p>${dato.title}</p>
                

            `;
            div.appendChild(li);
        });
    })
    