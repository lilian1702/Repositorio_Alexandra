//16.	Agregar un objeto a un arreglo de objetos: Crea una función que agregue un nuevo objeto (persona) a un arreglo de personas.
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
name="Socorro";
anios=38;

function agregarPersona(){
   let persona={nombre:name, edad:anios};
   personas.push(persona);
   console.log(personas)
}
agregarPersona();
