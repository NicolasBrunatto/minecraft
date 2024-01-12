( function(){
    function rand(min = 1000, max = 3000){
        const randomNum = Math.random() * (max - min) + min
        console.log(randomNum)
        return Math.floor(randomNum)
     }
     
     function f1(callback){
         if(callback) callback()
         setTimeout(function(){
             console.log('f1')
             
         },rand())
     }
     
     f1(f1Callback())
     
     function f1Callback(){
         console.log('aguarde')
     }
}())