import {NotSuccessLoginActionCreator, SuccessLoginActionCreator} from "../../startPage/auth/actions";
import {GET_ACTUAL_RESULTS_ACTION} from "../AreaCanvas/actions";
import {InvalidDataActionCreator} from "../actions";

export const DELETE_POINT_ACTION = 'DELETE_POINT_ACTION';


export const DeletePointActionCreator = (point_id) => ({
    type: DELETE_POINT_ACTION,
    payload: {
        point_id
    }

});

export const GetAllActualResultsActionCreator = (ActualResults,CanvasResults) => ({
    type: GET_ACTUAL_RESULTS_ACTION,
    payload: {
        ActualResults:ActualResults,
        CanvasResults:CanvasResults,
    }

});


export const getAllActualResults =(r)=>{


    return dispatch => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/main');
        headers.append('Access-Control-Allow-Credentials', 'true');


        fetch("http://localhost:8080/point/allActualResults/"+r, {
            method: 'GET',
            credentials: "include",
            headers: headers,

        })
            .then(response => response.json())
            .then(
                data => {

                    if (data.success) {



                        dispatch(GetAllActualResultsActionCreator(data.ActualResults,data.CanvasResults));

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

};


export const DeletePoint=(point_id,radius)=>{

  return dispatch =>{

      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
      headers.append('Access-Control-Allow-Credentials', 'true');




      fetch("http://localhost:8080/point/deleteActualPoint/"+point_id, {
          method: 'GET',
          credentials: "include",
          headers: headers,


      })
          .then(response => response.json())
          .then(
              data => {
                  if (data.success)
                dispatch(getAllActualResults(radius));

              else {

                      dispatch(InvalidDataActionCreator(data.why));

                  }


              },

              (error) => {
                  console.log(error)
              }
          );



  }

};

export const ReDrawPoint=(point_id,radius)=>{

  return dispatch =>{

      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
      headers.append('Access-Control-Allow-Credentials', 'true');


      fetch("http://localhost:8080/point/reDrawActualPoint/"+point_id+"/"+radius, {
          method: 'GET',
          credentials: "include",
          headers: headers,


      })
          .then(response => response.json())
          .then(
              data => {
                  if (data.success)
                dispatch(getAllActualResults(radius));
                  else {

                      dispatch(InvalidDataActionCreator(data.why));

                  }
              },

              (error) => {
                  console.log(error)
              }
          );



  }

};





