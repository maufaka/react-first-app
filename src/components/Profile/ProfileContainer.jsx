import React from "react";
import Profile from "./Profile";
import { setUserProfile, getProfile } from "./../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2 }
    this.props.getProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let ProfileRouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getProfile })(
  ProfileRouterContainer
);
