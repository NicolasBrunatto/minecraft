const section = document.querySelector('section')
const paragrafos = section.querySelectorAll('p')
const estilos = getComputedStyle(document.body)
const corBody = estilos.backgroundColor

for (const key of paragrafos) {
    key.style.backgroundColor = corBody
    key.style.color = 'white'
}
