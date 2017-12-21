import { combineReducers } from 'redux';
import user from './user';
import signup from './signup'

const meetableApp = combineReducers({
  user: user,
  signup: signup
})

export default meetableApp
