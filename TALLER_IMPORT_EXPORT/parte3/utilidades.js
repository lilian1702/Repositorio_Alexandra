let categoriaIMC = (IMC)=>{
    let resul =(IMC>=18.5 & IMC<= 24.9)? "peso normal":(IMC>=25 & IMC<=29.9)? "sobrepeso":(IMC>=30)? "obseidad":"bajo peso";
    return resul;
}

export default categoriaIMC;
