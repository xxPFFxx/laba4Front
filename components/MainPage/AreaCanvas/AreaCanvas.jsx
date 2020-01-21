import React from "react";

export default class AreaCanvas extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {x: 0, y: 0, inside: ''};

        this.handleClick = this.handleClick.bind(this);
    }

    updateCanvas() {


        this.drawFunction();
    }


    render() {

        return (
            <div className="AreaCanvas">


                <canvas id="canvas" ref="canvas" width="300px" height="300px"/>


            </div>


        );
    }


    DrawPoint(x, y, color) {


        const plot_canvas = this.refs.canvas;
        const plot_context = this.refs.canvas.getContext("2d");
        plot_context.beginPath();
        plot_context.fillStyle = color;
        plot_context.arc(x, y, 3, 0, 2 * 3.14);
        plot_context.fill();

    }


    handleClick(event) {
        const plot_canvas = this.refs.canvas;
        const plot_context = this.refs.canvas.getContext("2d");

        let rect = plot_canvas.getBoundingClientRect();
        getCursorPosition(event);


        // let R = document.getElementById("form:param-r").value;
        let R = this.props.r;
        x -= 150;
        y -= 150;
        y *= -1;
        x = x / 100 * R;
        y = y / 100 * R;

        console.log("X: " + x);
        console.log("Y: " + y);

        this.props.click(x, y, R);



    }


componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateCanvas();
}

    componentDidMount() {
        this.props.getAllActualResults(this.props.r);
        const plot_canvas = this.refs.canvas;
        plot_canvas.addEventListener('click', this.handleClick, false);

        this.updateCanvas();
    }

    componentWillUnmount() {
        const plot_canvas = this.refs.canvas;
        plot_canvas.removeEventListener('click', this.handleClick, false);

    }



    drawFunction() {

        // const plot_canvas = document.getElementById("canvas");
        // const plot_context = plot_canvas.getContext("2d");


        const plot_canvas = this.refs.canvas;
        const plot_context = this.refs.canvas.getContext("2d");

        plot_context.clearRect(0, 0, plot_canvas.width, plot_canvas.height);

        plot_context.beginPath();
        plot_context.arc(150, 150, 50, -Math.PI/2, 0);
        plot_context.lineTo(150, 150);
        plot_context.closePath();
        plot_context.fillStyle = 'blue';
        plot_context.fill();

        plot_context.beginPath();
        plot_context.moveTo(150, 150);
        plot_context.lineTo(150, 100);
        plot_context.lineTo(50, 150);
        plot_context.lineTo(150, 150);
        plot_context.closePath();
        plot_context.fillStyle = 'blue';
        plot_context.fill();

        plot_context.beginPath();
        plot_context.rect(100, 150, 50, 100);
        plot_context.closePath();
        plot_context.fillStyle = 'blue';
        plot_context.fill();


        plot_context.beginPath();
        //Ox
        plot_context.fillStyle = 'black';
        plot_context.moveTo(30, 150);
        plot_context.lineTo(270, 150);
        plot_context.lineTo(260, 140);
        plot_context.moveTo(270, 150);
        plot_context.lineTo(260, 160);
        //|||
        plot_context.moveTo(50, 160);
        plot_context.lineTo(50, 140);
        plot_context.moveTo(100, 160);
        plot_context.lineTo(100, 140);
        plot_context.moveTo(200, 160);
        plot_context.lineTo(200, 140);
        plot_context.moveTo(250, 160);
        plot_context.lineTo(250, 140);

        //Oy
        plot_context.moveTo(150, 30);
        plot_context.lineTo(140, 40);
        plot_context.moveTo(150, 30);
        plot_context.lineTo(160, 40);
        plot_context.moveTo(150, 30);
        plot_context.lineTo(150, 270);
        plot_context.moveTo(30, 150);
        //|||
        plot_context.moveTo(140, 50);
        plot_context.lineTo(160, 50);
        plot_context.moveTo(140, 100);
        plot_context.lineTo(160, 100);
        plot_context.moveTo(140, 200);
        plot_context.lineTo(160, 200);
        plot_context.moveTo(140, 250);
        plot_context.lineTo(160, 250);
        plot_context.closePath();
        plot_context.stroke();

        if(this.props.reason!=="" || this.props.r<0 ) return;

        //var rrr=document.getElementById("form:param-r").value;
        var rrr = this.props.r;
        plot_context.font = "18px Arial";
        plot_context.fillText(rrr, 130, 50);
        plot_context.fillText(rrr / 2, 130, 100);
        plot_context.fillText("0", 130, 150);
        plot_context.fillText("-" + rrr / 2, 130, 200);
        plot_context.fillText("-" + rrr, 130, 250);

        plot_context.fillText("-" + rrr, 50, 130);
        plot_context.fillText("-" + rrr / 2, 100, 130);
        plot_context.fillText(rrr / 2, 200, 130);
        plot_context.fillText(rrr, 250, 130);


        let results = this.props.results;
        if (results)
        results.forEach(
            point => {
                this.DrawPoint(point.x * 100 / rrr + 150, point.y * -1 * 100 / rrr + 150, (point.inside ? "green" : "red"));
            }
        )


    }

}
var x;
var y;


function getCursorPosition(e) {
    let canvas = document.getElementById("canvas");


    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    } else {
        x = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
}




