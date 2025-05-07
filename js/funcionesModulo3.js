const productos = [
    { nombre: "Manzanas", precio: "Gratis" },
    { nombre: "Leche", precio: "$1000" },
    { nombre: "Pera", precio: "$250"},
    { nombre: "Plátano", precio: "$600"},
    { nombre: "Naranja", precio: "$400"},
    { nombre: "Manzana Verde", precio: "$100"}
    ];


function cargarProductos() {
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
}

window.onload = cargarProductos;
