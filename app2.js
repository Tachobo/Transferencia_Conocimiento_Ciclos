let bandera = 0;
while(true){
    let letra = prompt(`Ingrese la letra de la operacion que desea realizar, "a" para suma, "b" para resta`)
    let entrada = prompt("Ingrese numero pe causa");
    if (entrada == "a"){
    bandera = sumar(bandera, parseInt(entrada))
    }else if (entrada == "b"){
    bandera = restar(bandera, parseInt(entrada))
    }else{
        break;
    }
    console.log(bandera);
}
function sumar(anterior,nuevo){
    return anterior += nuevo;
}
function restar(anterior,nuevo){
    return anterior -= nuevo;
}
