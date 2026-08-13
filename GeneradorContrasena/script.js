function generarContrasena(){

    let tamano = document.getElementById("tamano").value;
    let mayuscula = document.getElementById("mayuscula").checked;
    let minuscula = document.getElementById("minuscula").checked;
    let numero = document.getElementById("numero").checked;
    let simbolo = document.getElementById("simbolo").checked;

    let caracteres = "";

    if (mayuscula) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (minuscula) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numero) {
        caracteres += "1234567890";
    }

    if (simbolo) {
        caracteres += "!@#$%^&*()_+-=[]{}";
    }

    if (caracteres.length == 0){
        document.getElementById("resultado").textContent = "Seleccione alguna opcion";
        return;
    }

    let contrasena = "";

    for (let i = 0; i < tamano; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[index];
    }

    document.getElementById("resultado").textContent = contrasena;
    
}