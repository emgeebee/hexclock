import React from 'react';
import configStore from '../stores/hextime/ConfigStore';
import configActions from '../actions/hextime/ConfigActions';

var AppComponent = React.createClass({

  getInitialState() {
    return {
      'classes': this.getClasses(configStore.getState())
    };
  },

  componentDidMount() {
    configStore.listen(this.updateConfig);
  },

  getClasses(isActive) {
    var classes = 'config';
    classes += isActive.open ? ' active' : '';
    return classes;
  },

  updateConfig() {
    this.setState({'classes': this.getClasses(configStore.getState())});
  },

  render() {
    return (
      <div className={this.state.classes}>
        Config - coming soon.
      </div>
    );
  }
});


export default AppComponent;
