import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state= {
            keyword: '',
        };
    }

    handleChanges = e => {
        this.setState({
            keyword: e.target.value,
        })
    };

    submitForm = e => {
        e.preventDefault();
        this.props.addTask(this.state.keyword);
        this.setState({
            keyword: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    value={this.state.keyword}
                    type='text'
                    name='keyword'
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;