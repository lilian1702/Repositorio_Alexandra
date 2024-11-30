//Crea una función que verifique si una palabra es un palíndromo.
function EsPalindromo(palabra){
    resultado=palabra.split('').reverse().join('');
    if(resultado==palabra){
        console.log("la palabra es un palindromo")
    }else{
        console.log("la palabra no es un palindromo")
    }
}
EsPalindromo("reconocer");




