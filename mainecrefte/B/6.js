const pessoas = [
    { id: 3, nome: 'luiz' },
    { id: 2, nome: 'joso' },
    { id: 1, nome: 'mariA' },
]

/*const novasPessoas = {}

for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas[id] = {...pessoa }
}*/
const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id,{...pessoa})
}

console.log(novasPessoas)