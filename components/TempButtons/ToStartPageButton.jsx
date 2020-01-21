import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {LogOut} from "../../store/actions";

class Back_button extends React.Component {
    onclick () {

        this.props.dispatch(LogOut());




    }

    render() {
        return (<button className="BackButton" onClick={(e) => this.onclick(e)}>Выйти</button>);
    }
}

const mapDispatchToProps = dispatch => ({

    dispatch                // ← Add this
});

export default connect(null, mapDispatchToProps)(Back_button);
