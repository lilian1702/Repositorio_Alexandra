//Encontrar el número más grande en un arreglo: Crea una función que 
//devuelva el número más grande de un arreglo de números.
let numeroGrande=[6,9,12,15,18,666,21,24,5];
let mayor=numeroGrande[0];


function numeroG(){
    for(let i=0; i<numeroGrande.length; i++){
        if(numeroGrande[i]>mayor){
            mayor=numeroGrande[i]
        }
    }
    console.log("el numero mayor es "+mayor)
}
numeroG();
