require('normalize.css');
require('styles/App.scss');

import React from 'react';
import configActions from '../actions/hextime/ConfigActions';

var AppComponent = React.createClass({

  toggleConfig() {
    configActions.configToggle();
  },

  render() {
    return (
      <div className="icon-container">
        <i className="fa fa-info-circle"></i>
        <i className="fa fa-cog" onClick={this.toggleConfig}></i>
        <i className="fa fa-external-link"></i>
      </div>
    );
  }
});


export default AppComponent;
