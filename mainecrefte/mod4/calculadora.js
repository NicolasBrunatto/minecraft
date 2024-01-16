(function () {
    const display = document.querySelector('#display')
    const btnOpen = document.querySelector('#btnOpen')
    const btnClose = document.querySelector('#btnClose')
    const btnDot = document.querySelector('#btnDot')
    const btnMinus = document.querySelector('#btnMinus')
    const btnDivision = document.querySelector('#btnDivision')
    const btnMultiply = document.querySelector('#btnMultiply')
    const btnPlus = document.querySelector('#btnPlus')
    const btnEnter = document.querySelector('#btnEnter')
    const btnClear = document.querySelector('#btnAC')
    const btnBackSpace = document.querySelector('#btnBKSP')


    let operator = 0
    let num1, num2, afterDot 
    let tamNum1

    //writes on the display
    document.addEventListener('click', function (e) {
        if (display.innerHTML.length < 8) {
            if (e.target.classList.contains('num')) {
                display.innerText += e.target.innerText
            }
        }
    })

    //deletes display elements
    btnBackSpace.addEventListener('click', function deleteDisplayElement() {
        display.innerHTML = display.innerHTML.slice(0, -1)
    })
    //deletes all
    btnClear.addEventListener('click', function deleteDisplayElement() {
        display.innerHTML = ''
    })
    //dotted numbers
    btnDot.addEventListener('click', function(){

    })
    

    //gets operators
    btnDivision.addEventListener('click', function () {
        num1 = Number(display.innerHTML)
        display.innerHTML += '/'
        tamNum1 = display.innerHTML.length
        operator = 0        
    })
    btnMultiply.addEventListener('click', function () {
        num1 = Number(display.innerHTML)
        display.innerHTML += '*'
        tamNum1 = display.innerHTML.length
        operator = 1
    })
    btnPlus.addEventListener('click', function () {
        num1 = Number(display.innerHTML)
        display.innerHTML += '+'
        tamNum1 = display.innerHTML.length
        operator = 2
    })
    btnMinus.addEventListener('click', function () {
        num1 = Number(display.innerHTML)
        display.innerHTML += '-'
        tamNum1 = display.innerHTML.length
        operator = 3
    })
    //press enter
    btnEnter.addEventListener('click', function () {
        num2 = display.innerHTML
        num2 = Number(num2.slice(tamNum1,display.innerHTML.length))
        let result = calculate(operator, num1, num2) 
        let resultString = result.toString()   
        if(resultString.length > 8){ result = result.toFixed(6)}
        display.innerHTML = result
    })
    //calculates the result
    function calculate(operator, num1, num2) {
        if (operator === 0) {
            return (num1 / num2.toFixed(4))
        }
        if (operator === 1) {
            return (num1 * num2.toFixed(4))
        }
        if (operator === 2) {
            return (num1 + num2.toFixed(4))
        }
        if (operator === 3) {
            return (num1 - num2.toFixed(4))
        }
    }
}())