

export default function ToDo({todo, toggleTask, removeTask}){
    return(
        <div key={todo.id}>
            <div onClick={()=>toggleTask(todo.id)}>
                {todo.id}
            </div>
            <div onClick={()=> removeTask(todo.id)}>
                x
            </div>
        </div>
    )
}