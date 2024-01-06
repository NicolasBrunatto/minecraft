const numero = Number(prompt('digite um número: '))
const escreverTitulo = document.getElementById('numero')

const texto = document.getElementById('resultados')

escreverTitulo.innerHTML = numero



texto.innerHTML = `<p>Raiz quadrada = <strong>${Math.sqrt(numero).toFixed(2)}</strong></p>`
texto.innerHTML += `<p>${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p>É NaN? = <strong>${Number.isNaN(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando pra baixo = <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando pra cima = <strong>${Math.ceil(numero)}</strong></p>`