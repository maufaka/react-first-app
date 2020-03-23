import MyPosts from "./MyPosts";
import {ADD_POST_ACTION_CREATOR, UPDATE_NEW_POST_ACTION_CREATOR} from '../../../redux/profile-reducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {dispatch(UPDATE_NEW_POST_ACTION_CREATOR (text))},
    onAddPost: () => {dispatch(ADD_POST_ACTION_CREATOR ())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;