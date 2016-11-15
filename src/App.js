import React, { Component } from 'react';
import colonyStore from './store/colonyStore.js';
import { Provider } from 'react-redux';
import AvatarMenu from './components/avatar-menu/avatar-menu.jsx';
import avatars from './constants/constants.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={colonyStore}>
          <AvatarMenu avatars={avatars} />
        </Provider>
      </div>
    );
  }
}

export default App;
