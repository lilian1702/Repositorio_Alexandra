//Contar palabras en una cadena: Crea una función que cuente cuántas palabras hay en una 
//cadena de texto.
document.querySelector('okay');
okay.addEventListener('click', ()  => {
    let palabras=document.querySelector('#frase').value;
    ContarPalabras(palabras);
});    



function ContarPalabras(palabras){
    let palabra1=palabras.split(" ");
    console.log("el numero de palabras es:"+palabra1.length);
}
