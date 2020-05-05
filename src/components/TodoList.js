import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(task => (
                <Todo 
                    toggleComplete={props.toggleComplete} 
                    key={task.id} 
                    task={task} 
                />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;
