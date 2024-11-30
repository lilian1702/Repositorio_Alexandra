let palabras=["hola","adios","dios","hola","hola"]


let contador=0;

let contar=(palabra)=>{
    palabras.forEach((pal)=>{
        if(pal==palabra){
            contador=contador+1;
        }
    });
    
    console.log(contador);
}

contar("hola");


