let nivelRiesgo=(edad,enfermedad) =>{
    let respuesta =(edad> 60 || enfermedad== true) ? "alto riesgo":(edad>=40 & edad <=60 & enfermedad== true) ? "riesgo moderado": "riesgo bajo";
    return respuesta;
}
 export default nivelRiesgo;
 
