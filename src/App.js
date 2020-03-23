import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer  />
      <div className="app-wrapper-content">
        {/* <Route path='/Profile/' component={Profile} />
          <Route path='/Dialogs/' component={Dialogs} />
          <Route path='/News/' component={News} />
          <Route path='/Music/' component={Music} />
          <Route path='/Settings/' component={Settings} /> */}

        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Settings" render={() => <Settings />} />
        <Route path="/Friends" render={() => <Friends />}
        />
      </div>
    </div>
  );
};

export default App;
