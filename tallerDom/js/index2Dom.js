document.querySelector("#aceptar").addEventListener("click",function(){
   let num1= document.querySelector("#num1").value;
   let num2= document.querySelector("#num2").value;
   num1=parseInt(num1);
   num2=parseInt(num2);
   document.querySelector("#rest").value= num1*num2;
});

document.querySelector("#cancelar").addEventListener("click", function(){
    document.querySelector("#num1").value=" ";
    document.querySelector("#num2").value=" ";
    document.querySelector("#rest").value=" ";

});
