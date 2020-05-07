import * as action from './patientListAction.js';

const patientList = (response) =>{
    return {
        type: action.storePatientList,
        payload:{list:response, count: response.length}
    }
}

export default patientList;
