let btn=document.querySelector("#btn");

btn.addEventListener('click', () =>{
    let input=document.querySelector("#input").value;  
    let p=document.querySelector("#p");
    p.textContent=input;
})