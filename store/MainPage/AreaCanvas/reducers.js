import {CLICKED_CANVAS_ACTION, GET_ACTUAL_RESULTS_ACTION} from "./actions";
import {INVALID_DATA_ACTION} from "../actions";

const defaultState = {
    x: undefined,
    y: undefined,
    r: 4,
    results:[],reason: "",

};


export const areaCanvasReducer = (state = defaultState, action) => {


    switch (action.type) {
        case CLICKED_CANVAS_ACTION:
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

        case GET_ACTUAL_RESULTS_ACTION: {

            const {CanvasResults} = action.payload;


            console.log("GET_ACTUAL_RESULTS_ACTION");
            return {
                ...state,
                results: CanvasResults,
                // actualResults: state.actualResults.add(newactualresult)
            };


        }



    }

    return state;


};


const check=(x,y,r)=>{

    //TODO check
    return true;


};