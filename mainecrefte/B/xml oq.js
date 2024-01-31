/* jeito ruim:
const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send(null)

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', e => {
    const target = e.target
    const tag = target.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(target)
    }
})

function loadPage(e) {
    const href = e.getAttribute('href')
    request({
        method: 'GET',
        url: href,
        sucess(response){
          loadResult(response)  
        },
        error(errortext){
            console.log(errortext)
        }
    })
}
function loadResult(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

*/
//com Promise:
/*
const request = obj => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send(null)
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
   
}

document.addEventListener('click', e => {
    const target = e.target
    const tag = target.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(target)
    }
})

async function loadPage(e) {
    const href = e.getAttribute('href')
    try {
        const response = await request({
            method: 'GET',
            url: href
        })
        loadResult(response)
    } catch (error) {
        console.log(error)
    }
}
function loadResult(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}*/

//com fetch

document.addEventListener('click', e => {
    const target = e.target
    const tag = target.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(target)
    }
})

function loadPage(e) {
    const href = e.getAttribute('href')
    fetch(href)
        .then(response => response.text())
        .then(html => loadResult(html))
        .catch(e=>console.error(e))
}
function loadResult(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}