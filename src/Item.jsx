import './App.css';
import React, { useContext } from 'react';
import { TodoContext } from './TodoStore';

const Item = ({ item }) => {

  const { dispatch } = useContext( TodoContext );

  const toggleStatus = e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_TODO', payload: item });
  }
  return(
    <div>
      <span 
        onClick={toggleStatus} 
        className={`${item.status}`}>{ item.title + '  ' }
      </span>
      <span> 
        <button 
          onClick={()=>dispatch({ type: 'DELETE_TODO', payload: item })}> 
            Remove
        </button>
      </span>
    </div>
  )
}

export default Item;