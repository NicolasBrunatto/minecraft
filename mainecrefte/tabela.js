function main() {
    const width = document.querySelector('#width')
    const height = document.querySelector('#height')
    const gerar = document.querySelector('#form')

    gerar.addEventListener('submit', function (e) {
        e.preventDefault()

        criaTabela(Number(height.value), Number(width.value))
    })

    function criaTabela(height, width) {
        let html = '<table cellpadding = 0 cellspacing = 0>'
        for (let row = 0; row < height; row++) {
            html += '<tr>'
            for (let collumn = 0; collumn < width; collumn++) {

                let index = 1 + (collumn + width * row)

                html += '<td>'
                html += index
                html += '</td>'
            }

            html += '</tr>'
        }

        html += '</table>'
        document.querySelector('#tabela').innerHTML = html
    }

}
main()