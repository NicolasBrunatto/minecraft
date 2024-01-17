(function () {
    const display = document.querySelector('#display')
    //writes on the display
    document.addEventListener('click', function (e) {
        if (display.innerHTML.length < 8) {
            if (e.target.classList.contains('num')) {
                display.innerText += e.target.innerText
            }
        }

        if (e.target.classList.contains('btnBKSP')) {
            deleteDisplayElement()
        }
        if (e.target.classList.contains('btnEnter')) {
            pressEnter()
        }
        if (e.target.classList.contains('btnAC')) {
            deleteAll()
        }
    })

    //deletes display elements
    function deleteDisplayElement() {
        display.innerHTML = display.innerHTML.slice(0, -1)
    }
    //deletes all
    function deleteAll() {
        display.innerHTML = ''
    }
    //press enter
    function pressEnter() {
        calc2()
    }

    function calc2() {
        let result = (display.innerHTML)
        result = eval(result)
        if (result) {
  
            let resultString = result.toString()
            if (resultString.length > 8) { result = result.toFixed(6) }
            display.innerHTML = result
        }
        else { alert('invalid') }
    }

}())