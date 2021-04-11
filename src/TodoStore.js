import './App.css';
import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch';
import todoReducer from './reducer.js';

export const TodoContext = React.createContext();

function TodoStore( props ) {

  //const [list, setList] = useState([]);
  const [list, dispatch] = useReducer(todoReducer, [] );

  const setInitData = ( initData) =>{
    dispatch({type:'SET_INIT_DATA', payload: initData})
  }

  const url = 'http://localhost:8080/todo';
  const loading = useFetch( setInitData, url );

  useEffect( () =>{
    console.log('render app');
  }, [list]);

  return (
    <div className='app'>
      <TodoContext.Provider value={{ list, loading, dispatch }}>
         { props.children }       
      </TodoContext.Provider>
    </div>
  );
}

export default TodoStore;
