document.getElementById('registroFrom').addEventListener('button', validarFormulario()) {
evento.preventDefault();

let nombre = document.getElementById('nombre').value;
let correo = document.getElementById('correo').value;
let contraseña = document.getElementById('contraseña').value;
let confirmar = document.getElementById('confirmar').value;
let genero = document.querySelectorAll('input[name="genero"]:checked');
let intereses = document.querySelectorAll('input[name="interes"]:checked');
let terminos = document.getElementById('aceptarTerminos').checked;
let esValido = true;

//nombre
if (!validarNombre(nombre)) {
document.getElementById('error-nombre').style.visibility = 'visible';
    esValido = false;
} else {
document.getElementById('error-nombre').style.visibility = 'hidden';
}

//contraseñas
if (!validarContrasena(contrasena)) {
document.getElementById('errorContrasena').style.visibility = 'visible';
    esValido = false;
} else {
document.getElementById('errorContrasena').style.visibility = 'hidden'; //error en rojo        
}

if (!validarContrasena(confirmar) || contrasena !== confirmar) {
document.getElementById('errorConfirmar').style.visibility = 'visible';
    esValido = false;
} else {  
document.getElementById('errorConfirmar').style.visibility = 'hidden'; //error en rojo
}

//correo
if (!validarCorreo(correo)) {
document.getElementById('errorCorreo').style.visibility = 'visible';
    esValido = false;
} else {
document.getElementById('errorCorreo').style.visibility = 'hidden';
}

//genero
if (!validarGenero(genero)) {
document.getElementById('errorGenero').style.visibility = 'visible';
    esValido = false;
} else {
document.getElementById('errorGenero').style.visibility = 'hidden';
}

//intereses
if (!validarIntereses(interes)) {
document.getElementById('errorIntereses').style.visibility = 'visible';
    esValido = false;
} else {
document.getElementById('errorIntereses').style.visibility = 'hidden';
}

//terminos
if (!validarTerminos(aceptaTerminos)) {
document.getElementById('errorTerminos').style.visibility = 'visible';
    esValido = false;
} else {
document.getElementById('errorTerminos').style.visibility = 'hidden';
}

if (esValido) {
alert('Formulario enviado con éxito.');
}

}

function validarNombre(nombre) {
let valido = false;
if (nombre!="") 
    valido = true;
return valido;
}

function validarContrasena(contrasena){
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Al menos 8 caracteres, una mayúscula, una minúscula y un número
let valido = false;
if (regex.test(contrasena)) {
    valido = true;
}
return valido;
}

function validarCorreo(correo) {
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let valido = false;
if (regex.test(correo)) {
    valido = true;
}
return valido;
}

function validarGenero(genero){
let valido = false;
if (genero) {
    valido = true;
}
return valido;
}

function validarIntereses(interes) {
let almenosUna = false;
if (interes.length > 0) {
    almenosUna = true;
}
return almenosUna;
}

function validarTerminos(aceptarTerminos) {
let valido = false;
if (aceptarTerminos) {
    valido = true;
}
return valido; 
}

 