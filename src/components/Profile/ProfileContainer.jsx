import React from "react";
import Profile from "./Profile";
import { setUserProfile, getProfile, getUserProfileStatus, updateProfileUserStatus } from "./../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 7030 }
    this.props.getProfile(userId);
    this.props.getUserProfileStatus(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateProfileUserStatus={this.props.updateProfileUserStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getProfile, getUserProfileStatus, updateProfileUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);