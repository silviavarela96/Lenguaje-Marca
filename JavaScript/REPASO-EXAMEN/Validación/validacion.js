document.getElementById('formularioRegistro').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Esto es para que no se envíe

        let nombre = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellidos').value;
        let telefono = document.getElementById('telefono').value();
        let email = document.getElementById('email').value();
        let contrasena1 = document.getElementById('contrasena1').value;
        let contrasena2 = document.getElementById('contrasena2').value;
        let aceptarTerminos = document.getElementById('aceptarTerminos').checked;
        let esValido = true;

    // Validación del nombre completo
    if (!validarNombre(nombre)) {
      document.getElementById('error-nombre').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('error-nombre').style.visibility = 'hidden';
    }

    //validar apellidos
    if (!validarApellidos(apellidos)) {
      document.getElementById('error-apellidos').style.visibility = 'visible';
      esValido = false;
    }
    else {
      document.getElementById('error-apellidos').style.visibility = 'hidden';  //error en rojo
    }

    // Validación del teléfono
    if (!validarTelefono(telefono)) {
      document.getElementById('error-telefono').style.visibility = 'visible';
      esValido = false;
    }
    else {          
        document.getElementById('error-telefono').style.visibility = 'hidden'; //error en rojo
    }

    // Validación del email
    if (!validarEmail(email)) {
        document.getElementById('error-email').style.visibility = 'visible';
        esValido = false;
    }
    else {
        document.getElementById('error-email').style.visibility = 'hidden'; //error en rojo
    }

    // Validación de la contraseña
    if (!validarContrasena(contrasena1)) {
        document.getElementById('error-contrasena1').style.visibility = 'visible';
        esValido = false;
    }
    else {
        document.getElementById('error-contrasena1').style.visibility = 'hidden'; //error en rojo        
    }

    // Validación de la confirmación de contraseña
    if (!validarContrasena(contrasena2) || contrasena1 !== contrasena2) {
        document.getElementById('error-contrasena2').style.visibility = 'visible';
        esValido = false;
    }
    else {  
        document.getElementById('error-contrasena2').style.visibility = 'hidden'; //error en rojo
    }

    // Validación de términos y condiciones
    if (!validarTerminos(aceptarTerminos)) {
      document.getElementById('error-terminos').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('error-terminos').style.visibility = 'hidden';
    }

    if (esValido) {
      alert('Formulario enviado con éxito.');
    }

    // Función para validar el nombre
    function validarNombre(nombre) {
    let valido = false;
    if (nombre!="") // Ha escrito algo...
    valido = true;
    return valido;
  }

  // Función para validar los apellidos
  function validarApellidos(apellidos) {
    let valido = false;
    if (apellidos!="") // Ha escrito algo...
    valido = true;
    return valido;
  }

  // Función para validar el teléfono
  function validarTelefono(telefono) {
    let regex = /^\d{9}$/; // Expresión regular para un número de teléfono español de 9 dígitos
    let valido = false;
    if (regex.test(telefono)) {
      valido = true;
    }
    return valido;
  }
  
  // Función para validar el correo electrónico
  function validarCorreoElectronico(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valido = false;
    if (regex.test(email)) {
      valido = true;
    }
    return valido;
  }

  // Función para validar la contraseña
  function validarContrasena(contrasena) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Al menos 8 caracteres, una mayúscula, una minúscula y un número
    let valido = false;
    if (regex.test(contrasena)) {
      valido = true;
    }
    return valido;
  }

  // Función para validar los términos y condiciones
  function validarTerminos(aceptarTerminos) {
    let valido = false;
    if (terminos) { // Si se ha marcado la casilla de términos y condiciones
      valido = true;
    }
    return valido;
  }
});