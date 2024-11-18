document.querySelector('okay');
okay.addEventListener('click', () =>{
    let num1=document.querySelector('#num1').value ;
    let num2=document.querySelector('#num2').value ;
    let num3=document.querySelector('#num3').value ;
    let num4=document.querySelector('#num4').value ;

    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    num4=parseInt(num4);

    numeroGrande.push(num1,num2,num3,num4);
    numeroG();
});

let numeroGrande=[1];
let mayor=numeroGrande[0];


function numeroG(){
    numeroGrande.forEach(function(numero){
        if(numero>mayor){
            mayor=numero;
        }
    });
   
    console.log("el numero mayor es "+mayor)
}
