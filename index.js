/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import rootReducer from './src/reducer';
import rootSaga from './src/saga';
import {name as appName} from './app.json';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk,sagaMiddleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f,        
    )
)

sagaMiddleWare.run(rootSaga);

export default class GhostLamps extends Component {
    render(){
        return(
            <Provider store={store} >
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => GhostLamps);
