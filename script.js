
//Menú desplegable
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});

//Desplegables de información
function toggleMensaje(numero) {
    const desplegable = document.getElementById("desplegable" + numero);
    if (desplegable.style.maxHeight === "0px" || !desplegable.style.maxHeight) {
      // Expandir el div desplegable
      desplegable.style.maxHeight = desplegable.scrollHeight + "px";
    } else {
      // Contraer el div desplegable
      desplegable.style.maxHeight = "0";
    }
  }
  

// Sopa de letras

// Función para la sopa de letras
function iniciarSopaDeLetras() {
  var casillas = document.querySelectorAll('td');
  var palabras = ['SERVIDOR', 'FRONTEND', 'RESPONSIVE', 'JAVASCRIPT', 'HTML', 'CSS', 'BACKEND', 'CLIEN', 'DATABASE', 'FRAMEWORK', 'REACT', 'FUNCTION', 'ROUTING', 'VARIABLE', 'API', 'AJAX', 'NODE', 'DESIGN', 'WEB', 'REACT'];
  var palabrasEncontradas = [];

  casillas.forEach(casilla => {
    casilla.addEventListener('click', () => {
      if (!casilla.classList.contains('encontrada')) {
        casilla.classList.add('encontrada');
        verificarPalabraEncontrada();
      }
    });
  });

  function verificarPalabraEncontrada() {
    var palabraEncontrada = '';
    casillas.forEach(casilla => {
      if (casilla.classList.contains('encontrada')) {
        palabraEncontrada += casilla.textContent;
      }
    });

    // Convertir palabraEncontrada a mayúsculas para que coincida con palabras en mayúsculas en el array
    palabraEncontrada = palabraEncontrada.toUpperCase();

    if (palabras.includes(palabraEncontrada) && !palabrasEncontradas.includes(palabraEncontrada)) {
      palabrasEncontradas.push(palabraEncontrada);
      actualizarPalabrasEncontradas();
      resetearCasillas();
    }
  }

  function actualizarPalabrasEncontradas() {
    var listaPalabras = document.getElementById('lista-palabras');
    listaPalabras.innerHTML = '';
    palabrasEncontradas.forEach(palabra => {
      listaPalabras.innerHTML += `<li>${palabra}</li>`;
    });
  }

  function resetearCasillas() {
    casillas.forEach(casilla => {
      casilla.classList.remove('encontrada');
    });
  }
}

// Llamar la función al cargar la página
window.addEventListener('load', iniciarSopaDeLetras);
