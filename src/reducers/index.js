import { combineReducers } from 'redux';
import user from './user';

const meetableApp = combineReducers({
  user: user
})

export default meetableApp
