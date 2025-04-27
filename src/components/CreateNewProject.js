
import { useState } from "react";
import '../App.css'
function CreateNewProject(props){
    const [formData, setFormData] = useState({
        title:'', 
    })
    function handleChange(e){
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        props.create(formData.title)
        setFormData({
            title: '',
        })
    };

    return(
        <form onSubmit={handleSubmit} className="create-project-form">
            <label>
                Name:
                <input 
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                />
            </label>
            <button>Create New Project</button>
        </form>
    )
}

export default CreateNewProject