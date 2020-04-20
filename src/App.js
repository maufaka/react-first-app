import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer  />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/friends" render={() => <FriendsContainer />}/>
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};



export default App;
