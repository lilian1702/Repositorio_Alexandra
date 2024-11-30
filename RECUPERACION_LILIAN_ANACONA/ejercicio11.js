//11. Escribe una función que reciba un array y un número y devuelva los números mayores
//que el número dado.
let numeros=[4,7,9,11,15];
let Nmayores=[]
let numero=(num,numeros)=>{
    numeros.forEach((fnumeros)=> {
        if(fnumeros > num){
            Nmayores.push(fnumeros);
        }
        
    });
}
numero(10,numeros);
console.log(Nmayores);

