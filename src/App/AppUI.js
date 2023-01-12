import React from 'react';
import { TodoContext } from '../TodoContex';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoItemLoad } from '../SkeletonComponents/TodoItemLoad';
import { SinTodos } from '../SkeletonComponents/SinTodos';
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI () {
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                    <TodoList>
                        {error && <p>Desespérate, hubo un error...</p>}
                        {loading && 
                        <React.Fragment>
                            <TodoItemLoad />
                            <TodoItemLoad />
                            <TodoItemLoad />
                        </React.Fragment>
                        }
                        {(!loading && !searchedTodos.length) && 
                        <SinTodos />
                        }
                        
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => toggleCompleteTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                            ))}
                    </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            </React.Fragment>
    );
}

export { AppUI };