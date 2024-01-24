const cpf = '102.371.209-17'

function limpaCpf(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '')
    return cpfLimpo
}

function getFirstDigit() {
    const arrayCpf = geraArray(limpaCpf(cpf))
    let somado = 0
    let j = 10
    for (let i in arrayCpf) {
        somado += Number(arrayCpf[i]) * j
        j--
    }
    const num = 11 - (somado % 11)

    return num > 9 ? 0 : num
}
function getSecondDigit() {
    let arrayCpf = geraArray(limpaCpf(cpf))
    arrayCpf.push(firstDigit)
    let somado = 0
    let j = 11
    for (let i in arrayCpf) {
        somado += Number(arrayCpf[i]) * j
        j--
    }
    const num = 11 - (somado % 11)
    secondDigit = num > 9 ? 0 : num
    arrayCpf.push(secondDigit)

    return arrayCpf
}

function geraArray(cpfLimpo) {
    let cpfLimpo2 = Array.from(cpfLimpo)
    cpfLimpo2.splice(9, 2)
    return cpfLimpo2
}
function geraArray2(cpfLimpo) {
    const cpfLimpo2 = Array.from(cpfLimpo)
    return cpfLimpo2
}
function valida(cpf, arrayFinal) {
    const arrayCpf = geraArray2(limpaCpf(cpf))
    let verifica = true
    for (let i in arrayFinal) {
        arrayFinal[i] = Number(arrayFinal[i])
    }
    for (let i in arrayCpf) {
        arrayCpf[i] = Number(arrayCpf[i])
    }
    for (let i in arrayFinal) {
        if (arrayFinal[i] == arrayCpf[i]) {
            verifica = true
            
        }
        else{
            verifica = false
            break
        }
    }
    return verifica
}

const firstDigit = getFirstDigit()
const arrayFinal = getSecondDigit()

console.log(valida(cpf, arrayFinal))



