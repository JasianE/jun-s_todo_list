import createTodoItem from "./toDoItem"

export default function addTodo(arr, todo){
    let copy = [...arr]
    let newTodo = createTodoItem(todo.title, todo.description, todo.priority); // trying to follow the single responsibility principle
    copy.push(newTodo)
    return copy
}