// Cuando el documento está listo, se cargan las comidas almacenadas

document.addEventListener('DOMContentLoaded', function() {
    e.preventDefault(); //*************************
});

// Agrega una nueva comida a la lista y la almacena
function agregarComida() {
    // Obtener los elementos de entrada
    let inputNombreComida = document.getElementById('nombreComida') //*************************
    let inputCalorias = document.getElementById('calorias');

    // Obtener los valores ingresados por el usuario
    let valorNombreComida = inputNombreComida.value;
    let valorCalorias = inputCalorias.value;

    // Eliminar espacios en blanco
    let nombreComida = valorNombreComida.trim();
    let calorias = parseInt(valorCalorias.trim());

    // Validar que el nombre no esté vacío y las calorías sean un número válido
    let nombreVacio = (nombreComida === '');
    let caloriasNoNumero = isNaN(calorias);
    if (nombreVacio) {
        // Si el nombre está vacío, no se agrega nada
        return;
    } else if (caloriasNoNumero) {
        // Si las calorías no son un número, tampoco se agrega
        return;
    }

    // Obtener la lista actual de comidas almacenadas
    let comidas = obtenerComidasDeAlmacenamiento();

    // Crear un objeto para la nueva comida
    let nuevaComida = {
        nombre: nombreComida,
        calorias: calorias
    };

    // Agregar la nueva comida a la lista
    function agregarComida(texto) {
            let nuevaComida = document.createElement("nombreComida").value; //obtiene la comida escrita
            if (!nuevacomida) return; // Detecta que el campo está vacío y no te permite agregarlo

            agregarLista(nombreComida); // Mostrar la nueva comida en la lista
            document.getElementById("nombreComida").value = ""; // borra la comida que se escribe cuando ya está agregada a la lista

            localStorage.setItem('nombreComida', tarea); //Para guardar 
           
        }//*************************

        // Función para agregar a la lista
        function agregarLista(texto) {
            let li = document.createElement("ul");
            ul.textContent = texto;
            document.getElementById("listaComidas").appendChild(ul); // Agregarlo a la lista en el HTML
        }
    
    // Guardar la lista actualizada en el almacenamiento local
    guardarComidasEnAlmacenamiento(comidas);

    // Limpiar los campos de entrada
    inputNombreComida.value = '';
    inputCalorias.value = '';

    // Actualizar la visualización de la lista
    mostrarComidas();
}

// Recupera la lista de comidas almacenadas en localStorage
function obtenerComidasDeAlmacenamiento() {
    let comidasGuardadas = localStorage.getItem('nombreComida'); //*************************
    let listaComidas = [];
    // Si hay datos en localStorage, los parsea, si no, devuelve una lista vacía
    if (comidasGuardadas) {
        listaComidas = JSON.parse(comidasGuardadas);
    } else {
        listaComidas = [];
    }
    return listaComidas;
}

// Guarda la lista de comidas en localStorage
function guardarComidasEnAlmacenamiento(comidas) {
    let comidasString = JSON.stringify(comidas);
    localStorage.setItem('comidas', comidasString);
}

// Muestra la lista de comidas y el total de calorías en la interfaz
function mostrarComidas() {
    // Obtener el elemento de la lista donde se mostrarán las comidas
    let listaComidasElemento = document.getElementById('listaComidas');
    // Limpiar el contenido anterior
    listaComidasElemento.innerHTML = '';

    // Recuperar la lista de comidas almacenadas
    let comidas = obtenerComidasDeAlmacenamiento();

    // Variable para acumular el total de calorías
    let totalCalorias = 0;

    // Recorrer cada comida y mostrarla en la lista
    for (let indice = 0; indice < comidas.length; indice++) {
        let comida = comidas[indice];
        let nombre = comida.nombre;
        let calorias = comida.calorias;

        // Crear el elemento de la lista
        let li = document.createElement('li');
        li.innerHTML = nombre + ': ' + calorias + ' calorías';
        listaComidasElemento.appendChild(li);

        // Sumar las calorías al total *************************
        function sumar(){
            let sumar = document.getElementById("listaComidas").value;
            let total = document.getElementById("totalCalorias");
            array.push(sumar); //no hace falta comillas
            resultado.innerHTML = array;

        }
    }

    // Mostrar el total de calorías
    let totalCaloriasElemento = document.getElementById('totalCalorias');
    totalCaloriasElemento.innerText = 'Total de Calorías: ' + totalCalorias;
}

// Carga y muestra todas las comidas almacenadas
function cargarComidas() {
    mostrarComidas();
}
