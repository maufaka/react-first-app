import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost, sendNewMassage, addMassage} from './redux/state';
import state, {subscriber} from './redux/state';


export let rerenderEtireTree = (state) => { 
    ReactDOM.render (<App   state = {state} 
                            addPost={addPost}
                            updateNewPost={updateNewPost}
                            sendNewMassage={sendNewMassage}
                            addMassage={addMassage} />, document.getElementById('root'))
}

rerenderEtireTree(state);
subscriber(rerenderEtireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
