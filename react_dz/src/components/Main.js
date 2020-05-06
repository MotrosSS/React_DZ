import React from 'react';
import TodoList from './TodoList';
import Authorization from './Authorization'

function Main() {
    return (
        <div>
            <Authorization />
            <TodoList />
        </div>
    )
}

export default Main;