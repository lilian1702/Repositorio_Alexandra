let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let body=document.querySelector("body");

btn1.addEventListener("click",() =>{
    body.style.backgroundColor="green";
});

btn2.addEventListener("click",() =>{
    body.style.backgroundColor="yellow";
});