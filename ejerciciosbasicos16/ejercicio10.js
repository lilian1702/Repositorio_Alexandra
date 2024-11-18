//Buscar el índice de un valor en un arreglo: Crea una función que devuelva el índice de un valor específico en un arreglo.

let indiceArreglo=[1,2,3,4,5,6,7];

let buscador=4;
let indices=0;

function indice(){
    for(let i=0; i<indiceArreglo.length; i++){
        if (indiceArreglo[i]==buscador){
            indices=i;
            break
        }
    }
    console.log("el indice esta en la posicion: "+indices);
}
indice();
