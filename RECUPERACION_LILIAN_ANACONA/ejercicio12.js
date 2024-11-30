//12. Convierte un array de strings a mayúsculas.


let palabras = ["hola", "mundo", "como", "estas"];
let mayusculas=[]
let contador=0;

palabras.forEach((mayus) => {
    contador=mayus.toLocaleUpperCase();
    mayusculas.push(contador)
});
console.log(mayusculas);

