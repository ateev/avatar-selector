import React, { Component } from 'react';
import colonyStore from '../../store/colonyStore.js';
import {selectAvatar} from '../../actions/avatarActions.js';
import Avatar from '../avatar/avatar';
import './avatar-selector.css';

class AvatarSelector extends Component {
  constructor() {
    super();
    this.state = {
      loadingId: -1,
    };
    this.selectAvatar = this.selectAvatar.bind(this);
  }
  selectAvatar(avatar) {
    this.setState({
      loadingId: avatar.id,
    });
    setTimeout(() => {
      colonyStore.dispatch(selectAvatar(avatar));
      this.setState({
        loadingId: -1,
      });
    }, 1000);
  }
  render() {
    return (
      <div className="avatar-selector">
        <div className="selctor-title"> Choose your Avatar </div>
        <ul className="avatar-list">
        {
          this.props.avatars.map((avatar, key) =>
            <li
              className={'avatar-option ' + (this.props.selectedAvatar.id === avatar.id ? 'selected' : '') }
              onClick={this.selectAvatar.bind(null, avatar)}
              key={key}
            >
              <Avatar avatar={avatar} />
              <div className={'loader ' + ( this.state.loadingId === avatar.id ? '' : 'hidden' ) }></div>
            </li>
          )
        }
        </ul>
      </div>
    );
  }
}

AvatarSelector.propTypes = {
  avatars: React.PropTypes.array.isRequired,
  selectedAvatar: React.PropTypes.object.isRequired,
};

export default AvatarSelector;
