document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault();

    var formData = new FormData(document.getElementById("registroForm"));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/cuentaparaproyectospython@gmail.com");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Registro exitoso. Se ha enviado la información a tu correo electrónico.");
            } else {
                alert("Ha ocurrido un error. Inténtalo de nuevo.");
            }
        }
    };

    xhr.send(formData);
});
