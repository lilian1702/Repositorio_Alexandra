let cuestionario= document.querySelector("#cuestionario");
let tof=document.querySelector("#tof");
fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.multiple_choice_questions.forEach((pregunta) => {
            cuestionario.innerHTML += `<h3>${pregunta.question}</h3>`;
            
            pregunta.options.forEach((op,ins) => {
                cuestionario.innerHTML += `
                <label>
                    <input type="radio" name="${pregunta.id}" value="${ins}">
                    ${op}
                </label><br>
                `;
            });
        });
        
    })


fetch("https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json")
    .then(response => response.json())
    .then(pregunta => {
        pregunta.true_false_questions.forEach((que)=>{
            tof.innerHTML += `
            <h3>${que.question}</h3>
                <label>
                    <input type="radio" name="Verdadero" value="ins">
                Verdadero
                </label><br>
                <label>
                    <input type="radio" name="Falso" value="ins">
                Falso
                </label><br>
            `;
            
        })
    });