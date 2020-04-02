import React from "react";
import classes from './Friends.module.css';
import * as axios from "axios";
import userPhoto from "./../../assets/images/user.png"

class Friends extends React.Component {
  
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").
      then(response => {
        this.props.setUsers(response.data.items)
      });
    }
  }
  render = () => {
    debugger;
    return <div className={classes.friends}>
         {/* <button onClick={this.getUsers}>get users</button> */}
         {this.props.users.map(u => 
           <div key={u.id}>
             <img className={classes.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava"/>
             <span>{u.name}</span> <br/>
              {u.followed 
             ? <button onClick={() => { this.props.unfollow(u.id) } }>Unfollow</button> 
             : <button onClick={() => { this.props.follow(u.id) } } >Follow</button>}
           </div>)}
       </div>
    }
};

export default Friends;