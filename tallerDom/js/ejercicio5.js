//Verificar si un elemento está en el arreglo: Crea una función que 
//determine si un número dado está presente en un arreglo.
document.querySelector('okay');
okay.addEventListener('click', ()=>{ 
    let num=document.querySelector('#comparar').value;
    let numero=parseInt(num);
    verificar(numero);
});

let verificarNumero=[5,8,9,11,15,20];

function verificar (numero){
    for (let i=0; i<verificarNumero.length; i++){
        if(numero==verificarNumero[i]){
            console.log("el numero si está en el arreglo")
            break
        }else{
            console.log("el numero no fue encontrado")
        }
    }
}

