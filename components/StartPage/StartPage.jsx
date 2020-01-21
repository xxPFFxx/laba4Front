import React from "react";
import AuthContainer from "./Auth/AuthContainer";
import RegisterContainer from "./Register/RegisterContainer";
import "./StartPage.css"
import ToMainPageButton from "../TempButtons/ToMainPageButton";
import Header from "../Header";


export default class StartPage extends React.Component {

    componentWillMount() {
        if(this.props.isAuthorized){

            window.location.assign('http://localhost:3000/main/');

        }
    }
    render() {
        return (
            <div className="StartPage">

                <Header/>

                {/*<ToMainPageButton/>*/}

                <div className="Startmainflex">

                    {/*<MyComponent/>*/}
                    <AuthContainer/>
                    <hr/>
                    <RegisterContainer/>

                </div>
            </div>
        )

    }

}