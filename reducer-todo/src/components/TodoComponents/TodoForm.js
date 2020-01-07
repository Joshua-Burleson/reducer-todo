import React, { useState, useReducer, useContext } from 'react';
import ToDoContext from '../../contexts/ToDoContext';

const ToDoForm = () =>{
    // State Management
    const [newItem, setNewItem] = useState('');
    const {state, dispatch} = useContext(ToDoContext);

    // Helpers
    const handleInputChange = event => setNewItem(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newItem});
        console.log(state);
        setNewItem('');
    }

        return(
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={e => handleInputChange(e)} type='text' placeholder="New Task" value={newItem}></input>
                <input type='submit'></input>
            </form>
            <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Delete Completed</button>
        </>
        );
}

export default ToDoForm;