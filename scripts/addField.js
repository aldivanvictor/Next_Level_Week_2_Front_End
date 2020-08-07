// Procurar um botão
document.querySelector("#add-time")
// Quando clivar no botão
.addEventListener("click", cloneField)


// Executar uma ação
function cloneField() {
    // Duplicar os campos; que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean: true or false; const = constante

    //pégar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    //para cada campo, limpe
    fields.forEach (function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer) //appendChild= mostrar filho
}
    