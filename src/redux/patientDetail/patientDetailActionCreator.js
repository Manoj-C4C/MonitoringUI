import * as action from './patientDetailAction.js';


const setCommentList = (list) =>{
    return {
        type: action.setCommentList,
        payload: list
    }
}

export default setCommentList