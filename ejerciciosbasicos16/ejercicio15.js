//15.	Filtrar mayores de edad: Crea una función que reciba un arreglo de personas y devuelva solo aquellas que sean mayores de 18 años.
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
function busqueda(){
    for (let i=0; i<personas.length; i++){
        if(personas[i].edad<19){
            personas.splice(i,1);
            }
}
    console.log(personas);
}

busqueda();
