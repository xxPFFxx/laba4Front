import React from "react";
import Back_button from "../TempButtons/ToStartPageButton";
import PointForm from "./PointForm/PointForm";
import AreaCanvas from "./AreaCanvas/AreaCanvas";
import ResultsTable from "./ResultsTable/ResultsTable";
import "./MainPage.css"
import UsernameContainer from "./UserName/UsernameContainer";
import ResultTableContainer from "./ResultsTable/ResultTableContainer";
import AreaCanvasContainer from "./AreaCanvas/AreaCanvasContainer";
import {connect} from "react-redux";
import {CheckIsAuthorized} from "../../store/actions";
import PointFormContainer from "./PointForm/PointFormContainer";




class MainPage extends React.Component {

    componentWillMount() {
        this.props.CheckIsAuthorized(this.props.login)

    }

    render() {


        if(!this.props.isAuthorized){
            window.location.assign('http://localhost:3000/');
        }

        return (
                <div className="MainPage">

                    <Back_button/>
                    <UsernameContainer />
                    <div className="mainflex">
                    <PointFormContainer/>
                    <AreaCanvasContainer/>
                    <ResultTableContainer/>


                     </div>
                </div>
        )

    }

}

const mapStateToProps = state => {

    return {

        isAuthorized:state.store.isAuthorized,
        login:state.store.login

    }
};



const mapDispatchToProps = dispatch => ({
    CheckIsAuthorized:CheckIsAuthorized,
    dispatch                // ← Add this
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
