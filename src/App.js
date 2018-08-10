import React, { Component } from 'react';
import Form from "./components/Form";
import List from "./components/List";
import './App.css';

class App extends Component {

  state = {
    todo: {
      value: "",
      completed: false,
    },
    todos: [],
    errorMessage: "",
  }

  setValue = (e) => {
    const todo = {
      value: e.target.value,
      completed: false,
    };
    this.setState({ todo });
  }

  addToDo = (e) => {
    e.preventDefault();
    const todo = this.state.todo;
    const todos = [...this.state.todos];
    const index = todos.findIndex(t => t.value === todo.value);
    if (index === -1) {
      todos.push(todo);
      this.setState({
        todo: {
          value: "",
          completed: false,
        },
        todos: todos,
        errorMessage: "",
      });
    } else { 
      this.setState({ errorMessage: "Error: Cannot add duplicate" }, () => {
        setTimeout(() => {
          this.setState({ errorMessage: "" });
        }, 5000);
      });
    }

  }

  markCompleted = (todoValue) => {
    const index = this.state.todos.findIndex(todo => todo.value === todoValue);
    const todo = { ...this.state.todos[index] };
    todo.completed = true;
    const todos = [...this.state.todos];
    todos[index] = todo;
    this.setState({ todos });
  }

  
  render() {
    return (
      <div className="App">
        <Form 
          addToDo={this.addToDo}
          setValue={this.setValue}
          value={this.state.todo.value}
          errorMessage={this.state.errorMessage}
        />

        <List
          todos={this.state.todos}
          markCompleted={this.markCompleted}
        />
      </div>
    );
  }
}



export default App;
