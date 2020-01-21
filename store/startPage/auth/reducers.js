import {
    AUTH_ACTION_LOG_IN, LOG_OUT_ACTION,
    NOT_SUCCESS_AUTH_ACTION_LOG_IN,
    OPEN_SECOND_PAGE_ACTION,
    SUCCESS_AUTH_ACTION_LOG_IN
} from "./actions";
import {push} from "react-router-redux";

const defaultState = {
    fail:false,
    success:false,
};


export const authReducer = (state = defaultState, action) => {


    switch (action.type) {
        case SUCCESS_AUTH_ACTION_LOG_IN: {
            const {login, password} = action.payload;

            return {
                ...state,
                success: true,
                fail:false,
            };
        }
        case NOT_SUCCESS_AUTH_ACTION_LOG_IN: {
            const {login, password} = action.payload;
            return {
                ...state,
                success: false,
                fail:true,
            };
        }
        case LOG_OUT_ACTION:{

            return {
                ...state,
                fail:false,
                success:false,

            };


        }

    }

    return state;


};