import React from "react";
import Profile from "./Profile";
import { setUserProfile, requestProfile, getUserProfileStatus, updateProfileUserStatus } from "./../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { 
      userId = this.props.userId 
    }
    this.props.requestProfile(userId);
    this.props.getUserProfileStatus(userId);
  }
  render() {
    return <Profile   {...this.props} 
                      profile={this.props.profile} 
                      status={this.props.status} 
                      updateProfileUserStatus={this.props.updateProfileUserStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  userId: state.auth.userId
});

export default compose(
  connect(mapStateToProps, { setUserProfile, requestProfile, getUserProfileStatus, updateProfileUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);