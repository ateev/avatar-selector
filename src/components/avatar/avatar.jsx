import React, { Component } from 'react';
import './avatar.css';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img
          src={process.env.PUBLIC_URL + '/avatars/' + this.props.avatar.src }
          alt={this.props.avatar.label}
        />
        <div className="overlay"></div>
      </div>
    );
  }
}

Avatar.propTypes = {
  avatar: React.PropTypes.object.isRequired,
};

export default Avatar;
