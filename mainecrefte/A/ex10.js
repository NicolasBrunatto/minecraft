function cronoTrigger() {
    const cronometro = document.querySelector('#cronometro')
    const btStart = document.querySelector('#startBtn')
    const btStop = document.querySelector('#stopBtn')
    const btReset = document.querySelector('#resetBtn')

    let s = 0
    let m = 0
    let h = 0
    let pausado = true
    let timer
    let fstTime


    function zerEsquerdalha(num) {
        return num < 10 ? `0${num}` : num
    }

    function countTime() {
        timer = setInterval(() => {

            if (s >= 59) {
                s = 0
                m++
            } else {
                if (!pausado) {
                    s++
                }
            }

            if (m >= 59) {
                m = 0
                h++
            }
            cronometro.innerHTML = `${zerEsquerdalha(h)}:${zerEsquerdalha(m)}:${zerEsquerdalha(s)}`

        }, 1000);
    }

    btStart.addEventListener("click", function () {
        pausado = false
        fstTime = true
        cronometro.style.color = 'white'
        clearInterval(timer)
        countTime()
    })
    btStop.addEventListener("click", function () {
        pausado = true
        if (fstTime) { cronometro.style.color = 'red' }
    })

    btReset.addEventListener("click", function () {
        cronometro.style.color = 'white'
        fstTime = false
        s = 0
        m = 0
        h = 0
        cronometro.innerHTML = `${zerEsquerdalha(h)}:${zerEsquerdalha(m)}:${zerEsquerdalha(s)}`
    })


}
cronoTrigger()
