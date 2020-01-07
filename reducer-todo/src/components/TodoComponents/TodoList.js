import React, {useContext} from 'react';
import ToDoContext from '../../contexts/ToDoContext';

// Components
import ToDo from './Todo';
import ToDoForm from './TodoForm';

const ToDoList = () =>{
    const {state} = useContext(ToDoContext);
    return(
        <>
        {state.map(item => <ToDo key={item.id} item={item} />)}
        <ToDoForm />
        </>
    )
}

export default ToDoList;