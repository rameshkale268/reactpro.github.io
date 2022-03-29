import React from 'react';
import './index.css';
const ToDoComponent = (props) => {
   
    return (
        <>
            <div className='todo_style'>
                 
                <li>{props.text} </li><i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id) }}/>
            </div>   
        </>);
}
export default ToDoComponent;