const user = (state = {
  ref: '',
  phoneNumber: '',
  postResults: {}
}, action) => {
  switch (action.type) {
    case 'POST_RESULTS':
      return {...state, postResults: action.payload}
    default: return state
  }
}

export default user
