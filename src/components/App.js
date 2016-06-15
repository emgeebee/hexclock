require('normalize.css');
require('styles/App.scss');
import React from 'react';
import Icons from './Icons';
import Hex from './Hex';
import Info from './Info';
import Config from './Config';

var AppComponent = React.createClass({
  render() {
    return (
      <div>
        <Icons />
        <Info />
        <Config />
        <Hex />
      </div>
    );
  }
});


export default AppComponent;
