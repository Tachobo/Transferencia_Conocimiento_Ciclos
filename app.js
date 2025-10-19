alert(`En este programa se mostrará la tabla de multiplicar de un número digitado`);
let numero = parseInt(prompt(`Por favor digite un número entero (1 a 10)`));

if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        if (resultado % 2 === 0) {
            console.log(`${numero} * ${i} = ${resultado}`);
        }
    }
} else {
    console.log(`Por favor digite un valor válido`);
}
