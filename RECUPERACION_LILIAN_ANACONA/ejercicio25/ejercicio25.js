let btn1=document.querySelector("#prender");

btn1.addEventListener("click", () => {
    let divd=document.querySelector("#div");
    divd.textContent ="Holaaa";
});

let btn2=document.querySelector("#apagar");

btn2.addEventListener("click", () => {
    let divd=document.querySelector("#div");
    divd.textContent ="";
});