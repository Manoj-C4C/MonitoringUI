
import * as actionType from './patientListAction.js';

const initialState = {
    patientsList: [],
    patientsCount: 0
}

const patientListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.storePatientList:
            return { ...state, patientsList: action.payload.list, patientsCount: action.payload.count }
        default:
            return state
    }

}

export default patientListReducer;