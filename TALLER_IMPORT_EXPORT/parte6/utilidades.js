let esElegibleParaPrestamo=(salario, puntaje)=>{
    let resultado=(salario>30000 & puntaje>650)?"elegible para prestamo":"no elegible para prestamo";
    return resultado;
}
export default esElegibleParaPrestamo;
