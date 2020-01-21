import React from "react";
import {connect} from "react-redux";
import ResultsTable from "./ResultsTable";
import {DeletePoint, ReDrawPoint} from "../../../store/MainPage/ResultTable/actions";

class ResultTableContainer extends React.Component {
    render() {
        return (
            <div className="ResultTableContainer">

                <ResultsTable
                    results={this.props.results}
                    r={this.props.r}
                    DeletePoint={this.props.DeletePoint}
                    ReDrawPoint={this.props.ReDrawPoint}/>

            </div>
        );
    }
}

const mapStateToProps = state => {

    return {

        results: state.mainPage.results,
        r: state.mainPage.r,
    }
};

const mapDispatchToProps = {
    DeletePoint: DeletePoint,
    ReDrawPoint: ReDrawPoint

};
export default connect(mapStateToProps, mapDispatchToProps)(ResultTableContainer);
