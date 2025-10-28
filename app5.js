let total = 0;

while (true){
    const NombreP = prompt(`Ingrese el nombre del articulo (en caso de
querer terminar con la compra, deje el espacio vacio)`);
    if(!NombreP){
        break;
    }

    const ValorP = prompt(`Digite el valor del articulo ${NombreP}`);
    const Valor = parseFloat(ValorP);
    
    if(isNaN(Valor) || Valor <0){
        alert("Ingrese un valor valido");
        continue;
    }
    total += Valor;
    alert(`Articulo: ${NombreP} = $${Valor}. El total por el momento:
$${total}`);
} 
if (total>100000){
    const descuento = total * 0.10;
    const descuentoT = total - descuento;
    alert (`Su total es de $${total}. Pero al ser sus compras mayores a 
100000, se aplico un descuento del 10%, por ende, su total es $${descuentoT}`);
}else{
    alert(`Su total a pagar es $${total}.`)
}