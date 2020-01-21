import {CHANGE_SELECTED_R_ACTION, FORM_SUBMIT_ACTION} from "./PointForm/actions";
import {CLICK_CANVAS_ACTION, CLICKED_CANVAS_ACTION, GET_ACTUAL_RESULTS_ACTION} from "./AreaCanvas/actions";


const defaultState = {
    r: 4,
    results: [
        {x: 1, y: 1, r: 1, inside: "+"},
        {x: 2, y: 2, r: 2, inside: "-"},

    ]

};


export const mainPageReducer = (state = defaultState, action) => {

    switch (action.type) {
        case FORM_SUBMIT_ACTION: {

            const {x, y, r} = action.payload;


            return {
                ...state,
                isAuthorized: false,
                // actualResults: state.actualResults.add(newactualresult)
            };

        }
        case CLICKED_CANVAS_ACTION: {

            const {x, y, r, inside ,point_id} = action.payload;

            let newresults = [...state.results];

            if (newresults)
                newresults.push({x: x, y: y, r: r, inside: inside,pointId:point_id});
            else {
                newresults = [];
                newresults.push({x: x, y: y, r: r, inside: inside,pointId:point_id});
            }


            return {
                ...state,
                results: newresults,
                // actualResults: state.actualResults.add(newactualresult)
            };

        }
        case GET_ACTUAL_RESULTS_ACTION: {

            const {ActualResults} = action.payload;


            console.log("GET_ACTUAL_RESULTS_ACTION");
            return {
                ...state,
                results: ActualResults,
                // actualResults: state.actualResults.add(newactualresult)
            };


        }
        case CHANGE_SELECTED_R_ACTION:
            const {newR} = action.payload;
            return {
                ...state,
                r: newR,
            };
    }

    return state;

};
