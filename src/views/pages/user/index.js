import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getCurrentUser, User, userActions,getUserLikes } from 'src/core/users';

import Tracklist from '../../components/tracklist';
import UserCard from '../../components/user-card';


export class UserPage extends React.Component {
  static propTypes = {
    loadUser: React.PropTypes.func.isRequired,
    loadUserLikes: React.PropTypes.func.isRequired,
    loadUserTracks: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      resource: React.PropTypes.string.isRequired
    }),
    user: React.PropTypes.instanceOf(User)
  };

  componentWillMount() {
    this.loadUser();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params.resource !== this.props.params.resource) {
      this.loadUser(nextProps.params);
    }
  }

  loadUser(params) {
    params = params || this.props.params;

    this.props.loadUser(params.id);

    if (params.resource === 'likes') {
      this.props.loadUserLikes(params.id);
    }
    else {
      this.props.loadUserTracks(params.id);
      this.props.loadUserLikes(params.id);
    }
  }

  render() {
    const { user,likes } = this.props;
    if (!user) return null;
    return (
      <section>
        <UserCard user={user} />
        <Tracklist/>
        <div className='content-side'>
          <div className='side-head-title'>{'</3'}</div>
        </div>
      </section>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getCurrentUser,
  getUserLikes,
  (user,likes)=> ({user,likes})
);

const mapDispatchToProps = {
  loadUser: userActions.loadUser,
  loadUserLikes: userActions.loadUserLikes,
  loadUserTracks: userActions.loadUserTracks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
