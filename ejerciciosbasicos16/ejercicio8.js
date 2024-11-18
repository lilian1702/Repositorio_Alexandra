//Remover duplicados en un arreglo: Crea una función que elimine los elementos duplicados de un arreglo.

let numeros = [1, 2, 2, 3, 4, 4, 5,5];
let resultado = duplicado(numeros);

function duplicado(arreglo) {
    let unico = [];

    for (let i = 0; i < arreglo.length; i++) {
        let elemento = arreglo[i];
        let encontrado = false; 
        
        for (let j = 0; j < unico.length; j++) {
            if (unico[j] === elemento) {
                encontrado = true; 
                break; 
            }
        }
        if (!encontrado) {
            unico.push(elemento);
        }
    }

    return unico;
}


console.log(resultado);
