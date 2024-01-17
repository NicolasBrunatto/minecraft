const getMaior = (x,y) => x>y?x:y
const getMenor = (x,y) => x<y?x:y
const array = [12,65,78,154,233,-18,68,16,26,45,98,12,5,2] //a ideia é fz um imput pra pegar esses numeros
let maior = array[0]
let menor = array[0]

for(let i in array){
    maior = getMaior(array[i], maior)
    menor = getMenor(array[i], menor)
}
console.log(maior, menor)