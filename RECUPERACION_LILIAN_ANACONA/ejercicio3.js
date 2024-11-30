//3. Encuentra el número más grande en un array.

let arregloNum=[4,6,8,10];

let max=arregloNum[0];

function numGrande(){
    
    arregloNum.forEach((num)=>{
        if(num>max){
        max=num;
    } 
})
    console.log(max);
}

numGrande();


