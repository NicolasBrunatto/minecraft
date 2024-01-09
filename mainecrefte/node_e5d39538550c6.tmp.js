const fizz = (num) => num%3 === 0?'fizz':''
const buzz = (num) => num%5 === 0?'buzz':''
const fizzbuzz = (num)  => (!fizz(num) && !buzz(num))?num:''

let i = 0
function loop(){
   
    setTimeout(function(){
        console.log(i,'##',fizz(i),buzz(i),fizzbuzz(i))
        if(i<100000){    
        loop()   
    }
        
    }, 200);
    
    
    i++ 
}
loop()
