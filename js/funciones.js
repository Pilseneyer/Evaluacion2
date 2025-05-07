function redirigirRegistro() {
    window.location.href = "registro.html"
}

function redirigirLogin() {
    window.location.href="login.html"
}

const frases=["Reduce el desperdicio", "Comparte alimentos", "Cambia el mundo con pequeños gestos"];

function mostrarFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('fraseMotivadora').textContent=frase;

}

window.onload = mostrarFrase;
function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confPassword = document.getElementById("confirmarPassword").value;
    if (
        nombre.trim() === "" || correo.trim() === "" || password.trim() ===  "" || confPassword.trim() === "" && password !== confPassword) {
        alert("Complete los campos de manera correcta.  ");
        return false;
    }
    return true;
}

/*
function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confPassword = document.getElementById("confirmarPassword").value;
    if (
        nombre.trim() === "" || correo.trim() === "" || password.trim() ===  "" || confPassword.trim() === "") {
        alert("No pueden haber espacios en blanco.");
        return false;
    }
    if (
        password !== confPassword
    ) {
        alert("Las contraseñas deben coincidir")
        return false;
    }
    return true;
}
*/
function validarLogin() {
    const correoLogin = document.getElementById("emailLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;
    if (
        correoLogin.trim() === "" || passwordLogin.trim() === "") {
            alert("No pueden haber espacios en blanco.");
            return false;
        }
        window.location.href="home.html"
        return true;
}