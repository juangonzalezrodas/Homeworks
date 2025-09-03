const parOimpar = (numero) => {
    if(numero % 2 === 0){
        return "El numero es par"
    } else {
        return "El numero es impar"
    }
}

const prueba = parOimpar(10)
console.log(prueba)
