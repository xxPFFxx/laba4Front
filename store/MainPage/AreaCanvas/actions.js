import {InvalidDataActionCreator} from "../actions";

export const CLICKED_CANVAS_ACTION = 'CLICKED_CANVAS_ACTION';
export const GET_ACTUAL_RESULTS_ACTION = 'GET_ACTUAL_RESULTS_ACTION';


export const ClickedActionCreator = (x, y, r,point_id, inside) => ({
    type: CLICKED_CANVAS_ACTION,
    payload: {
        x, y, r, point_id, inside
    }

});


export const addNewResult = (x, y, r) => {

    console.log("addNewResult");
    return dispatch => {


        let newactualresult = {
            x: x,
            y: y,
            r: r,

        };


        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/main');
        headers.append('Access-Control-Allow-Credentials', 'true');


        fetch("http://localhost:8080/point/addNewResult", {
            method: 'POST',
            credentials: "include",
            headers: headers,
            body: JSON.stringify(newactualresult)
        })
            .then(response => response.json())
            .then(
                data => {

                    if (data.success) {

                        dispatch(ClickedActionCreator(x, y, r,data.point_id, data.inside));

                    }
                    else {

                         dispatch(InvalidDataActionCreator(data.why));

                    }


                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    console.log(error)
                }
            );

    }
}



