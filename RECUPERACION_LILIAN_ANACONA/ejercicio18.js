let aleatorio=[];


let nrandom=()=>{
    for (let i=0; i<10;i++){
        let generando=Math.floor(Math.random() * 100) + 1;
        aleatorio.push(generando);
    }
    
    console.log(aleatorio);
}

nrandom();