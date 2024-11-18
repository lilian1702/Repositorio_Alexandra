//Contar números pares en un arreglo: Crea una función que cuente cuántos 
//números pares existen en un arreglo de números.

let numP=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let division=0;
let contador=0;

function pares(){
    for(let i=0; i<numP.length; i++){
         if (numP[i]%2==0){
            contador=contador+1;
         }
    }
    console.log("los numeros pares son: "+contador);
}
pares();

