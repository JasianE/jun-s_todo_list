import addTodo from "./addTodo";
import deleteTodo from "./deleteTodo";
import updateTodo from "./updateTodo";

function project(name){
    let todos = []; //store an array of todo
    let id = crypto.randomUUID()

    function handleLogic(todo){
        todos = addTodo(todos, todo)
    }
    function getTodos(){
        return todos
    }
    function handleDeleteLogic(todo){
        todos = deleteTodo(todos, todo)
    }
    function getName(){
        return name
    }
    function handleUpdateLogic(todo){
        todos= updateTodo(todos, todo);
    }
    return {
        getName,
        getTodos,
        handleLogic,
        handleDeleteLogic,
        handleUpdateLogic,
        id
    }
}

export default project