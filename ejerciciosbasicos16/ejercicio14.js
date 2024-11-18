//14.	Eliminar un objeto de un arreglo: Crea una función que elimine una persona por nombre de un arreglo de objetos.
let personas=[
    {
        nombre:"lilian",
        edad: 36,
    },
    {
        nombre:"camilo",
        edad: 18,
        

    },
    {
        nombre:"constanza",
        edad: 35,
    },
]

let encontrar="constanza";

function busqueda(){
    for (let i=0; i<personas.length; i++){
        if(personas[i].nombre==encontrar){
            personas.splice(i,1);
            console.log(personas);
            break

         }else{
            console.log("no encontrado")
         }
}
   
}
busqueda();