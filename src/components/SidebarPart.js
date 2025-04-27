

function SidebarPart(props){
    let active = false;
    if(props.activeProject){
        if(props.activeProject.id == props.project.id){
            active = true;
        }
    }
    return(
        <div className={active ? 'project-item-active' : 'project-item'} onClick={() => {props.setActive(props.project)}}>
            <h1>{props.project.getName()}</h1>
        </div>
    )
}

export default SidebarPart