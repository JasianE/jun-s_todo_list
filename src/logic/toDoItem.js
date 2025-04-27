
function createTodoItem(title, description, priority){
    let done = false;
    let id = crypto.randomUUID()
    function checkFinished(){
        if(done == false){
            done = true
        } else {
            done = false;
        }
    }
    function checkStatus(){
        return done;
    }

    return (
        {
            title,
            description,
            priority,
            checkFinished,
            checkStatus,
            id
        }
    )
}

export default createTodoItem