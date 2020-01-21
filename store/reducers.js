import {combineReducers} from "redux";
import { authReducer } from "./startPage/auth/reducers";
import {registerReducer} from "./startPage/register/reducers";
import {areaCanvasReducer} from "./MainPage/AreaCanvas/reducers";
import {CHECK_AUTH_FAIL_ACTION, CHECK_AUTH_SUCCESS_ACTION} from "./actions";
import {
    AUTH_ACTION_LOG_IN,
    LOG_OUT_ACTION,
    NOT_SUCCESS_AUTH_ACTION_LOG_IN,
    SUCCESS_AUTH_ACTION_LOG_IN
} from "./startPage/auth/actions";
import {REGISTRATION_FAIL_ACTION_REGISTER, REGISTRATION_SUCCESS_ACTION_REGISTER} from "./startPage/register/actions";
import {mainPageReducer} from "./MainPage/reducers";
import {DELETE_POINT_ACTION} from "./MainPage/ResultTable/actions";
import {pointFormReducer} from "./MainPage/PointForm/reducers";



const defaultState = {
    login: '',
    password: '',
    isAuthorized: false,
    tryingToLogin: false,
};


export const mainReducer = (state = defaultState, action) => {


    switch (action.type) {
        case CHECK_AUTH_SUCCESS_ACTION: {

        return{
            ...state,
            isAuthorized: true
        }
        }
        case CHECK_AUTH_FAIL_ACTION: {

        return{
            ...state,
            isAuthorized: false
        }
        }
        case SUCCESS_AUTH_ACTION_LOG_IN: {
            const {login, password} = action.payload;

            return {
                ...state,
                login: login,
                password: password,
                isAuthorized: true,
                tryingToLogin: false,
            };
        }
        case NOT_SUCCESS_AUTH_ACTION_LOG_IN: {
            const {login, password} = action.payload;
            return {
                ...state,
                login: login,
                password: password,
                isAuthorized: false,
                tryingToLogin: false
            };
        }
        case AUTH_ACTION_LOG_IN:{
            const {login, password} = action.payload;
            return {
                ...state,
                login: login,
                password: password,
                isAuthorized: false,
                tryingToLogin: true
            };

        }
        case LOG_OUT_ACTION:{

            return {
                ...state,
                login: "",
                password: "",
                isAuthorized: false,
                tryingToLogin: false
            };


        }
        case REGISTRATION_SUCCESS_ACTION_REGISTER:{

            const {login, password} = action.payload;
            return {
                ...state,
                login: login,
                password: password,
                isAuthorized: true,
            };

        }
        case REGISTRATION_FAIL_ACTION_REGISTER:{
            return {
                ...state,
                login: "",
                password:  "",
                isAuthorized: false,
            };


        }




    }
    return state
};

export default combineReducers({
    auth: authReducer,
    register: registerReducer,
    canvas: areaCanvasReducer,
    store: mainReducer,
    mainPage:mainPageReducer,
    form:pointFormReducer,

});
