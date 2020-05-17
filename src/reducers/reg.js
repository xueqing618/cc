const defaultState={
  data:[]
}

export default function(state=defaultState,action){
  switch(action.type){
    case 'REG':
      return {...state,data:action.payload}

    default :
    return state
  }
}