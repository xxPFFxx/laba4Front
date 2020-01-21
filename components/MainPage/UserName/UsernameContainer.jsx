import React from "react";
import {connect} from "react-redux";
import Username from "./Username";

class UsernameContainer extends React.Component {
    render() {
        return (
            <div className="UsernameContainer">
                <Username login={this.props.login}/>

            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
         login:state.store.login


    }
};


const mapDispatchToProps = {


};
export default connect(mapStateToProps, mapDispatchToProps)(UsernameContainer);
