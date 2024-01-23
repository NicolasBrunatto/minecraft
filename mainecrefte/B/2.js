const numeros = [1, 2, 125, 51, 6, 1, 26, 12, 61, 2];
const pessoas = [
    {nome: 'luiz'},
    {nome: 'adamstor'},
   {nome: 'engenheiros do havai'},
    {nome: 'henrique'},
   {nome: 'carla'}
]

const filtered = pessoas.filter(obj =>obj.nome.length > 5)

//console.log(filtered)

const total = numeros.reduce((acu, value, index, array) =>{
    return acu+=value
},0)
console.log(total)