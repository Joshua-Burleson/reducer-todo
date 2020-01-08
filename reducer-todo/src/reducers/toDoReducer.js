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
                            console.log('New Item: ', newItem, '...', [...currentState, newItem]);
                            return [...currentState, newItem];

        case 'TOGGLE_COMPLETE' : 
                            const updatedItem = currentState.findIndex(item => item.id === action.payload.id);
                            const updatedState = [...currentState];
                            const completedDate = updatedState[updatedItem].completed ? null : moment().format('MMM Do YYYY [at] h:mm a');
                            updatedState[updatedItem] = {...updatedState[updatedItem], completed: !updatedState[updatedItem].completed, completedOn: completedDate}
                            return updatedState;
        
        case 'CLEAR_COMPLETED' :
                            console.log(currentState.filter(item => !item.completed));
                            return currentState.filter(item => !item.completed);
                          
    }
};