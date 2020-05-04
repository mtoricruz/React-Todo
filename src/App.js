import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Get Groceries',
    id: 1232,
    completed: false
  },
  {
    task: 'Clean House',
    id: 1233,
    completed: false
  },
  {
    task: 'Go to Sleep',
    id: 1234,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks
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

  

  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
