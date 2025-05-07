const productos = [
    { nombre: "Manzanas", precio: "Gratis" },
    { nombre: "Leche", precio: "$1000" },
    { nombre: "Pera", precio: "$250"},
    { nombre: "Plátano", precio: "$600"},
    { nombre: "Naranja", precio: "$400"},
    { nombre: "Manzana Verde", precio: "$100"}
    ];

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

productos.forEach(producto => {
    document.getElementById("contenedorProductos").innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <a href="#" class="btn btn-primary">Más información</a>
    </div>
    </div>
    `;
    });
