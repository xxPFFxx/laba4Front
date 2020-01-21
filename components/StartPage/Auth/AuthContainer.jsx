import React from "react";
import {InputText} from "primereact/inputtext";
import Auth from "./Auth";
import {
    openSecondPageActionCreator,
    tryToLoginActionCreator,
    TryToLoginFunction
} from "../../../store/startPage/auth/actions";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";

class AuthContainer extends React.Component {


    render() {





        if(this.props.isAuthorized){

            window.location.assign('http://localhost:3000/main/');

        }
        return (

            <Auth fail={this.props.fail} success={this.props.success} isAuthorized={this.props.isAuthorized} openSecondPage={this.props.openSecondPage}
                  tryToLogin={this.props.tryToLogin}/>


        );
    }





}

const mapStateToProps = state => {

    return {

        login: state.store.login,
        isAuthorized:state.store.isAuthorized,
        password:state.store.password,
        fail:state.auth.fail,
        success:state.auth.success,

    }
};


const mapDispatchToProps = {

    tryToLogin: TryToLoginFunction,
    openSecondPage: openSecondPageActionCreator

};
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)







