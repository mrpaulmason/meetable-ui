const user = (state = {
  ref: '',
  phoneNumber: '',
  postResults: ''
}, action) => {
  switch (action.type) {
    case 'SET_REF':
      return {...state, ref: action.payload}
    case 'SET_PHONE_NUMBER':
      return {...state, phoneNumber: action.payload}
    case 'POST_RESULTS':
      if (action.payload === undefined) {
        return {...state, postResults: 'invalid code'}
      } else {
        return {...state, postResults: action.payload.message}
      }
    default: return state
  }
}

export default user
