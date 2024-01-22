(function () {
    let width1 = 3
    let height1 = 3
    let width2 = 3
    let height2 = 3
    criaTabela(height1, width1)
    criaTabela2(height2, width2)

    function criaTabela(height, width) {
        let html = '<table>'
        for (let row = 0; row < height; row++) {
            html += '<tr>'
            for (let collumn = 0; collumn < width; collumn++) {

                let index = collumn + width * row

                html += '<td>'
                html += `<input id='${index}' type="number">`
                html += '</td>'
            }

            html += '</tr>'

        }
        html += '</table>'

        document.querySelector('#matrix1').innerHTML = html
    }
    //TABLES 1 and 2
    function criaTabela2(height, width) {
        let html = '<table>'
        for (let row = 0; row < height; row++) {
            html += '<tr>'
            for (let collumn = 0; collumn < width; collumn++) {
                let index = collumn + width * row

                html += '<td>'
                html += `<input id='${index}' type="number">`
                html += '</td>'
            }

            html += '</tr>'

        }
        html += '<tr>'
        html += `<td><button ><</button><td><button class="decrease">^</button><td><button class="AC2">AC</button>`
        html += '</tr>'

        html += '<tr>'
        html += `<td colspan="${width}"><button class="increaseWidth2 btn2">></button><button class="increaseHeight2 btn2">V</button>`
        html += '</tr>'

        html += '<tr>'
        html += `<td colspan="${width}"><button>DET</button>`
        html += '</tr>'

        html += '</table>'

        document.querySelector('#matrix2').innerHTML = html
    }

    document.addEventListener('click', function (e) {
        const target = e.target
        //increases
        if (target.classList.contains('increaseWidth2')) {
            increaseWidth2()
            return
        }
        if (target.classList.contains('increaseHeight2')) {
            increaseHeight2()
            return
        }
        if (target.classList.contains('increaseWidth')) {
            increaseWidth()
            return
        }
        if (target.classList.contains('increaseHeight')) {
            increaseHeight()
            return
        }
        //decreases
        if (target.classList.contains('decreaseWidth2')) {
            decreaseWidth2()
            return
        }
        if (target.classList.contains('decreaseHeight2')) {
            decreaseHeight2()
            return
        }
        if (target.classList.contains('decreaseWidth')) {
            decreaseWidth()
            return
        }
        if (target.classList.contains('decreaseHeight')) {
            decreaseHeight()
            return
        }
        //clear
        if (target.classList.contains('AC1')) {
            clearImputs1()
            return
        }
        if (target.classList.contains('AC2')) {
            clearImputs2()
            return
        }

    })
    //increase
    function increaseWidth() {
        width1++
        criaTabela(height1, width1)
    }

    function increaseHeight() {
        height1++
        criaTabela(height1, width1)
    }
    function increaseWidth2() {
        width2++
        criaTabela2(height2, width2)
    }
    function increaseHeight2() {
        height2++
        criaTabela2(height2, width2)
    }

    //decrease
    function decreaseWidth() {  
        if(width1>1) width1--
         criaTabela(height1, width1)
        

    }

    function decreaseHeight() {
        if(height1>1) height1--
        criaTabela(height1, width1)
    }
    function decreaseWidth2() {
        if(width1>1) width2--
        criaTabela2(height2, width2)
    }
    function decreaseHeight2() {
        if(height2>1)height2--
        criaTabela2(height2, width2)
    }

    function clearImputs1() {
     criaTabela(height1,width1)
    }
    function clearImputs2() {
        criaTabela2(height2,width2)
    }

}())