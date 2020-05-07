import {combineReducers} from 'redux';
import patientDetailReducer from './patientDetail/patientDetailReducer.js';
import patientListReducer from './patientList/patientListReducer.js';

const rootReducer = combineReducers({
    patientDetail: patientDetailReducer,
    patientList: patientListReducer
    
})

export default rootReducer;