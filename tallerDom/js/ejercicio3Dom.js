let usuario={
    nombre:"",
    apellido:"",
    direccion:"",
    telefono:"",
    email:""
};
document.querySelector("#aceptar").addEventListener("click", function(){
    let name= document.querySelector("#nombre").value;
    usuario.nombre= name;
});

document.querySelector("#aceptar").addEventListener("click", function(){
    let lastname= document.querySelector("#apellido").value;
    usuario.nombreapellido= lastname;
});

document.querySelector("#aceptar").addEventListener("click", function(){
    let direct= document.querySelector("#direccion").value;
    usuario.direccion= direct;
});

document.querySelector("#aceptar").addEventListener("click", function(){
    let direct= document.querySelector("#telefono").value;
    usuario.telefono= fhone;
});

document.querySelector("#aceptar").addEventListener("click", function(){
    let direct= document.querySelector("email").value;
    usuario.email= mail;
});



