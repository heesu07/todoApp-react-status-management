import React, { useRef, useContext } from 'react';
import {TodoContext} from './TodoStore';


const Form = () => {
  const inputRef = useRef();
  const {dispatch} = useContext(TodoContext);

  const addHandle = event => {
    event.preventDefault();
    const title = inputRef.current.value;
    if(title ==='') return;    
    dispatch({ type: 'ADD_TODO', payload: title});
    inputRef.current.value='';
    inputRef.current.focus();
  }

  return(
    <form action="">
      <input ref={inputRef} type="text"  />
      <button onClick={(e)=>addHandle(e)}>할일 추가</button>
    </form>
  )
}

export default Form;