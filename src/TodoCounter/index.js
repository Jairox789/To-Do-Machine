import React from 'react';
import { TodoContext } from '../TodoContex';
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <div className='TodoCounter'>
        <h1>To Do List</h1>
        <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    );
}

export {TodoCounter};