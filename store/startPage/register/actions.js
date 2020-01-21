export const REGISTRATION_ACTION_REGISTER = 'REGISTRATION_ACTION_REGISTER';
export const REGISTRATION_SUCCESS_ACTION_REGISTER = 'REGISTRATION_SUCCESS_ACTION_REGISTER';
export const REGISTRATION_FAIL_ACTION_REGISTER = 'REGISTRATION_FAIL_ACTION_REGISTER';
export const REGISTRATION_RepeatPasswordWrong_ACTION_REGISTER = 'REGISTRATION_RepeatPasswordWrong_ACTION_REGISTER';


export const tryToRegisterActionCreator = (login, password, repeatpassword) => ({
    type: REGISTRATION_ACTION_REGISTER,
    payload: {
        login, password, repeatpassword
    }

});

export const RegisterSuccessActionCreator = (login, password) => ({
    type: REGISTRATION_SUCCESS_ACTION_REGISTER,
    payload: {
        login, password
    }

});

export const RegisterFailActionCreator = (login, password) => ({
    type: REGISTRATION_FAIL_ACTION_REGISTER,
    payload: {
        login, password
    }

});

export const RegisterRepeatPasswordWrongActionCreator = (login, password) => ({
    type: REGISTRATION_RepeatPasswordWrong_ACTION_REGISTER,
    payload: {
        login, password
    }

});


export const TryToRegisterFunction = (login, password, repeatpassword) => {

    return dispatch => {

        if(repeatpassword===password  && login!='' && repeatpassword!='' && password!=''){

            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');

            headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            headers.append('Access-Control-Allow-Credentials', 'true');

            let body = {
                login: login,
                password: password,
            };


            fetch("http://localhost:8080/user/tryRegister", {
                method: 'POST',
                credentials: "include",
                headers: headers,
                body: JSON.stringify(body)


            })
                .then(response =>


                    response.json()

                )
                .then(
                    data => {


                        if (data.success) {


                            dispatch(RegisterSuccessActionCreator(login,password));
                            return;

                        }
                        else {



                            dispatch(RegisterFailActionCreator(login,password));
                            return;
                        }

                    },

                    (error) => {
                        console.log(error)
                    }
                );



        }
        else {

            dispatch(RegisterRepeatPasswordWrongActionCreator(login,password));
            return;
        }


    }

};



