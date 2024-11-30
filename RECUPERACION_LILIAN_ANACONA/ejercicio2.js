//2. Calcula la suma de un array de números.
let arreglo=[2,3,4,5];

let contador=0;


let calculadora=(arreglo,contador)=>{
    arreglo.forEach((sum)=>{
        contador=contador+sum;
       
    })
    console.log(contador);
};

calculadora(arreglo,contador);