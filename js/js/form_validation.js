function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var sexo = document.getElementById("sexo").value;
    var email = document.getElementById("email").value.trim();
    var terminos = document.getElementById("terminos").checked;

    if (nombre === "" || apellidos === "" || direccion === "" || sexo === "" || email === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    if (!terminos) {
        alert("Debe aceptar los términos y condiciones.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    // Expresión regular para validar el formato de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}