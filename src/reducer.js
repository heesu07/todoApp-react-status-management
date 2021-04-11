

const todoReducer = (list, {type, payload}) =>{
  switch(type){
    case 'ADD_TODO':
      console.log(`add todo: ${payload}`);
      return [...list, {id:Date.now(), title: payload ,status: 'todo'}];
      
    case 'DELETE_TODO':
      console.log(`delete todo: ${payload.title}`);
      return list.filter(item => item.id !== payload.id );

    case 'UPDATE_TODO':
      let newlist = list.map(item =>{
        if( item.id === payload.id){
          if(item.status === 'todo'){
            return {...item, status:'done'} ;
          }
          return {...item, status: 'todo'} ;     
        }        
        return item;
      });
      console.log(newlist);
      return newlist;      

    case 'SET_INIT_DATA':
      return payload;

    default:
      break;   
  }
}

export default todoReducer;