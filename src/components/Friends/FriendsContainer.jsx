import { connect } from "react-redux";
import Friends from "./Friends";
import {followAC, unfollowAC, setUsersAC} from './../../redux/users-reducer'

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
