import React from "react";
import "./UserName.css"

export default class Username extends React.Component {
    render() {
        // console.log(this.state.auth.login);
        return (

                <div className="Username">

                    <h3>Логин:</h3>
                    <p>{this.props.login}</p>
                    

                </div>
        )

    }

}