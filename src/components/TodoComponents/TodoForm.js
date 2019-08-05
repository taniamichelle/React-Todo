import React from 'react';
//this form manages its own state (i.e. our form will live within the TodoForm)

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

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