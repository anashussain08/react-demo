import React, {Component} from 'react';
import './input.css';


class InputComponent extends Component{
    addTodo(){
        console.log('todo added!');
    }
render(){
    return (
    <div>
        <h2>Enter your Todo's here</h2>
       <div className="input-group col-md-3 col-xs-6">
            <input type="text" className="form-control" placeholder="todos.." />
            <button onClick={this.addTodo} className="btn btn-danger" type="button">Add</button>
        </div>
    </div>
    )
}
}

export default InputComponent;