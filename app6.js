const NRandom = Math.floor(Math.random()* 20) + 1;

while(true){
    const adivina = prompt("Adivina un número entre el 1 y el 20");
    const numero = parseInt(adivina, 10);

    if(isNaN(numero) || numero < 1 || numero > 20){
        alert("Por favor ingrese un numero valido entre 1 y 20");
        continue;
    }

    if (numero === NRandom){
        alert("Adivinaste");
        break;
    } else if (numero < NRandom){
        alert("Incorrecto, el número que buscas es mayor que el tuyo");
    } else {
        alert("Incorrecto, el número que buscas es menor que el tuyo")
    }
}
