export const AUTH_ACTION_LOG_IN = 'AUTH_ACTION_LOG_IN';
export const SUCCESS_AUTH_ACTION_LOG_IN = 'SUCCESS_AUTH_ACTION_LOG_IN';
export const NOT_SUCCESS_AUTH_ACTION_LOG_IN = 'NOT_SUCCESS_AUTH_ACTION_LOG_IN';
export const OPEN_SECOND_PAGE_ACTION = 'OPEN_SECOND_PAGE_ACTION';
export const LOG_OUT_ACTION = 'LOG_OUT_ACTION';



export const tryToLoginActionCreator =(login, password)=>{



   return  {
        type: AUTH_ACTION_LOG_IN,
        payload:{
            login,password
        }

    }
};

export const SuccessLoginActionCreator =(login, password)=>{

   return  {
        type: SUCCESS_AUTH_ACTION_LOG_IN,
        payload:{
            login,password
        }

    }
};


export const NotSuccessLoginActionCreator =(login, password)=>{

   return  {
        type: NOT_SUCCESS_AUTH_ACTION_LOG_IN,
        payload:{
            login,password
        }

    }
};
export const LogOutActionCreator =()=>{

   return  {
        type: LOG_OUT_ACTION,
        payload:{

        }

    }
};



export const openSecondPageActionCreator =()=>({
    type: OPEN_SECOND_PAGE_ACTION,
    payload:{

            }

});



export const TryToLoginFunction=(login, password)=>{

    return dispatch => {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');

        let body = {
            login: login,
            password: password,
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


                    if (!data.success) {

                        dispatch(NotSuccessLoginActionCreator(login,password));
                        //THERE ISNT LOGIN

                    } else {

                        //THERE IS LOGIN

                        dispatch(SuccessLoginActionCreator(login,password))
                    }

                },

                (error) => {
                    console.log(error)
                }
            );

    }




};


