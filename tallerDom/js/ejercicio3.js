//Sumar valores de un arreglo: Crea una función que reciba un arreglo de números y devuelva la suma de todos sus valores.

document.querySelector('ok');
ok.addEventListener('click', () => {
    let num1=document.querySelector('#num1').value ;
    let num2=document.querySelector('#num2').value ;
    let num3=document.querySelector('#num3').value ;
    let num4=document.querySelector('#num4').value ;

    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    num4=parseInt(num4);

    arregloSuma.push(num1,num2,num3,num4);
    
suma(); 
})    

let arregloSuma=[];
let contador=0;

function suma(){
    arregloSuma.forEach(function(numero){
        contador=contador+numero;
    });
    console.log("la suma es "+contador);
}


