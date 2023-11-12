

const palabras = ['SERVIDOR', 'FRONTEND', 'RESPONSIVE', 'JAVASCRIPT', 'HTML', 'CSS', 'BACKEND', 'CLIEN', 'DATABASE', 'FRAMEWORK', 'REACT', 'FUNCTION', 'ROUTING', 'VARIABLE', 'API', 'AJAX', 'NODE', 'DESIGN', 'WEB', 'REACT'];
const casillas = document.querySelectorAll('td');
const palabrasEncontradas = [];

casillas.forEach(casilla => {
    casilla.addEventListener('click', () => {
       
        if (casilla.classList.contains('marcada')) {
            casilla.classList.remove('marcada');
        } else {
            if (!casilla.classList.contains('encontrada')) {
                casilla.classList.add('encontrada');
            }
        }
        verificarPalabraEncontrada();
    });
});
function verificarPalabraEncontrada() {
    var palabraEncontrada = '';
    casillas.forEach(casilla => {
        if (casilla.classList.contains('encontrada')) {
            palabraEncontrada += casilla.textContent;
        }
    });

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
        if (casilla.classList.contains('encontrada')) {
            casilla.classList.remove('encontrada');
        }
    });
}


