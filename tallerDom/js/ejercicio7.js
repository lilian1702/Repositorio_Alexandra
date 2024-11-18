//Invertir un arreglo: Crea una función que reciba un arreglo y lo devuelva invertido.
document.querySelector('okay');
okay.addEventListener('click', ()  => {

    let ini=document.querySelector('#inicio').value ;
    let fini=document.querySelector('#final').value ;

    let inicio=parseInt(ini) ;
    let final=parseInt(fini) ;
    invertir(inicio, final);
});

let arregloInvertido=[];
let invertido=[]


function invertir(inicio, final){
    for (let i=inicio; i<final; i++){
        arregloInvertido.push(i);
    }
    let cantidad=arregloInvertido.length-1;
    for(let i=cantidad; i>=0;i--){
        invertido.push(arregloInvertido[i])
    }
    console.log(arregloInvertido)
    console.log(invertido)
}


