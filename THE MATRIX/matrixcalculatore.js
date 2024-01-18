(function () {
    let width1 = 3
    let height1 = 3
    criaTabela(width1, height1)


    function criaTabela(height, width) {
        let html = '<table>'
        for (let row = 0; row < height; row++) {
            html += '<tr>'
            for (let collumn = 0; collumn < width; collumn++) {

                html += '<td>'
                html += '<input type="number">'
                html += '</td>'
            }

            html += '</tr>'

        }
        html += '<tr>'
        html += `<td colspan="${width}"><button>DET</button>`
        html += '</tr>'
        html += '<tr>'
        html += `<td colspan="${width}"><button class="increaseWidth" class="btn2">></button><button class="increaseHeight" class="btn2">V</button>`
        html += '</tr>'

        html += '</table>'

        document.querySelector('#matrix1').innerHTML = html
    }

    document.addEventListener('click',function(e){
        const target = e.target
        if(target.classList.contains('increaseWidth')){
            increasewidth()
        }
    })

    function increasewidth(){

    }

}())