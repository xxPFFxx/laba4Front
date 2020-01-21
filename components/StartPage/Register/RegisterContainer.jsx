import React from "react";
import Register from "./Register";
import {connect} from "react-redux"
import {tryToRegisterActionCreator, TryToRegisterFunction} from "../../../store/startPage/register/actions";
import {openSecondPageActionCreator} from "../../../store/startPage/auth/actions";

class RegisterContainer extends React.Component {


    render() {

        return (

            <Register fail={this.props.fail} repeatPasswordWrong={this.props.repeatPasswordWrong} success={this.props.success} openSecondPage={this.props.openSecondPage} tryToRegister={this.props.tryToRegister}/>


        );
    }
}

const mapStateToProps = state => {

    return {

        login: state.store.login,
        isAuthorized:state.store.isAuthorized,
        password:state.store.password,
        fail:state.register.fail,
        success:state.register.success,
        repeatPasswordWrong:state.register.repeatPasswordWrong,


    }
};


const mapDispatchToProps = {

    tryToRegister: TryToRegisterFunction,
    openSecondPage: openSecondPageActionCreator

};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)







