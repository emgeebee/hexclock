import React from 'react';
import infoStore from '../stores/hextime/InfoStore';
import infoActions from '../actions/hextime/InfoActions';

var AppComponent = React.createClass({

  getInitialState() {
    return {
      'classes': this.getClasses(infoStore.getState())
    }
  },

  componentDidMount() {
    infoStore.listen(this.updateInfo);
  },

  getClasses(isActive) {
    var classes = 'info';
    classes += isActive.open ? ' active' : '';
console.log(classes);
    return classes;
  },

  updateInfo() {
console.log('c');
    this.setState({'classes': this.getClasses(infoStore.getState())});
  },

  render() {
    return (
      <div className={this.state.classes}>
       <div className='inner'>
        Hexclock uses the time of day to generate a colour.
        <br />
        <br />
        The three primary colours are shown in different intensities at different times of days. Each colour is varied by a sine wave in its third of the day.
        <br />
        <br />
        E.g. between midnight and midday, blue is oscilating (0 to 1 to 0). Between 6am and 6pm, green is oscillating. Between midday and midnight, red is oscillating.
       </div>
      </div>
    );
  }
});


export default AppComponent;
