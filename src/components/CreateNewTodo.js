import React, {useState} from "react";
import createTodoItem from "../logic/toDoItem";
import '../App.css'

function CreateNewTodo(props){
    const [formData, setFormData] = useState({
        title:'', 
        description: '',
        priority: 1
    })
    function handleChange(e){
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        const todo = createTodoItem(formData.title, formData.description, formData.priority);
        setFormData({
            title: '',
            description: '',
            priority: 1
        })
        props.addToProject(todo);
    };

    return(
        <form onSubmit={handleSubmit} className="create-new-todo-form">
            <label>
                Title
                <input 
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Description
                <textarea required name = 'description' id = 'description' value = {formData.description} onChange={handleChange} rows={4} cols={40}/>
            </label>
            <select value={formData.priority} onChange={handleChange} name='priority' required>
                <option value="1" name='priority'>1</option>
                <option value="2" name='priority'>2</option>
                <option value="3" name='priority'>3</option>
            </select>
            <button>Create New Todo</button>
        </form>
    )
}

export default CreateNewTodo