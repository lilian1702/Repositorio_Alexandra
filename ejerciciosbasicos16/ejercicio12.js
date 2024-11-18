//12.	Calcular el promedio de un arreglo de números: Crea una función que devuelva el promedio de los números en un arreglo.
let arregloPromedio=[8,10,12,14,16,18,20];
let contador=0;

function promedio(){
    for (i=0; i<arregloPromedio.length; i++){
        contador=contador+arregloPromedio[i];
    }
    let resultado=contador/arregloPromedio.length;
    console.log("el promedio del arreglo es: "+resultado);
}

promedio();


