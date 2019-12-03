import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"
import "./components/TodoComponents/Todo.css"; 
const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

 toggle= (id) => {
   const toggledObj = this.state.todo.find(event => {
     return event.id === id
   })
   toggledObj.completed  = !toggledObj.completed;
   this.setState({
     todo:[...this.state.todo]
   })
 }

 removeCompleted = () => {
  const notCompleted = this.state.todo.filter(event => {
    return event.completed === false
  })
  this.setState({
    todo: notCompleted
  })
 }

  addToDo = newToDoText => {
    const newToDo = {
      task: newToDoText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo:[...this.state.todo, newToDo]
    })
  }

  render() {
    console.log("rendering...");
    console.log(this.state.todo);
    return(
    <div className="App">
    <div className="header">
      <h1>Note List</h1>
      <TodoForm addToDo={this.addToDo} />
    </div>
    <TodoList removeCompleted={this.removeCompleted} toggle={this.toggle} todo={this.state.todo} />
  </div>
    );
  }
}

export default App;
