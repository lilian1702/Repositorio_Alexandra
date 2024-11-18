//13 Búsqueda en un arreglo de objetos: Crea una función que busque una persona por nombre en un 
//arreglo de objetos que contiene personas y sus edades.

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

let encontrar="lilian"

function Buscar(){
    for (let i=0; i<personas.length; i++){
        if(personas[i].nombre==encontrar){
            console.log("nombre encontrado: "+personas[i].nombre);
            
            break
    
        }else{
            console.log(" no se encontro el nombre")
        }
    }
}
Buscar();











