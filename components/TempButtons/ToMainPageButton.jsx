import React from "react";
import ReactDOM from "react-dom";
import {LogOut} from "../../store/startPage/auth/actions";

class ToMainPageButton extends React.Component {
    onclick () {

        window.location.assign('http://localhost:3000/main/');

    }

    render() {
        return (<a onClick={(e) => this.onclick(e)}>213123 <i className="fas fa-chart-bar"/></a>);
    }
}
export default ToMainPageButton;


