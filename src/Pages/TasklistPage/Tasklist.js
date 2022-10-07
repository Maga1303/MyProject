import React, {useState} from "react";
import ToDo from '../../Components/ToDo/ToDo';
import ToDoForm from '../../Components/ToDo/ToDoForm';
import './Tasklist.css';

const List = () => {
    const [todos, setTodos] = useState([]);
    const addTask = (userInput)=>{
        if(userInput){
            const newItem = {
                task:Math.random().toString().substr(2,9),
                id:userInput,
                complete:false
            }
            setTodos([...todos, newItem])
           console.log(newItem);
        }
    }
    const removeTask = (id)=>{
        setTodos([...todos.filter((todo)=>todo.id !== id)])
    }
    const handleToggle = (id)=>{
        setTodos([
            ...todos.map((todo)=>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo} 
            )
        ])
    }
    return(
        <div>
            <header>
                <h1>Task List:{todos.length} </h1>
            </header>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo)=>{
                return(
                    <ToDo 
                    todo={todo} 
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
            })}
        </div>
    )
}

export default List;