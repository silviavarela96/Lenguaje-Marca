$(document).ready(function () {

// Función para mostrar mensaje de bienvenida
function mensaje() {
$('#mensajeBienvenida')
            .text(`¡Bienvenido, ${nombre}!`)
            .css({
                "background-color": 'blue',
                "color": "#00796b",
                "font-size": "24px",
                "padding": "20px",
                "margin-top": "20px",
                "border-radius": "10px",
                "text-align": "center"
            })            
}

 // obtener el nombre 
const nombre = document.getElementById('nombre').value;
    if (nombre === '') {   //si el campo está vacio mensaje de alerta
        alert('Por favor, introduce tu nombre.');
    }
    else {
        cargarNombre(); //si no está vacio llamamos a la función cargarNombre
        mensaje();  //si hay nombre nos muestra el mensaje de bienvenida
    }
    
localStorage.setItem('nombre', nombre); //para guardar el nombre 


function cargarNombre() {
const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
    mensajeBienvenida(nombreGuardado);
    }
}

});