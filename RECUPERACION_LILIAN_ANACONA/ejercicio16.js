let arreglo1 = [3,6,7,8,9];
let arreglo2 = [2,3,5,6,9];

let comunes=[]


let ncomunes=()=>{
    for(let i=0; i<arreglo1.length;i++) {
        for (let j=0;j<arreglo2.length;j++) {
            if (arreglo1[i]==arreglo2[j]){
                comunes.push(arreglo1[i]);
            }
        }
    }
    
    console.log(comunes);
}

ncomunes();
