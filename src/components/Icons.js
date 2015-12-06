require('normalize.css');
require('styles/App.scss');

import React from 'react';
import configActions from '../actions/hextime/ConfigActions';
import infoActions from '../actions/hextime/InfoActions';

var AppComponent = React.createClass({

  toggleConfig() {
    configActions.configToggle();
  },

  toggleInfo() {
    infoActions.infoToggle();
  },

  render() {
    return (
      <div className="icon-container">
        <i className="fa fa-info-circle" onClick={this.toggleInfo}></i>
        <i className="fa fa-cog" onClick={this.toggleConfig}></i>
      </div>
    );
  }
});


export default AppComponent;
