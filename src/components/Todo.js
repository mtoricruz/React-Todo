import React from 'react';

const Todo = props => {
    return (
        <div className={`task${props.task.completed ? 'completed' : ''}`}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo