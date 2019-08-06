import React from 'react';

const Todo = props => {
    return (
        <div
            className={`task${props.todo.completed ? ' completed' : ''}`}
            onClick={() => props.toggleTodo(props.todo.id)}
        >
            {console.log(`has ${props.todo.task} task been completed?`, props.todo.completed)} 
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;