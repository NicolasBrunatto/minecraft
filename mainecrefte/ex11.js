function main() {

    const btnAdd = document.querySelector('#buttonAdd')
    const inputText = document.querySelector('#input')

    btnAdd.addEventListener('click', function(){
        if(inputText.value){
        addInputToList(inputText.value)
        }
    })

    function addInputToList(message) {

        const list = document.querySelector('#lista')
        const li = document.createElement('li')
        li.innerHTML += message
        list.appendChild(li)
    }
}
main()