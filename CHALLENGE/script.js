// Selecciono los elementos del DOM donde se ingresará el texto y donde se mostrará el resultado
const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.text-mensaje');
const botonCopiar = document.querySelector('.copiar');

// Reglas de encriptación y desencriptación
let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Función que se ejecuta al presionar el botón de encriptar
function botonEncriptar() {
    const texto = validarTexto(textArea.value); // Valido el texto ingresado
    if (texto) {
        const textoEncriptado = encriptar(texto); // Encripto el texto validado
        mensaje.value = textoEncriptado; // Muestro el texto encriptado en el área de mensaje
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
    }
}

// Función al presionar el botón de desencriptar
function botonDesencriptar() {
    const texto = validarTexto(textArea.value); // Valido 
    if (texto) {
        const textoDesencriptado = desencriptar(texto);
        mensaje.value = textoDesencriptado;
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
    }
}

// Función encriptar el texto según las reglas definidas
function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    // Reemplazo cada vocal según la regla en matrizCodigo
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada; // Retorno el texto encriptado
}

// Función desencriptar el texto según las reglas definidas
function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase(); // Convierto a minúsculas para consistencia

    // Reemplazo cada secuencia encriptada por su vocal original
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada; // Retorno el texto desencriptado
}

// Función validar que el texto solo contiene letras minúsculas y sin acentos
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto) ? texto : null;
}
// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}


botonCopiar.addEventListener('click', copiarTexto);

// Función que reinicia el juego
function botonReiniciar() {
    textArea.value = '';
    mensaje.value = ''; // Limpia el área de texto de mensaje
}