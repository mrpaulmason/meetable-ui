export function postRefAndPhoneNumber(ref, phoneNumber) {
  let payload = {
    phone_number: phoneNumber
  };

  let data = JSON.stringify(payload)

  return (dispatch) => {
    return fetch(`https://meetable-api.herokuapp.com/meetings/REF/accept?ref=${ref}`, {
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
