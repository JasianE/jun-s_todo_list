import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, act} from 'react';
import Todo from './components/Todo';
import project from './logic/project';
import createTodoItem from './logic/toDoItem';
import CreateNewTodo from './components/CreateNewTodo';
import Sidebar from './components/Sidebar';

function App() {
  const [projects, setProjects] = useState([project("default")])
  const [activeProject, setActiveProject] = useState()

  useEffect(() => {
    setActiveProject(projects[0]);
  }, [])

  function createNewProject(name){
    let copy = [...projects]; 
    let newProject = project(name);
    copy.push(newProject);
    setProjects(copy);
  }
  function addToProject(todo){
    const newProject = {...activeProject}
    newProject.handleLogic(todo);
    setActiveProject(newProject)
  }
  function deleteTodo(todo){
    const newProject = {...activeProject}
    newProject.handleDeleteLogic(todo);
    setActiveProject(newProject)
  }
  function updateTodo(todo){
    const newProject = {...activeProject}
    newProject.handleUpdateLogic(todo);
    setActiveProject(newProject)
  }
  function setActive(project){
    const activeProject=  projects.find((element) => {
      return element.id == project.id
    }) 
    setActiveProject(activeProject)
  }
  return (
    <div className="App">
      <Sidebar projects={projects} createNewProject={createNewProject} setActive={setActive} activeProject={activeProject}/>
      <div className='todo-container'>
        {activeProject ? ( //check for prerendering issues
            () => activeProject.getTodos().map((key) => { //map through the todos and return todos
            return <Todo todo={key} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
          })
        )() : null
        }
      </div>
      <CreateNewTodo addToProject={addToProject}/>

    </div>
  );
}

export default App;
