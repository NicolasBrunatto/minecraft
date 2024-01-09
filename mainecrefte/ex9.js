const fizz = (num) => num%3 === 0?'fizz':''
const buzz = (num) => num%5 === 0?'buzz':''
const fizzbuzz = (num)  => (!fizz(num) && !buzz(num))?num:''

for(let i=1; i<=100;i++)
{
    console.log(i,'##',fizz(i),buzz(i),fizzbuzz(i))
}