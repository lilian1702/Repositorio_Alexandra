let calcularDescuento=(precio)=>{
    let resultado =(precio>1000)?precio*0.80:(precio>=500 & precio<=1000)?precio*0.90:"no hay descuento";
    return resultado;

}

export default calcularDescuento;
