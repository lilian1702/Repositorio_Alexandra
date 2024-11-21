let boton= document.querySelector("#clickMe")
let boton2= document.querySelector("#removeEvent");

function alerta(){
    alert("boton clikeado")

}
boton.addEventListener("click", alerta);

boton2.addEventListener("click",()=>{
    boton.removeEventListener("click",alerta);
});


