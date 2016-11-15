import React, { Component } from 'react';
import Avatar from '../avatar/avatar.jsx';
import { connect } from 'react-redux';
import AvatarSelector from '../avatar-selector/avatar-selector';
import './avatar-menu.css';

class AvatarMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      avatars: props.avatars,
      selectedAvatar: props.avatars[0],
      isSelectorOpen: null,
    };
    this.toggleAvatarSelector = this.toggleAvatarSelector.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousedown', this.onPageClick, false);
    }
  }
  componentWillReceiveProps(nextProps) {
    if ( this.state.selectedAvatar.id !== nextProps.selectedAvatar.id ) {
      this.setState({
        selectedAvatar: nextProps.selectedAvatar,
        isSelectorOpen: false,
      });
    }
  }
  onPageClick(ev) {
    if (
      ev.target.classList.contains('selctor-title') ||
      ev.target.classList.contains('avatar-list') ||
      ev.target.classList.contains('overlay') ||
      ev.target.classList.contains('avatar-selector') ||
      ev.target.classList.contains('avatar-selector-wrapper')
    ){
      return;
    }
    this.setState({
      isSelectorOpen: null,
    });
  }
  toggleAvatarSelector() {
    this.setState({
      isSelectorOpen: !this.state.isSelectorOpen,
    });
  }
  render() {
    const selectedAvatar = this.state.selectedAvatar;
    return (
      <div className="avatar-menu">
        <div className="selected-avatar" >
          <div onClick={this.toggleAvatarSelector} className="main-avatar-wrapper" >
            <Avatar avatar={selectedAvatar} />
          </div>
        </div>
        { this.state.isSelectorOpen !== null ?
        <div className={'avatar-selector-wrapper ' + (this.state.isSelectorOpen === true ? 'bounceIn': 'bounceOut')}>
          <AvatarSelector avatars={this.state.avatars} selectedAvatar={selectedAvatar} />
        </div>
        : ''
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedAvatar: state.selectedAvatar,
  };
}

AvatarSelector.propTypes = {
  avatars: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AvatarMenu);
