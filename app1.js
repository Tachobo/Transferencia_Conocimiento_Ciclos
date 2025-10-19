alert(`Este programa mostrara los numeros primos del 1 al 100`);
for(let i = 2; i <= 100; i++){
    if (esPrimo(i)){
        console.log(`El número ${i}`);
    }
}
function esPrimo(numero){
    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            return false;
        }
    }
    return true;
}