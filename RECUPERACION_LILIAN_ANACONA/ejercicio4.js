//4. Invierte un string. Ejemplo: "hola" → "aloh".


let funcion=(invertir)=>{
    let resultado=invertir.split('').reverse().join('');
    return resultado;
}

let hola=funcion("hola");
console.log(hola); 