import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

//Standard Setup
const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;
