import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    return (
        <div className="toDoList">
            {props.todo.map(todo => (
                <Todo toggle={props.toggle} key={todo.id} todo={todo}/>
            ))}
            <button className="clear-btn" onClick={props.removeCompleted}>Remove Task</button>
        </div>
    )
}

export default TodoList;




// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
