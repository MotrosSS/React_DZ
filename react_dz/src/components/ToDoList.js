import React from 'react'
import './css/toDoList.css'




function TodoItem(props) {

    return (
        <div className="task">
            <label>
                <input className="checkbox"
                    type="checkBox" defaultChecked={props.info.completed === true ? true : false}/>

                <span className="text">
                    {props.info.text}
                </span>
            </label>
        </div>
    );
}


export default TodoItem; 
