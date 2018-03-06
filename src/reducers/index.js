import { combineReducers } from 'redux';
import user from './user';
import signup from './signup'
import map from './map'

const meetableApp = combineReducers({
  user: user,
  signup: signup,
  map: map
})

export default meetableApp
