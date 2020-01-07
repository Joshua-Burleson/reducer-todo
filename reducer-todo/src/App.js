import React, {useReducer} from 'react';
import './App.css';
import ToDoList from './components/TodoComponents/TodoList';

import ToDoContext from './contexts/ToDoContext';
import { ToDoReducer, initialState } from './reducers/toDoReducer'

function App() {
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    <ToDoContext.Provider value={{state, dispatch}} >
    <div className="App">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
    </ToDoContext.Provider>
  );
}

export default App;
