const map = ( state = {
  places: []
}, action) => {
  switch (action.type) {
    case "ADD_PLACES":
      return {...state, places: action.payload}
    default: return state;
  }
}

export default map
