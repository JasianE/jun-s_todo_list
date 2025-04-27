export default function deleteTodo(arr, todo){
    let copy = [...arr]
    console.log(copy)
    let newCopy = []
    for(let i = 0; i < copy.length; i++){
        if(copy[i].id !== todo.id){
            newCopy.push(copy[i])
        }
    }
    return newCopy;
}