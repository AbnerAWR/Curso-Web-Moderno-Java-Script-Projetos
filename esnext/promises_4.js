const { functionsIn } = require("lodash");

function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve =>{
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo);
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 50, 4000),
        gerarNumerosEntre(1, 50, 1000),
        gerarNumerosEntre(1, 50, 500),
        gerarNumerosEntre(1, 50, 3000),
        gerarNumerosEntre(1, 50, 100),
        gerarNumerosEntre(1, 50, 1500)
    ])
}


console.time('tempo')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('tempo')
    })

