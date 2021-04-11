import React, { useContext } from 'react';
import Item from './Item.jsx';
import {TodoContext} from './TodoStore';

const List = () => {
  const {list, loading} = useContext(TodoContext);
  
  return(
    <ul>
      {
        loading ? (<h3>Loading ...</h3> ):
        list && list.map(item => {
          return(            
            <Item
              key={item.id} 
               item={item}
               
            />
          )
        })
      }
    </ul>
  )
}
export default List;