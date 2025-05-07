const faq = [
    {pregunta: "¿De dónde son?", respuesta: "Somos de calle verde."},
    {pregunta: "¿Tienen redes sociales?", respuesta: "¡Sí! Puedes seguirnos en los enlaces proporcionados en el final de la página web."}
    ];


function cargarFaqs() {
    faq.forEach(faq => {
        document.getElementById("listaFaqs").innerHTML += `
        <div class="accordion" id="faq">
    <div class="accordion-item">
    <h2 class="accordion-header">
    <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">${faq.pregunta}</button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse show">
    <div class="accordion-body">${faq.respuesta}</div>
    </div>
    </div>
    </div>
        `;
    });
} 

window.onload = cargarFaqs;
