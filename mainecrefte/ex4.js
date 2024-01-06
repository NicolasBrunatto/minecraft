function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num
}

function Get_mes(Mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Abril', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[Mes]
}
function getUtcTime(num) {
    return Number(num)+3
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = Get_mes(data.getMonth())
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const seg = zeroEsquerda(data.getSeconds())

    const horaUTC = getUtcTime(hora)

    return `Hoje é ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)

//teste GIT