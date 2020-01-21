import React from 'react';
import './App.css';
import rootReducer from "./store/reducers"
import { Provider } from "react-redux"
import {applyMiddleware, createStore} from "redux";
import StartPage from "./components/StartPage/StartPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import {loadState, saveState} from "./localStorage";
import thunkMiddleware from 'redux-thunk';

const persistedState = loadState();

const store = createStore(rootReducer,persistedState,applyMiddleware(thunkMiddleware));

store.subscribe(() => {
saveState(store.getState())

});


export default class App extends React.Component {
    render() {
        return (
        <Provider store={store}>

            <Router>
                <div className="App">



                       <Route path="/"  exact component={StartPage}/>
                        <Route path="/main" exact component={MainPage} />

                </div>
            </Router>

        </Provider>
        )

    }

}


