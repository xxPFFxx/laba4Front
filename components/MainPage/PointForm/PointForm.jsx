import React from "react";
import {InputText} from "primereact/inputtext";
import {Slider} from "primereact/slider";
import {Spinner} from "primereact/spinner";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class PointForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {x: 0, y: 0, inside: ''};

        this.onChangeSlider2 = this.onChangeSlider2.bind(this);
        this.OnSubmitClick = this.OnSubmitClick.bind(this);
    }

    OnSubmitClick(event){

        this.props.formSubmit(this.props.selectedX,this.props.selectedY,this.props.selectedR);



    }



    onChangeSlider2(e) {
        var newValue;

        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }
        this.props.changeY(newValue);
        //
        // this.setState({ val2: newValue });
    }

    render() {


        let hidereason=true;
        if(this.props.reason!=="")
            hidereason=false;


        console.log(hidereason);
        console.log(this.props.reason);

        return (

            <div className="PointForm">



                <div className="XSpinnerDiv">

                <h3>Значение X</h3>
                    <Spinner readonly={true} value={this.props.selectedX} onChange={(e) => this.props.changeX(e.value)} min={-5} max={3} />
                    <br/>

                </div>

                <div className="YSliderDiv">

                    <h3>Значение Y</h3>
                    <InputText readOnly={true} value={this.props.selectedY} style={{width: '14em'}} type="number" onChange={this.onChangeSlider2} />
                    <Slider min={-5} max={5}  value={this.props.selectedY} onChange={this.onChangeSlider2} style={{width: '14em', height:'1em'}} />

                </div>


                <div className="RSpinnerDiv">

                    <h3>Значение R</h3>
                    <Spinner readonly={true} value={this.props.selectedR} onChange={(e) => this.props.changeR(e.value)} min={0} max={3} />
                    <br/>

                </div>
                <button id="SubmitButton" onClick={this.OnSubmitClick} >Отправить </button>
        <div className="reason">

                <p hidden={hidereason}>{this.props.reason}</p>
        </div>




            </div>
        )

    }

}