function iniciarsesion(){
    const usuarioC = "Hola";
    const contrasenaC = "Mundo";
    const Intentos = 3;

    for(let intento = 1; intento <= Intentos; intento++){
        const usuario = prompt("Ingrese usuario");
        const contrasena = prompt("Ingrese contraseña");

        if(usuario === usuarioC && contrasena === contrasenaC){
            alert("Sesion iniciada");
            return;
        } else {
            const restantes = Intentos - intento;
            if(restantes > 0){
                alert(`Los datos ingresados son incorrectos. 
Te quedan ${restantes} intentos`);
            }
        }
    }
    alert("Acceso denegado");
}
iniciarsesion();