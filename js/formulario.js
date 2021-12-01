

document.getElementById('contactForm').addEventListener('submit', enviarForm)

function enviarForm(e){
    e.preventDefault()
    console.log(123)
    firebase.database().ref('contact').push('hola')
}

