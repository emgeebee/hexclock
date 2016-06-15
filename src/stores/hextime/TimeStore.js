import alt from 'components/Dispatcher';
import timeActions from 'actions/hextime/TimeActions';
export class TimeStore {

  constructor() {
    this.bindListeners({
      handleTimeUpdate: timeActions.UPDATE_TIME
    });

    this.data = {
      'mins': 0,
      'secs': 0
    };
  }

  handleTimeUpdate(timeObj) {
    this.data = timeObj;
  }
}

export default alt.createStore(TimeStore, 'TimeStore');
