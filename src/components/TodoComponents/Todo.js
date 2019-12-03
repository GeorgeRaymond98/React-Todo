import React from "react";

const Todo = props =>  {
    return (
        <div style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' , textDecorationColor: props.todo.completed ? 'red': 'none'}}onClick={()=> {props.toggle(props.todo.id)}}>
            {props.todo.task}
        </div>
    )
}

export default Todo;