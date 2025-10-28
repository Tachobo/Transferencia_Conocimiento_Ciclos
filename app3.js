const SaldoIni = 4000;
let saldo = SaldoIni;
let retirar;
alert(`Tu saldo actual es $${saldo}`);
do {
    retirar = parseFloat(prompt("Porfavor digite el valor que desea retirar"));

    if(retirar===0){
        alert("Estas en bancarrota");
        break;
    }

    if(retirar>saldo){
    alert("Saldo insuficiente, digite otro valor");
    }
    else if(retirar>0 ){
        saldo -= retirar;
        alert(`Retiro realizado, su nuevo saldo es $${saldo}` );
    }
    else{
        alert("Porfavor ingrese un valor valido")
    }
} while(saldo > 0 );
alert("Ya no cuentas con fondos suficientes");