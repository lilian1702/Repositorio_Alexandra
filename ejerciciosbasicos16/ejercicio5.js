//Verificar si un elemento está en el arreglo: Crea una función que 
//determine si un número dado está presente en un arreglo.
let verificarNumero=[5,8,9,11,15,20];
let comparar=0;
let numero=9;
function verificar (){
    for (let i=0; i<verificarNumero.length; i++){
        if(numero==verificarNumero[i]){
            console.log("el numero fue encontrado")
            break//para salirse del for si cumple la condicion
        }else{
            console.log("el numero no fue encontrado")
        }
    }
}
verificar();
