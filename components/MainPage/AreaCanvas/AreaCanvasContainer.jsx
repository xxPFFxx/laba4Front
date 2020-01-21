import React from "react";
import {connect} from "react-redux";
import {addNewResult} from "../../../store/MainPage/AreaCanvas/actions";
import AreaCanvas from "./AreaCanvas";
import {getAllActualResults} from "../../../store/MainPage/ResultTable/actions";

class AreaCanvasContainer extends React.Component {
    render() {




        return (
            <div className="AreaCanvasContainer">

                <AreaCanvas
                    getAllActualResults={this.props.getAllActualResults}
                    click={this.props.click}
                    r={this.props.r}
                    results={this.props.results}
                    reason={this.props.reason}

                />

            </div>
        );
    }
}

const mapStateToProps = state => {

    return {

        results:state.canvas.results,
        r:state.mainPage.r,
        reason:state.form.reason
    }
};

const mapDispatchToProps = {
    getAllActualResults: getAllActualResults,
    click: addNewResult

};
export default connect(mapStateToProps, mapDispatchToProps)(AreaCanvasContainer);
