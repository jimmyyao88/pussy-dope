import React from 'react';
import { connect } from 'react-redux';
import { tracklistActions } from 'src/core/tracklists';

import Tracklist from '../../components/tracklist';

export class HomePage extends React.Component {
  static propTypes = {
    loadFeaturedTracks: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadFeaturedTracks();
  }

  render() {
    return (
      <section>
        <Tracklist compactLayout={true} />
      </section>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  loadFeaturedTracks: tracklistActions.loadFeaturedTracks
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
