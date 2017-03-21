import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewComponent from './components/view/view'

class App extends Component {
  constructor(){
    super();
    this.state = {
      newTodo : '',
      allTodos:[]
    }
  }
   addTodo(){
        console.log(this.state.newTodo);
        const todolist = this.state.allTodos;
        todolist.push(
          {
            task:this.state.newTodo,
            completed:false,
            createdAt:new Date().getTime()
          }
        );
        console.log(this.state.allTodos);
    }
    ChangeVal(ev){
        this.setState({newTodo:ev.target.value});
    }
    getTodos(){
      return this.state.allTodos;
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List</h2>
        </div>
        
         <div>
            <h2>Enter your Todo's here</h2>
            <div className="input-group col-md-3 col-xs-6 mar">
                <input type="text" value={this.newTodo} onChange={this.ChangeVal.bind(this)} className="form-control" placeholder="todos.." />
                <button onClick={this.addTodo.bind(this)} className="btn btn-danger" type="button">Add</button>
            </div>
        </div>
        <hr />
        <ViewComponent todolist={this.getTodos()}/>
      </div>
    );
  }
}

export default App;
