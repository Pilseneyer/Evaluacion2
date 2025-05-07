const comentarios = [
    {nombreUsuario: 'Chewbaca', textoComentario: 'Lorem ipsum dolor sit amet.'},
    {nombreUsuario: 'Hideo Kojima', textoComentario: 'Lorem ipsum dolor sit amet.'}
];


function agregarComentario() {
    comentarios.forEach(comentario => {
        document.getElementById("listaComentarios").innerHTML += `
        <div class="card" style="width: 50rem;">
        <div class="card-body">
        <h5 class="card-title">${comentario.nombreUsuario}</h5>
        <p class="card-text">${comentario.textoComentario}</p>
        </div>
        </div>
        `
        });
}

window.onload = agregarComentario();


