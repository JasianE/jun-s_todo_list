import React from "react";
import SidebarPart from "./SidebarPart";
import CreateNewProject from "./CreateNewProject";
import '../App.css'

function Sidebar(props){
    return(
        <div className="sidebar">
            {props.projects.map((key) => {
                return(
                    <SidebarPart project={key} setActive={props.setActive} delete={props.deleteProject} activeProject={props.activeProject}/>
                )
            })}
            <CreateNewProject create = {props.createNewProject}/>

        </div>
    )
}

export default Sidebar;