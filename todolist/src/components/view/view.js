import React, {Component} from 'react';
import './view.css';


class ViewComponent extends Component{
   showList(){
       return (
            this.props.todolist.map((item,ind)=>{
                return (
                        <li className="ui-state-default">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" />item.task</label>
                                        <a href='#' className='close' aria-hidden='true'>&times;</a>
                                </div>
                                <hr />
                        </li>
                )
            })
       )
   }
render(){
    return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                      <ul id="sortable" className="list-unstyled">
                        {this.showList()}
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
    )   
}
}

export default ViewComponent;