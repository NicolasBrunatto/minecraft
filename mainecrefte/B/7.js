class Disp {
    constructor(nome,coisa1,coisa2,coisa3) {
        this.nome = nome
        this.coisa1 = coisa1
        this.coisa2 = coisa2
        this.coisa3 = coisa3
    }
    manda() {
        console.log('manda')
    }

}
class SmartPhone extends Disp{
    constructor(nome,versao, cor,coisa1,coisa2,coisa3 ){
        super(nome,coisa1,coisa2,coisa3)
        this.versao = versao
        this.cor = cor
    }
}

const celu1 = new SmartPhone('jorne', 5,'azul','coisa1','coisa2','coisa3')

console.log(celu1)