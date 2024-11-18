//Transformar todos los nombres a mayúsculas: Crea una función que reciba un arreglo de nombres y los devuelva todos en mayúsculas.

let fraseMayuscula=["lilia", "socorro","anacona","narvaez"];

let convertidor=[]
function mayuscula(){
    for (let i=0; i<fraseMayuscula.length;i++){
        convertidor[i]=fraseMayuscula[i].toUpperCase();
    }
    console.log(convertidor)
}
mayuscula();


