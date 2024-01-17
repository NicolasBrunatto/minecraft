const escrever = [{ tag: 'p', texto: 'isto é um paragrafo' },
{ tag: 'div', texto: 'isto é uma div' },
{ tag: 'h2', texto: 'isto é um titule h2' },
{ tag: 'p', texto: 'isto é outro paragrafo' }]

function createElementsHTML(c) {
    const container = document.querySelector('#main')

    const writing = document.createElement(escrever[c].tag)

    if (escrever[c].tag === 'div') {
        const list = writing.classList;
        list.add("div");
    }
    writing.innerText += escrever[c].texto
    container.appendChild(writing)
}

for (const c in escrever) {
    createElementsHTML(c)
}

const qtdPrimosInput = document.querySelector('#inputPrimos')
const formulario = document.querySelector('#formulario')
const allPrimes = []

formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    const qtdPrimos = Number(qtdPrimosInput.value)
    writePrime(qtdPrimos)
})

function verificaPrimo(num,allPrimes) {
    let numDivisores = 0

    for (let i2 = 0; i2 < num; i2++) {
        if (num % i2 == 0) {
            numDivisores++
        }
    }
    if (numDivisores < 2 && num > 1) {
        allPrimes.push(num)
    }
}

function writePrime(qtd) {
    const paragrafoPrimos = document.querySelector('#primos')
    const allPrimes = []

    paragrafoPrimos.innerHTML = ''
    paragrafoPrimos.innerHTML = `Primos entre 0 e ${qtd}: `

    for (let i = 0; i < qtd; i++) {
        verificaPrimo(i, allPrimes)  
    }   
    //writes the array on the paragraph (I wanted put comas)
    for (let i = 0; i < allPrimes.length; i++) {
        paragrafoPrimos.html = i<allPrimes.length - 1?paragrafoPrimos.innerHTML += `<strong>${allPrimes[i]}, </strong>`:paragrafoPrimos.innerHTML += `<strong>${allPrimes[i]}</strong>.`
    }
}
