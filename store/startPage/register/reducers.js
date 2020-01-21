import {
    REGISTRATION_ACTION_REGISTER,
    REGISTRATION_FAIL_ACTION_REGISTER, REGISTRATION_RepeatPasswordWrong_ACTION_REGISTER,
    REGISTRATION_SUCCESS_ACTION_REGISTER
} from "./actions"
import {LOG_OUT_ACTION} from "../auth/actions";


const defaultState = {
    fail: false,
    repeatPasswordWrong:false,
    success: false,
};


export const registerReducer = (state = defaultState, action) => {


    switch (action.type) {
        case REGISTRATION_ACTION_REGISTER:
            const {password, login, repeatpassword} = action.payload;

            break;

        case REGISTRATION_SUCCESS_ACTION_REGISTER: {

            const {login, password} = action.payload;
            return {
                ...state,
                fail: false,
                success: true,
                repeatPasswordWrong:false,
            };

        }
        case REGISTRATION_FAIL_ACTION_REGISTER: {
            return {
                ...state,
                fail: true,
                success: false,
                repeatPasswordWrong:false,
            };


        }
        case LOG_OUT_ACTION: {

            return {
                ...state,
                fail: false,
                success: false,

            };

        }
        case REGISTRATION_RepeatPasswordWrong_ACTION_REGISTER:{

            return {
                ...state,
                fail: false,
                repeatPasswordWrong:true,
                success: false,

            };

        }
    }

    return state;


};
