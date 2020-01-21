import React from "react";
import {connect} from "react-redux";
import PointForm from "./PointForm";
import {
    ChangeR,
    ChangeSelectedRActionCreator,
    ChangeSelectedXActionCreator,
    ChangeSelectedYActionCreator
} from "../../../store/MainPage/PointForm/actions";
import {addNewResult} from "../../../store/MainPage/AreaCanvas/actions";

class PointFormContainer extends React.Component {
    render() {



        return (
            <div className="PointFormContainer">

                <PointForm changeX={this.props.changeX}
                           changeR={this.props.changeR}
                           changeY={this.props.changeY}
                           selectedX={this.props.selectedX}
                           selectedY={this.props.selectedY}
                           selectedR={this.props.selectedR}
                           formSubmit={this.props.formSubmit}
                           reason={this.props.reason}
                           getAllActualResults={this.props.getAllActualResults}
                           click={this.props.click}
                           r={this.props.r}
                           results={this.props.results}/>

            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        selectedX: state.form.selectedX,
        selectedR: state.mainPage.r,
        selectedY: state.form.selectedY,
        reason:state.form.reason



    }
};

const mapDispatchToProps = {

    changeX:ChangeSelectedXActionCreator,
    changeR:ChangeR,
    changeY:ChangeSelectedYActionCreator,
    formSubmit:addNewResult,


};
export default connect(mapStateToProps, mapDispatchToProps)(PointFormContainer);
