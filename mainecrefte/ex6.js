const escrever = [{tag: 'p', texto: 'isto é um paragrafo'}, 
{tag: 'div', texto: 'isto é uma div'}, 
{tag: 'h2', texto: 'isto é um titule h2'},
{tag: 'p', texto: 'isto é outro paragrafo'}]

function createElementsHTML(c)
{
    const container = document.querySelector('#main')

    const writing = document.createElement(escrever[c].tag)

    if(escrever[c].tag === 'div')
    {
        const list = writing.classList;
        list.add("div");
    }
        writing.innerText += escrever[c].texto
        container.appendChild(writing)
}

for (let c = 0; c < escrever.length; c++) {
    createElementsHTML(c)
}


    

