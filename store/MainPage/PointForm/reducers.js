import {
    CHANGE_SELECTED_R_ACTION,
    CHANGE_SELECTED_X_ACTION,
    CHANGE_SELECTED_Y_ACTION,
    FORM_SUBMIT_ACTION
} from "./actions";
import {INVALID_DATA_ACTION} from "../actions";

const defaultState = {
    selectedX: 0,
    selectedY: 0,
    reason:""
};


export const pointFormReducer = (state = defaultState, action) => {


    switch (action.type) {
        case FORM_SUBMIT_ACTION:
            const {x, y, r} = action.payload;



            return {
                ...state,
                isAuthorized: false,
                // actualResults: state.actualResults.add(newactualresult)
            };
        case CHANGE_SELECTED_X_ACTION:
            const {newX} = action.payload;
            return {
                ...state,
                selectedX: newX,
            };
        case CHANGE_SELECTED_Y_ACTION:
            const {newY} = action.payload;
            return {
                ...state,
                selectedY: newY,
            };

        case INVALID_DATA_ACTION:

            const {reason} = action.payload;
            return {
                ...state,
                reason: reason,
            };
        default:
            return {
                ...state,
                reason: "",
            };
    }

    return state;


};


const check=(x,y,r)=>{

    //TODO check
    return true;


};