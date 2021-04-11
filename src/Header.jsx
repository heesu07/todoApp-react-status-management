import React, {useContext} from 'react';
import { TodoContext } from './TodoStore';


const Header = () => {
  const { list } = useContext( TodoContext );
  return (
  <>
    <h1> Todo App</h1>
    { list.filter(t=>t.status==='todo').length > 0 ? 
      `${list.filter(t=>t.status==='todo').length} item need to be done.`
      : `There is nothing to do.`
    }
  </>
  )
}

export default Header;