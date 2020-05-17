
const defaultState={
  data:[],
  count:0,
  
}

export default function(state=defaultState,action){
  switch(action.type){
    
    case 'HOME_NAME':
      console.log(action)
        return {...state,
          data:action.payload.result.list,
          count:action.payload.result.count,
        }
    default:
        return state    
}
}