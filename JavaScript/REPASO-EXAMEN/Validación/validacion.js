//como es un formulario hay que validarlo
document.getElementById('formularioRegistro').addEventListener('submit', function(e) {

    e.preventDefault();

    // Obtener valores
    let nombre = document.getElementById('nombre').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let email = document.getElementById('email').value.trim();
    let pass1 = document.getElementById('contrasena1').value;
    let pass2 = document.getElementById('contrasena2').value;
    let terminos = document.getElementById('aceptarTerminos').checked;

    // uso de las tuberías para poner todos los campos obligatorios en una sóla línea
    if (!nombre || !apellidos || !telefono || !email || !pass1 || !pass2) {
        alert('Por favor, rellena todos los campos.');
        return;
    }
    
    if (pass1 !== pass2) {    // las contraseñas tienen que ser iguales !==
        alert('Las contraseñas tienen que coincidir.');
        return;
    }

    if (!terminos) {
        alert('Debes aceptar los términos de uso.');
        return;
    }

    // si cumple con todos los requisitos sale el mensaje
    alert('¡Bienvenido/a, ' + nombre + ' ya estás dentro!');
    this.reset();
});