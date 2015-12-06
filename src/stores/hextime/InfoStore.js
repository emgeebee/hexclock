import alt from 'components/Dispatcher';
import infoActions from '../../actions/hextime/InfoActions';

export class InfoStore {

  constructor() {
    this.open = false;

    this.bindListeners({
      handleInfoToggle: infoActions.INFO_TOGGLE,
    });
  }

  handleInfoToggle() {
    this.open = !this.open;
console.log('d');
  }
}

export default alt.createStore(InfoStore, 'InfoStore');
