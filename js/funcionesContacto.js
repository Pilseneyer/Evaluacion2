function validarContacto() {
    const nombre = document.getElementById("nombreContacto").value;
    const correo = document.getElementById("emailContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;
    if (
        nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === ""
    ) {
        alert("No deben quedar espacios en blanco.");
        return false;
    }
    alert("Comentario ingresado con éxito.")
    return true;
};