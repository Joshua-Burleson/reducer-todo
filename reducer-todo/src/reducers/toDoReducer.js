import moment from 'moment';

export const initialState =  [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
        },
        {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
        }];

export const ToDoReducer = (currentState, action) => {
    switch(action.type){
        case 'ADD_TODO' :
                            const newItem = {task: action.payload, id: currentState[currentState.length - 1].id + 1, completed: false}
                            return [...currentState, newItem];

        case 'TOGGLE_COMPLETE' : 
                            const updatedItemIndex = currentState.findIndex(item => item.id === action.payload.id);
                            // Copy of state to prevent mutation
                            const updatedState = [...currentState];
                            const completedDate = updatedState[updatedItemIndex].completed ? null : moment().format('MMM Do YYYY [at] h:mm a');
                            updatedState[updatedItemIndex] = {...updatedState[updatedItemIndex], completed: !updatedState[updatedItemIndex].completed, completedOn: completedDate}
                            return updatedState;
        
        case 'CLEAR_COMPLETED' :
                            return currentState.filter(item => !item.completed);
        
        default : return currentState;
                          
    }
};