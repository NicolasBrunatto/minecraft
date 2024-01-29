function rand() {
    return Math.floor(Math.random() * 2000)
}

function esperai(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg != "string"){
                reject('pobrema')
                return
            }
            
            resolve(msg)
        }, tempo);
    })
}
/*
esperai('msg1', rand())
.then(resposta => {
    console.log(resposta)
    return esperai('frase2', rand())
})
.then(resposta => {
    console.log(resposta)
    return esperai('frase3',rand())
})
.then(resposta=>{
    console.log(resposta)
})
*/

//MUUUUUITO MELHOR |
//                 V
async function cleiton() {
    try {
        const f1 = await esperai('msg1', rand())
        console.log(f1)
        const f2 = await esperai(22, rand())
        console.log(f2)
        const f3 = await esperai('msg3', rand())
        console.log(f3)
    }catch(e){
        console.log(e)
    }
}
cleiton()