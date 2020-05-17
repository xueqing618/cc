const listdefault={
  data:[]
}

export default function List (state = listdefault, action) {
  switch(action.type) {
    case "LIST":
      return {...state,data: action.payload.users }
    default:
      return state
  }
}
