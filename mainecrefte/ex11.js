function main() {

    const btnAdd = document.querySelector('#buttonAdd')
    const inputText = document.querySelector('#input')
    const list = document.querySelector('#ul')

    loadSavedTasks()

    btnAdd.addEventListener('click', function(){
        if(inputText.value){
        addInputToList(inputText.value)
        }
        saveTaks()
        clearInput()
        
    })

    document.addEventListener('click', function(e){
        const eClicked = e.target
        if(eClicked.classList.contains('deleteBtn')){
           eClicked.parentElement.remove()
        }
        saveTaks()
    })

    function clearInput(){
        inputText.value=''
        inputText.focus()
    }

    function addInputToList(message) { 
        const li = document.createElement('li')
        
        li.innerHTML += message
        list.appendChild(li)
        createDeleteBtn(li)
    }

    function createDeleteBtn(li){
        const genDelBt = document.createElement('button')
        genDelBt.classList.add('deleteBtn')

        genDelBt.innerText = 'delete'

        li.appendChild(genDelBt)
    }

    function saveTaks()
    {
        const taskList = ul.querySelectorAll('li')
        const tasksArray = []

        for (let taskName of taskList) {
            let taskText = taskName.innerText
            taskText = taskText.replace('delete', '')
            taskText = taskText.replace('\n', '')
            tasksArray.push(taskText)
        }
        const tasksJSON = JSON.stringify(tasksArray)
        localStorage.setItem('tasks', tasksJSON)
    }
    
    function loadSavedTasks(){
        const tasks = localStorage.getItem('tasks')
        const taskList = JSON.parse(tasks)
        for (const i in taskList) {
            addInputToList(taskList[i])
        }
    }

}
main() 
