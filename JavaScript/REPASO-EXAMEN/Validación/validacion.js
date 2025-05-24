//console.log("validacion.js cargado");

window.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioRegistro');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que se envíe el formulario

        // Limpiar mensajes anteriores
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        let valido = true;

        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const email = document.getElementById('email').value.trim();
        const contrasena1 = document.getElementById('contrasena1').value;
        const contrasena2 = document.getElementById('contrasena2').value;
        const aceptarTerminos = document.getElementById('aceptarTerminos').checked;

        if (nombre === '') {
            document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
            valido = false;
        }

        if (apellidos === '') {
            document.getElementById('error-apellidos').textContent = 'Los apellidos son obligatorios.';
            valido = false;
        }

        if (!/^\d{9}$/.test(telefono)) {
            document.getElementById('error-telefono').textContent = 'Introduce un teléfono de 9 dígitos.';
            valido = false;
        }

        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            document.getElementById('error-email').textContent = 'Correo electrónico inválido.';
            valido = false;
        }

        if (contrasena1.length < 6) {
            document.getElementById('error-contrasena1').textContent = 'Mínimo 6 caracteres.';
            valido = false;
        }

        if (contrasena1 !== contrasena2) {
            document.getElementById('error-contrasena2').textContent = 'Las contraseñas no coinciden.';
            valido = false;
        }

        if (!aceptarTerminos) {
            document.getElementById('error-terminos').textContent = 'Debes aceptar los términos.';
            valido = false;
        }

        if (valido) {
            alert('✅ Registro completado con éxito');
            // formulario.submit(); // si quieres enviarlo realmente
        }
    });
});

