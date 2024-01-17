function main() {
    const altura = (document.querySelector('#altura'))
    const peso = document.querySelector('#peso')
    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('submit', function (e) {
        e.preventDefault()
        if (Number(altura.value) / 10 < 1) {

            const imc = calcular(Number(altura.value), Number(peso.value))
            escreverResultados(imc.toFixed(2))
            setResultadoBackground()
        } else {
            alert('escreve direito')
        }
    })

    function calcular(altura, peso) {

        return peso / (altura ** 2)

    }

    function escreverResultados(msg) {
        const result = document.querySelector('#calculos')
        result.innerHTML = ''
        const paragrafo = document.createElement('p')
        paragrafo.innerHTML = `seu IMC é: <strong>${msg}</strong>`
        result.appendChild(paragrafo)
    }
}
main()