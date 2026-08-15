function generarContrasena(){

    let tamano = document.getElementById("tamano").value;
    let mayuscula = document.getElementById("mayuscula").checked;
    let minuscula = document.getElementById("minuscula").checked;
    let numero = document.getElementById("numero").checked;
    let simbolo = document.getElementById("simbolo").checked;

    let caracteres = "";

    if (mayuscula) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (minuscula) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (numero) caracteres += "1234567890";
    if (simbolo) caracteres += "!@#$%^&*()_+-=[]{}";

    document.getElementById("mensaje").textContent = "";

    if (caracteres.length == 0){
        document.getElementById("resultado").textContent = "Seleccione alguna opcion";
        document.getElementById("btn-copiar").disabled = true;
        return;
    }

    let contrasena = "";

    for (let i = 0; i < tamano; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[index];
    }

    document.getElementById("resultado").textContent = contrasena;
    document.getElementById("btn-copiar").disabled = false;
    
}

function copiar() {
    let contrasenaCopiada = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(contrasenaCopiada);
    document.getElementById("mensaje").textContent = "¡Copiado!";
}