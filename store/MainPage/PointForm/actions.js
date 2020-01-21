import {getAllActualResults} from "../ResultTable/actions";

export const FORM_SUBMIT_ACTION = 'FORM_SUBMIT_ACTION';
export const CHANGE_SELECTED_X_ACTION = 'CHANGE_SELECTED_X_ACTION';
export const CHANGE_SELECTED_R_ACTION = 'CHANGE_SELECTED_R_ACTION';
export const CHANGE_SELECTED_Y_ACTION = 'CHANGE_SELECTED_Y_ACTION';



export const FormSubmitActionCreator = (x, y, r) => ({
    type: FORM_SUBMIT_ACTION,
    payload: {
        x, y, r
    }

});


export const ChangeSelectedXActionCreator = (newX) => ({
    type: CHANGE_SELECTED_X_ACTION,
    payload: {
        newX,
    }

});


export const ChangeSelectedYActionCreator = (newY) => ({
    type: CHANGE_SELECTED_Y_ACTION,
    payload: {
        newY,
    }

});




export const ChangeSelectedRActionCreator = (newR) => ({
    type: CHANGE_SELECTED_R_ACTION,
    payload: {
        newR,
    }

});


export const ChangeR = (newR) =>{
  return dispatch =>{

        dispatch(getAllActualResults(newR));
        dispatch(ChangeSelectedRActionCreator(newR));


  }


};

