import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost, sendNewMassage, addMassage} from './redux/state';


export let rerenderEtireTree = (state) => { 
    ReactDOM.render (<App   state = {state} 
                            addPost={addPost}
                            updateNewPost={updateNewPost}
                            sendNewMassage={sendNewMassage}
                            addMassage={addMassage} />, document.getElementById('root'))
}