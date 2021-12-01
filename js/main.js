const menuBurger = document.getElementById('menuBurger')
const menuActivo = document.getElementById('menuActivo')

menuBurger.addEventListener('click',funciona)
function funciona(){
    
menuActivo.classList.toggle('activa')
}
//base de datos
const firebaseConfig = {
    apiKey: "AIzaSyDuwXahh7u6o0LxSR8gxe8oN55Y1TP__7M",
    authDomain: "contactform-a95a0.firebaseapp.com",
    databaseURL: "https://contactform-a95a0-default-rtdb.firebaseio.com",
    projectId: "contactform-a95a0",
    storageBucket: "contactform-a95a0.appspot.com",
    messagingSenderId: "565962062663",
    appId: "1:565962062663:web:51007d680ba0a65bf36a62"
  }; 

  // inicia la base de datos 
firebase.initializeApp(firebaseConfig);

// referencia de la base de datos
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

//guarda todos los valores
function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var tlf = getElementVal("tlf");
    var mensaje = getElementVal("mensaje");

    guardarMensaje(name, email, tlf , mensaje);
    // mensaje de envio
    alert("Su mensaje fue enviado exitosamente")
     //   reset del formulario
    document.getElementById("contactForm").reset();
}
const guardarMensaje = (name, email, tlf, mensaje) => {
    var envioBaseDatos = contactFormDB.push();
  
    envioBaseDatos.set({
      name: name,
      email: email,
      tlf: tlf,
      mensaje: mensaje,
    });
  };
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  