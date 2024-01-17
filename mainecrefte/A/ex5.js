const pessoa = {
   nome: 'luiz',
    endereco: {
        rua: 'Paulista',
        numero: 280
    }
}

const {nome = 'desconhecido', endereco: {rua, numero}} = pessoa

console.log(`${nome} mora na rua: ${rua}, número: ${numero}`)