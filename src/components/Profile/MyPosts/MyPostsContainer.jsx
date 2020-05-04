import MyPosts from "./MyPosts";
import {ADD_POST_ACTION_CREATOR, deletePost} from '../../../redux/profile-reducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPostBody) => {dispatch(ADD_POST_ACTION_CREATOR (newPostBody))},
    deletePost: (postId) => {dispatch(deletePost(postId))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;