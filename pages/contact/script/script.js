const name = document.getElementById("name")
const email = document.getElementById("email")
const comment = document.getElementById("comment")

function Enviar() {
    if (name.value=='' || email.value=='' || comment.value==''){
        alert("Preencha todos os dados")
    }else{
        alert("Enviado com sucesso!")
        name.value = ''
        email.value = ''
        comment.value = ''
    }
}