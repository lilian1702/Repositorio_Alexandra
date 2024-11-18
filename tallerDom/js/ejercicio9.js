//Transformar todos los nombres a mayúsculas: Crea una función que reciba un arreglo de nombres y los devuelva todos en mayúsculas.
document.querySelector('okay');
okay.addEventListener('click', ()=>{
    let nomb1=document.querySelector('#nomb1').value;
    let nomb2=document.querySelector('#nomb2').value;
    let nomb3=document.querySelector('#nomb3').value;
    let nomb4=document.querySelector('#nomb4').value;

    fraseMayuscula.push(nomb1,nomb2,nomb3,nomb4);

    
    mayuscula(fraseMayuscula);
 });    


let fraseMayuscula = [];
let convertidor=[];

function mayuscula(fraseMayuscula){
    for (let i=0; i<fraseMayuscula.length;i++){
        convertidor[i]=fraseMayuscula[i].toUpperCase();
    }
    console.log(convertidor)
}



