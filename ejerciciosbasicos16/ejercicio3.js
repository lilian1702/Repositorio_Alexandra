//Sumar valores de un arreglo: Crea una función que reciba un arreglo de números y devuelva la suma de todos sus valores.
let arregloSuma=[4,5,6,8,9,12,14];
let contador=0;

function suma(){
    for(let i=0; i<arregloSuma.length;i++){
        contador=contador+arregloSuma[i];
    }
    console.log("la suma es "+contador);
}
suma(); 
