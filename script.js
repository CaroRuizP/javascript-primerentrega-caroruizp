

let nombre;
let seguir;
let gastoMes;
let unidades;
let nombreGasto="";
let total=0;

nombre = prompt("Hola! Para iniciar con los gastos del mes, decinos tu Nombre");

do
{
   do {       
    gastoMes = parseFloat(prompt("Ingrese importe"));
        if (gastoMes <=0)
        {
            alert("El importe no es válido!");
        }

    }while (gastoMes <= 0);

    unidades = parseInt(prompt("Cuántas unidades adquirió?"));
    while (unidades <= 0)
    {
        unidades = parseInt(prompt("cantidad invalida, vuelva a completar"));
    }

    nombreGasto = prompt("Mencione detalle del gasto efectuado");
    

    total = total + gastoMes*unidades;

    seguir = prompt("Desea ingresar otro item? SI/NO");

}while(seguir == 'SI');

alert(`${nombre.toUpperCase()} su gasto TOTAL del mes es: ${total} en ${nombreGasto}`);




