import * as actionType from './patientDetailAction.js';

const initialState = {
    commentsList:[]
}

const patientDetailReducer = (state=initialState, action) =>{
    switch(action.type){
        case actionType.setCommentList:
            return {...state,commentsList: action.payload}
        default:
            return state
    }

}

export default patientDetailReducer;