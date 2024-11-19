 let esBiciesto=(año, )=>{
     let resultado =(año%4==0 & año%100!=0 & año%400!=0)?"es biciesto":"no es biciesto";
     return resultado;

}
export default esBiciesto;




