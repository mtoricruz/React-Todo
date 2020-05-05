import React from 'react';
import './Todo.css';


const Todo = props => {
    return (
        <div 
            key={props.task.id}
            onClick={() => props.toggleComplete(props.task.id)}
            className={`task ${props.task.completed ? 'completed' : ''}`}
            >
            <p>{props.task.name}</p>
        </div>
    );
};

export default Todo