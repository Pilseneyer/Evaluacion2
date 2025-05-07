const frases=["Reduce el desperdicio", "Comparte alimentos", "Cambia el mundo con pequeños gestos"];

function redirigirRegistro() {
    window.location.href = "registro.html"
}

function redirigirLogin() {
    window.location.href="login.html"
}

function mostrarFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('fraseMotivadora').textContent=frase;

}

window.onload = mostrarFrase;
