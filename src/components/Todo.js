import React, {useState} from "react";
import '../App.css'

function Todo(props){
    return(
        <div className={`todo-item ${props.todo.checkStatus() ? 'done' : ''}`} onClick={() => {
            props.todo.checkFinished()
            props.updateTodo(props.todo)
            }}>
            <h1>{props.todo.title}</h1>
            <h2>{props.todo.description}</h2>
            <h3>{props.todo.priority}</h3>
            <button onClick={() => {props.deleteTodo(props.todo)}}>X</button>
        </div>
    )
}

export default Todo;