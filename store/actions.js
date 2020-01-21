import {LogOutActionCreator, NotSuccessLoginActionCreator, SuccessLoginActionCreator} from "./startPage/auth/actions";

export const CHECK_AUTH_SUCCESS_ACTION = 'CHECK_AUTH_SUCCESS_ACTION';
export const CHECK_AUTH_FAIL_ACTION = 'CHECK_AUTH_FAIL_ACTION';



export const CheckAuthSuccessActionCreator =()=>{

    return  {
        type: CHECK_AUTH_SUCCESS_ACTION,
        payload:{

        }

    }
};


export const CheckAuthFailActionCreator =()=>{

    return  {
        type: CHECK_AUTH_FAIL_ACTION,
        payload:{

        }

    }
};



export const LogOut =()=>{
    console.log("LogOut");
    return dispatch => {



        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');



        fetch("http://localhost:8080/user/logOut", {
            method: 'GET',
            credentials: "include",
            headers: headers,



        })
            .then(response => response.json())
            .then(
                data => {
                    console.log("LogOut");
                    dispatch(LogOutActionCreator())

                });



    }
};


export const CheckIsAuthorized =(login)=> {
    return dispatch => {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');

        let body = {
            login: login,
                  };


        fetch("http://localhost:8080/user/tryLogin", {
            method: 'POST',
            credentials: "include",
            headers: headers,
            body: JSON.stringify(body)


        })
            .then(response => response.json())
            .then(
                data => {


                    if (!data.isAuthorized) {

                        dispatch(CheckAuthFailActionCreator());


                    } else {

                        dispatch(CheckAuthSuccessActionCreator());
                    }

                },

                (error) => {
                    console.log(error)
                }
            );

    }
};

