import React, { Component } from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newToDo: ""
        };
    }
    
    handleChanges = event => {
        this.setState({newToDo: event.target.value});
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.addToDo(this.state.newToDo);
        this.setState({
            newToDo: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.newToDo}
                onChange={this.handleChanges}
                type="text"
                name="todo"
                />
                <button>Add</button>
            </form>
        );
    }
}
export default TodoForm;
