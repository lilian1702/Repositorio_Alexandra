let votos = [0, 0, 0, 0]; 
document.addEventListener("DOMContentLoaded", () => {
  
  let div = document.querySelector("#div");
  const cerrarBtn = document.querySelector("#cerrar");
  const resultado = document.querySelector("#resultado");
  const lista = document.querySelector("#resultados");

  
  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", () => {
      alert("Sesión cerrada");
      window.location.href = "./login.html";
    });
  }

 
  if (resultado && lista) {
    resultado.addEventListener("click", () => {
      lista.innerHTML = `
        <h2>Resultados</h2>
        <ul>
          <li>Juan Pérez: ${votos[0]}</li>
          <li>Ana Gómez: ${votos[1]}</li>
          <li>Carlos Martínez: ${votos[2]}</li>
          <li>Voto en blanco: ${votos[3]}</li>
        </ul>
      `;
    });
  }});



let div = document.querySelector("#div");


fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/candidatos.json")
  .then(response => response.json())
  .then(candidatos => {
    candidatos.forEach((candidato, index) => {
     
      div.innerHTML += `
        <div class="card">
            <h3>${candidato.curso}</h3>
            <img src="${candidato.foto}" alt="Foto de ${candidato.nombre}" class="fotos" data-nombre="${candidato.nombre}" data-index="${index}">
            <h3>Aprendiz: ${candidato.nombre} ${candidato.apellido}</h3>
            <h3>Ficha: ${candidato.ficha}</h3>
        </div>
      `;
    });

  
    let img = document.querySelectorAll('.fotos');

    img.forEach(imagen => {
      imagen.addEventListener('click', () => {
        let index = imagen.getAttribute('data-index');  
        let nombre= imagen.getAttribute('data-nombre');

        let confirmacion = confirm(`¿Deseas votar por ${nombre}?`);

        if (confirmacion) {
          
          votos[index]++;
          alert(`¡Tu voto ha sido registrado para el candidato ${nombre}!`);
        }

        console.log(votos);  
      });
    });
  });




document.querySelector("#btn").addEventListener("click",()=>{
let user = document.querySelector("#usuario").value;
let contra = document.querySelector("#contrasena").value;
fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/administrador.json")
 .then(respuesta=>respuesta.json())
 .then (usuarios=>{
  let admin=usuarios.username;
  let password=usuarios.password;
  if(user==admin && contra==password){
    alert("Contraseña correcta")
    window.location.href = "./app.html";
  }else{
    alert("Contraseña incorrecta")
  }
 })
});






