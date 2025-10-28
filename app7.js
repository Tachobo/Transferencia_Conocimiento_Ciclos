function PareseImpares(cantidad){
    let pares = 0;
    let impares = 0;
    
    for (let i = 1; i <= cantidad; i++){
        const entrada = prompt(`Digite los ${cantidad} números`);
        const numero = parseInt(entrada, 10);

        if(isNaN(numero)){
            alert("No valido. Por favor ingrese un número");
            i--;
            continue;
        }
    
    if(numero % 2 === 0){
        pares++;
    }else {
        impares++
    }
    }
    alert(`De los ${cantidad} números ingresados: ${pares} fueron pares y
${impares} fueron impares.`);
}
PareseImpares(10);

