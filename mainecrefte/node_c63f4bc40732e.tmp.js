const fizz = (num) => num%3 === 0?'fizz':''
const buzz = (num) => num%5 === 0?'buzz':''
const fizzbuzz = (num)  => (!fizz(num) && !buzz(num))?num:''

function loop(){
    let i = 0
    setTimeout(() => {
        console.log(i,'##',fizz(i),buzz(i),fizzbuzz(i))
        loop()
    }, 500);
    if(i<10){
        i++
        
    }
}
loop()