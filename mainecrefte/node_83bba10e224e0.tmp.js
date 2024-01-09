const fizz = (num) => num%3 === 0?'fizz':''
const buzz = (num) => num%5 === 0?'buzz':''
const fizzbuzz = (num)  => (!fizz(num) && !buzz(num))?num:''

const allPrimes = []



function primo(num){
    let numOfDivisors = 0

    for (let i2 = 0; i2 < num; i2++) {
        if(num%i2 == 0){
            numOfDivisors++
        }
    } 

    if(numOfDivisors < 2 && num> 1){
        allPrimes.push(num)
    }
}



for (let i = 0; i < 100000; i++) {
   // console.log(i,'##',fizz(i),buzz(i),fizzbuzz(i))
   primo(i)

}
console.log(allPrimes)

