import React from 'react';
import { Link } from 'react-router';
import { User } from 'src/core/users';

import FormattedInteger from '../formatted-integer';


function UserCard({user}) {
  return (
    <article className="user-card">
      <div className="user-card-mask"></div>
      <div className="g-row g-cont">
        <div className="g-col">
          <div className="bg-center user-card-avatar" style={{backgroundImage:"url("+user.avatarUrl+")"}}></div>
          <div className="user-card-info">
            <h1 className="user-card__title">{user.username}</h1>
            <p className="user-card__city">{user.username}</p>
          </div>
        </div>
      </div>

      <div className="g-row g-cont user-stats">
        <div className="g-col xs-1/2 sm-1/4 md-hide">
          <Link activeClassName="active" className="user-stats__label" to={`/users/${user.id}/tracks`}>Tracks</Link>
          <div className="user-stats__value"><FormattedInteger value={user.trackCount} /></div>
        </div>

        <div className="g-col xs-1/2 sm-1/4 md-hide">
          <Link activeClassName="active" className="user-stats__label" to={`/users/${user.id}/likes`}>Likes</Link>
          <div className="user-stats__value"><FormattedInteger value={user.likesCount} /></div>
        </div>

        <div className="g-col xs-hide sm-1/4 md-hide">
          <div className="user-stats__label">Followers</div>
          <div className="user-stats__value"><FormattedInteger value={user.followersCount} /></div>
        </div>

        <div className="g-col xs-hide sm-1/4 md-hide">
          <div className="user-stats__label">Following</div>
          <div className="user-stats__value"><FormattedInteger value={user.followingsCount} /></div>
        </div>
      </div>
    </article>
  );
}

UserCard.propTypes = {
  user: React.PropTypes.instanceOf(User).isRequired
};

export default UserCard;
