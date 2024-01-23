const obj = new Produto('camiseta', 20, 3)

function Produto(produto, preco, estoque) {
    this.produto = produto
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        //writable: false, // o valor
        configurable: false, //a chave em si

        get: () => estoque,
        set: valor => estoque = valor
    })
}
obj.estoque = 0.5

console.log(obj)