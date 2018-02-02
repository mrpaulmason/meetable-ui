export function postRefAndPhoneNumber(ref, phoneNumber) {
  let payload = {
    phone_number: phoneNumber
  };

  let data = JSON.stringify(payload)

  return (dispatch) => {
    return fetch(`https://meetable-api.herokuapp.com/meetings/${ref}/accept`, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'POST_RESULTS', payload: res })
    })
  }
}

export function setRef(ref) {
  return (dispatch) => {
    dispatch({type: 'SET_REF', payload: ref})
  }
}

export function setPhoneNumber(phoneNumber) {
  return (dispatch) => {
    dispatch({type: 'SET_PHONE_NUMBER', payload: phoneNumber})
  }
}

export function signup(email, survey) {
  let payload = {
    email: email,
    survey: {
      "How much of your texting is about meeting up?": survey
    }
  }

  let data = JSON.stringify(payload)

  return (dispatch) => {
    return fetch("https://meetable-api.herokuapp.com/waitlist", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(res => res.json())
    .then(res => {
      alert(res.message)
      dispatch({type: 'SIGNUP_POST_RESPNSE', payload: res})
    })
  }
}

export function addPlaces() {
  return (dispatch) => {
    return fetch(`https://meetable-api.herokuapp.com/meetings/e20430/locations?category=coffee`)
    .then(res => res.json())
    .then(res => {
      dispatch({type: 'ADD_PLACES', payload: res.locations})
    })
  }
}
