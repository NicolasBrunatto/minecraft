function main() {
    const arrayOriginal = [10];
    const arrayTemp = [10];
    let c

    for (c = 0; c < 10; c++) {
        arrayOriginal[c] = c + 1;
        arrayTemp[c] = 0
    }

    writeOnTable()

    let i = 1;                       //  set your counter to 1

    function myLoop() {             //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            defineArray()
            //  increment the counter
            if (i < 10) {           //  if the counter < 10, call the loop function
                myLoop();           //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
        }, 500)
    }

    myLoop();

    function defineArray() {
        arrayTemp[0] = arrayOriginal[9]
        arrayOriginal[9] = arrayOriginal[0]

        for (c = 0; c < 9; c++) {

            arrayTemp[c + 1] = arrayOriginal[c]

        }

        for (c = 0; c < 10; c++) {
            arrayOriginal[c] = arrayTemp[c]
        }
        writeOnTable()
    }

    function writeOnTable() {
        const td1 = document.querySelector('#td1')
        const td2 = document.querySelector('#td2')
        const td3 = document.querySelector('#td3')
        const td4 = document.querySelector('#td4')
        const td5 = document.querySelector('#td5')
        const td6 = document.querySelector('#td6')
        const td7 = document.querySelector('#td7')
        const td8 = document.querySelector('#td8')
        const td9 = document.querySelector('#td9')
        const td10 = document.querySelector('#td10')

        td1.innerHTML = arrayOriginal[0]
        td2.innerHTML = arrayOriginal[1]
        td3.innerHTML = arrayOriginal[2]
        td4.innerHTML = arrayOriginal[3]
        td5.innerHTML = arrayOriginal[4]
        td6.innerHTML = arrayOriginal[5]
        td7.innerHTML = arrayOriginal[6]
        td8.innerHTML = arrayOriginal[7]
        td9.innerHTML = arrayOriginal[8]
        td10.innerHTML = arrayOriginal[9]

    }
}
main()
