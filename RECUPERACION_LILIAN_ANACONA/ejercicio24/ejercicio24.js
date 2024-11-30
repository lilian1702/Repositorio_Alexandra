let btn=document.querySelector("#btn");
let contador=0;
btn.addEventListener("click", () => {
    let p=document.querySelector("#p");
    
    for (let i=0;i<=1;i++){
        contador+=i;
    }
    p.textContent=contador;
});