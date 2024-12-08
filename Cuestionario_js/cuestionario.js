let cuestionario = document.querySelector("#cuestionario");
let tof = document.querySelector("#tof");
let Grespuestas = []; // Almacenar resultados correctos

 //Cargar preguntas de opción múltiple desde la API
fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
.then(response => response.json())
     .then(data => {
         console.log(data);

         data.multiple_choice_questions.forEach((pregunta, index) => {
             cuestionario.innerHTML += `<h3>${pregunta.question}</h3>`;
             pregunta.options.forEach((op) => {
                 cuestionario.innerHTML += `
                 <label>
                     <input type="radio" name="multiple_${index}" value="${op}" class="input">
                     ${op}
                 </label><br>
                 `;
             });
         });
     });

// Cargar preguntas de verdadero/falso desde la API
 fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
     .then(response => response.json())
     .then(data => {
         data.true_false_questions.forEach((que, index) => {
             tof.innerHTML += `
             <h3>${que.question}</h3>
                 <label>
                     <input type="radio" name="true_false_${index}" value="true">
                 Verdadero
                 </label><br>
                 <label>
                     <input type="radio" name="true_false_${index}" value="false">
                 Falso
                 </label><br>
             `;
         });
     });

// Evento para reiniciar respuestas
document.getElementById("Reiniciar").addEventListener("click", function () {
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
    Grespuestas = []; // Limpiar respuestas anteriores
});


document.getElementById('Enviar').addEventListener('click', () => {
fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
         .then(response => response.json())
         .then(data => {
            let buenas = 0;

// Comparar respuestas de opción múltiple
             data.multiple_choice_questions.forEach((pregunta, index) => {
                 let respuestas = document.querySelector(`input[name="multiple_${index}"]:checked`);
                 if (respuestas && respuestas.value === pregunta.correct_answer) {
                     buenas += 1;
                 }
             });

// Comparar respuestas de verdadero/falso
             data.true_false_questions.forEach((pregunta, index) => {
                 console.log(`Pregunta TF: ${pregunta.question}`);
                 console.log(`Valor esperado: ${pregunta.correct_answer}`);
                
                 let true_false = document.querySelector(`input[name="true_false_${index}"]:checked`);
                
                 console.log(`Valor marcado por el usuario: ${true_false?.value}`);

                 if (true_false && true_false.value === pregunta.correct_answer) {
                     console.log("Respuesta correcta");
                     buenas += 1;
                 } else {
                     console.log("Respuesta incorrecta o no marcada");
                 }
             });

             let totalPreguntas = data.multiple_choice_questions.length + data.true_false_questions.length; // Total de preguntas
             let resultadoTotal = (buenas * 100) / totalPreguntas;
             alert(`Tu resultado es: ${resultadoTotal.toFixed(2)}%`);
         });
 });

