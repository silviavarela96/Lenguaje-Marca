window.onload = cargarEstado; // <!-- Hueco 3 -->
let toggle = $('#darkModeToggle');
  let body = $('body');

  // Cargar el estado guardado
document.addEventListener('DOMContentLoaded', function() {
cargarEstado(); 
}); //<!-- Hueco 4 -->

  if (darkMode === 'on') {
    body.removeClass('light-mode').addClass('dark-mode');
    toggle.prop('checked', true);
  } else {
    body.removeClass('dark-mode').addClass('light-mode');
    toggle.prop('checked', false);
  }

  // Cambiar modo
  toggle.on('change', function () {
    if ($(this).is(':checked')) {
      body.removeClass('light-mode').addClass('dark-mode');
       //<!-- Hueco 5 -->
    } else {
      body.removeClass('dark-mode').addClass('light-mode');
      localStorage.setItem('darkmode', 'off');
    }
  });
