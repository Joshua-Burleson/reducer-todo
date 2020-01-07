import React, { useContext } from 'react';
import ToDoContext from '../../contexts/ToDoContext';

// Styles
import Pending from '../Styles/Pending';
import Completed from '../Styles/Completed';

const ToDo = (props) => {
    const { dispatch } = useContext(ToDoContext);

    const ItemContent = <span onClick={() => dispatch({type: 'TOGGLE_COMPLETE', payload: {id: props.item.id}})}>
                            {props.item.task}
                        </span>;
    return (
        <>
        {props.item.completed ? <Completed>{ItemContent}</Completed> : <Pending>{ItemContent}</Pending>}
        {props.item.completed && <p>{`Completed on ${props.item.completedOn}`}</p>}
        </>
    );
};

export default ToDo;