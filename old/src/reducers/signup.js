const signup = (state = {
  signupPostResponse: ''
}, action) => {
  switch (action.type) {
    case "SIGNUP_POST_RESPNSE":
      return {...state, signupPostResponse: action.payload}
    default: return state
  }
}

export default signup
