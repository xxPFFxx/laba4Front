import React from "react";
import {RadioButton} from "primereact/radiobutton";
import {InputText} from "primereact/inputtext";
import {Slider} from "primereact/slider";

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



                <div className="XradioDiv">

                <h3>Значение X</h3>
                <RadioButton inputId="x1" id="x1" value="-3" name="xparam" onChange={() => this.props.changeX(-3)}
                             checked={this.props.selectedX === -3}/>
                <label htmlFor="x1" className="p-radiobutton-label">-3</label>
                <br/>
                <RadioButton inputId="x2" id="x2" value="-2" name="xparam" onChange={() => this.props.changeX(-2)}                              checked={this.props.selectedX === -2}/>
                <label htmlFor="x2" className="p-radiobutton-label">-2</label>
                <br/>
               <RadioButton inputId="x3" id="x3" value="-1" name="xparam" onChange={() => this.props.changeX(-1)}                              checked={this.props.selectedX === -1}/>
                <label htmlFor="x3" className="p-radiobutton-label">-1</label>
                <br/>
                <RadioButton inputId="x4" id="x4" value="0" name="xparam" onChange={() => this.props.changeX(0)}                              checked={this.props.selectedX === 0}/>
                <label htmlFor="x4" className="p-radiobutton-label">0</label>
                <br/>
                <RadioButton inputId="x5" id="x5" value="1" name="xparam" onChange={() => this.props.changeX(1)}                              checked={this.props.selectedX === 1}/>
                <label htmlFor="x5" className="p-radiobutton-label">1</label>
                <br/>
                <RadioButton inputId="x6" id="x6" value="2" name="xparam" onChange={() => this.props.changeX(2)}                              checked={this.props.selectedX === 2}/>
                <label htmlFor="x6" className="p-radiobutton-label">2</label>
                <br/>
                <RadioButton inputId="x7" id="x7" value="3" name="xparam" onChange={() => this.props.changeX(3)}                              checked={this.props.selectedX === 3}/>
                <label htmlFor="x7" className="p-radiobutton-label">3</label>
                <br/>
                <RadioButton inputId="x8" id="x8" value="4" name="xparam" onChange={() => this.props.changeX(4)}                              checked={this.props.selectedX === 4}/>
                <label htmlFor="x8" className="p-radiobutton-label">4</label>
                <br/>
                <RadioButton inputId="x9" id="x9" value="5" name="xparam" onChange={() => this.props.changeX(5)}                             checked={this.props.selectedX === 5}/>
                <label htmlFor="x9" className="p-radiobutton-label">5</label>

                </div>

                <div className="YSliderDiv">

                    <h3>Значение Y</h3>
                    <InputText readOnly={true} value={this.props.selectedY} style={{width: '14em'}} type="number" onChange={this.onChangeSlider2} />
                    <Slider min={-5} max={5}  value={this.props.selectedY} onChange={this.onChangeSlider2} style={{width: '14em', height:'1em'}} />

                </div>


                <div className="RradioDiv">

                    <h3>Значение R</h3>
                <RadioButton inputId="r1" id="r1" value="-3" name="rparam" onChange={() => this.props.changeR(-3)}
                             checked={this.props.selectedR === -3}/>
                <label htmlFor="r1" className="p-radiobutton-label">-3</label>
                <br/>
                <RadioButton inputId="r2" id="r2" value="-2" name="rparam" onChange={() => this.props.changeR(-2)}                              checked={this.props.selectedR === -2}/>
                <label htmlFor="r2" className="p-radiobutton-label">-2</label>
                <br/>
               <RadioButton inputId="r3" id="x3" value="-1" name="rparam" onChange={() => this.props.changeR(-1)}                              checked={this.props.selectedR === -1}/>
                <label htmlFor="r3" className="p-radiobutton-label">-1</label>
                <br/>
                <RadioButton inputId="r4" id="r4" value="0" name="rparam" onChange={() => this.props.changeR(0)}                              checked={this.props.selectedR === 0}/>
                <label htmlFor="r4" className="p-radiobutton-label">0</label>
                <br/>
                <RadioButton inputId="r5" id="r5" value="1" name="rparam" onChange={() => this.props.changeR(1)}                              checked={this.props.selectedR === 1}/>
                <label htmlFor="r5" className="p-radiobutton-label">1</label>
                <br/>
                <RadioButton inputId="r6" id="r6" value="2" name="rparam" onChange={() => this.props.changeR(2)}                              checked={this.props.selectedR === 2}/>
                <label htmlFor="r6" className="p-radiobutton-label">2</label>
                <br/>
                <RadioButton inputId="r7" id="r7" value="3" name="rparam" onChange={() => this.props.changeR(3)}                              checked={this.props.selectedR === 3}/>
                <label htmlFor="r7" className="p-radiobutton-label">3</label>
                <br/>
                <RadioButton inputId="r8" id="r8" value="4" name="rparam" onChange={() => this.props.changeR(4)}                              checked={this.props.selectedR === 4}/>
                <label htmlFor="r8" className="p-radiobutton-label">4</label>
                <br/>
                <RadioButton inputId="r9" id="r9" value="5" name="rparam" onChange={() => this.props.changeR(5)}                             checked={this.props.selectedR === 5}/>
                <label htmlFor="r9" className="p-radiobutton-label">5</label>

                </div>
                <button onClick={this.OnSubmitClick} >Отправить </button>
        <div className="reason">

                <p hidden={hidereason}>{this.props.reason}</p>
        </div>




            </div>
        )

    }

}