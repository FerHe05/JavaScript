const form = document.querySelector("[data-form]")
const lists = document.querySelector("[data-lists]")
const input = document.querySelector("[form-input]")



class Storage{
    static addTodoStorage(todoArray){
        let storage = localStorage.setItem("todo", JSON.stringify(todoArray))
        return storage
    }

    static getStorage(){
        let storage = localStorage.getItem("todo") === null ? [] : JSON.parse(localStorage.getItem("todo"))
        return storage
    }
}

let todoArray = Storage.getStorage()

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let id = Math.random() * 1000000
    const todo = new Todo(id, input.value)
    todoArray = [...todoArray, todo];
    UI.displayData()
    UI.clearInput()
    UI.removeTodo()
    Storage.addTodoStorage(todoArray)
})

class Todo{
    constructor(id, todo){
        this.id = id
        this.todo = todo
    }
}

class UI{
    static displayData(){
        let displayData = todoArray.map((item) =>{
            return
            `
                <div class="todo">
                    <p>${item.todo}</p>
                    <span class= "remove" data-id = ${item.id}> X </span>
                </div>
            `
        })
        lists.innerHTML = (displayData).join(" ")
    }
    static clearInput(){
        input.value = ""
    }

    static removeTodo(){
        lists.addEventListener("click", (e) =>{
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove()
            }
            let btnId = e.target.dataset.id
            UI.removeArrayTodo(btnId)
        })
    }
    static removeArrayTodo(id){
        todoArray = todoArray.filter((item) => item.id !== + id)
        Storage.addTodoStorage(todoArray)
    }
}

window.addEventListener("DOMContentLoaded", () =>{
    UI.displayData();
    UI.removeTodo();
})
