import React from 'react';
//this form manages its own state (i.e. our form will live within the TodoForm)

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    };

    render() {
        return (
            <form onSubmit={this.submitTodo} >
                <input
                    type='text'
                    value={this.state.todo}
                    name='todo'
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;