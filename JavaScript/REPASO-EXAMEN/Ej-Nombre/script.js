document.getElementById('formularioRegistro').addEventListener('submit', function(e) {

    e.preventDefault();
// Función para mostrar mensaje de bienvenida
function mensaje() {
let mensaje = `¡Bienvenido/a, ${nombre}!`;
alert(mensaje);
    
localStorage.setItem('nombre', nombre); //para guardar el nombre 
}

function cargarNombre() {
const nombreGuardado = localStorage.getItem('nombre');

    if (nombreGuardado) {
    mensajeBienvenida(nombreGuardado);
    }
}



});

