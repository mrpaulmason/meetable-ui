export function postRefAndPhoneNumber(ref, phoneNumber) {
  var payload = {
    ref: ref,
    phone_number: phoneNumber
  };

  var data = new FormData();
  data.append( "json", JSON.stringify( payload ) );

  return (dispatch) => {
    return fetch('https://meetable-api.herokuapp.com/sms/accept', {
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'POST_RESULTS', payload: res })
    })
  }
}

export function setRef(ref) {
  return dispatch(action: 'SET_REF', payload: ref)
}
