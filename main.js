
let operacion = prompt("ingrese el nombre de la operacion que desea realizar").toLowerCase();
let priNumero
let segNumero



if (operacion == "suma") {
    pedir_Numeros()
    ingrese_Un_Numero()
    console.log(priNumero + segNumero); //SUMA
}
else if (operacion == "resta") {
    pedir_Numeros()
    ingrese_Un_Numero()
    console.log(priNumero - segNumero); //RESTA
}
else if (operacion == "multiplicacion") {
    pedir_Numeros()
    ingrese_Un_Numero()
    console.log(priNumero * segNumero); //MULTIPLICACION
}
else if (operacion == "divicion") {
    pedir_Numeros()
    ingrese_Un_Numero()
    console.log(priNumero / segNumero); //DIVICION
}
else if (operacion == "resto") {
    pedir_Numeros()
    ingrese_Un_Numero()
    console.log(priNumero % segNumero); //RESTO
}
else if (operacion == "exponenciacion") {
    pedir_Numeros()
    ingrese_Un_Numero()
    let auxiliar
    let resultado

    if (segNumero < 0) {
        alert("exponente errado")
    }
    else {
        resultado = 1
        auxiliar = 1
    }

    while (auxiliar <= segNumero) {
        
        resultado = resultado * priNumero
        auxiliar = auxiliar + 1
    }

    console.log(resultado);
}
else if (operacion == "factorial") {

    let numero = Number(prompt("Ingrese un numero a factorizar"));
    let factorial = 1;

    while (isNaN(numero)) {
        alert("ingrese un numero por favor")
        numero = Number(prompt("ingrese un numero a factorizar"))
    }

    if (numero < 0) {
        console.log("El factorial no esta definido para numero negativos")
    }
    else {
        for (let contador = 1; contador <= numero; contador++) {

            factorial = factorial * contador
        };
        console.log(factorial);
    }
}
else {
    console.log("FIN")
}

function pedir_Numeros() {
    priNumero = Number(prompt("ingrese el primer numero"));
    segNumero = Number(prompt("ingrese el segundo numero"));

}

function ingrese_Un_Numero() {
    while (isNaN(priNumero) || isNaN(segNumero)) {
        alert("ingrese un numero por favor")
        pedir_Numeros()
    }
    return (true)
}

