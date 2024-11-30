//14. Combina dos arrays en uno nuevo.

let arreglo1=[20,23,25,28];
let arreglo2=[10,11,90,99,999,999];
let combinado=[];


let nuevo=()=>{
    arreglo1.forEach((num)=>{
        combinado.push(num);
    })
    
    arreglo2.forEach((num)=>{
        combinado.push(num);
    })
    
    console.log(combinado);
}

nuevo();

