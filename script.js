const cantidad = 15

//Variable let para iterar varias veces
let i = 0
let primoTemp = 1

const esPrimo = primo => {

    let cantDivisores = 0

    for (let i = 1; i <= primo; i++) {
        if (primo % i == 0){
            cantDivisores++
        }
    }

    if (cantDivisores == 2) {
        return true
    }

    return false
}

while (i < cantidad){

    if(esPrimo(primoTemp) && i > -1){
        console.log(i+1, "->", primoTemp);

        i++
    }

    primoTemp++
}



console.log(esPrimo(2))
