//Buscar el índice de un valor en un arreglo: Crea una función que devuelva el índice de un valor específico en un arreglo.
document.querySelector('okay');
okay.addEventListener('click', () =>{
    let buscador=document.querySelector('#buscador').value;
    indice(buscador);
});
let indiceArreglo=[1,2,3,4,5,6,7];


let indices=0;

function indice(buscador) {
    for(let i=0; i<indiceArreglo.length; i++){
        if (indiceArreglo[i]==buscador){
            indices=i;
            break
        }
    }
    console.log("el indice esta en la posicion: "+indices);
}
