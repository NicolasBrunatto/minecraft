fetch('pessoas.json')
    .then(response => response.json())
    .then(json => console.log(json))

