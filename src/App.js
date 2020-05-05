import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

// render bug fix: before my task keys were task/id/completed but my addTask function had name/id/completed. So my original tasks wouldn't render because Todo would comp would render the added tasks with the proper key. If something doesn't render on DOM check naming uniform between files*****

const tasks = [
  {
    name: 'Get Groceries',
    id: 1232,
    completed: false
  },
  {
    name: 'Clean House',
    id: 1233,
    completed: false
  },
  {
    name: 'Go to Sleep',
    id: 1234,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks,
    }
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    // const clearTask = tasks.filter((task) => {
    //   if (task.completed === true) {
    //     return {
          
    //     }
    //   } else {
    //     return task;
    //   }
    // })
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => {
          return !task.completed;
        })
      }
    })
  }

  toggleComplete = clickedId => {
    // no mutating the current state
    // for every array and every object - create a new one (via array methods)
    const newTaskList = this.state.tasks.map((task) => {
      // loop through array
      // find the item we clicked (id)
      // toggle that item's purchased property
      if (task.id === clickedId) {
        // toggle complete
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task;
      }
    });
    this.setState({
      tasks: newTaskList
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          tasks={this.state.tasks} 
          clearCompleted={this.clearCompleted}
          toggleComplete={this.toggleComplete} 
        />
      </div>
    );
  }
}

export default App;
