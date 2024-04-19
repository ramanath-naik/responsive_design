import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

export default function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div style={{ fontWeight: 'bold', marginRight: '70px' }}>Todos</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center', margin: '8px',padding:'10px', backgroundColor: 'lightgreen', justifyContent: 'space-between' }}>
                        <div style={{ marginRight: '8px' }}>{todo.text}</div>
                        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
