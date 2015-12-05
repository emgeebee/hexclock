import alt from 'components/Dispatcher';
import configSource from '../../sources/hextime/ConfigSource';

class ConfigActions {

  initConfig() {
    this.dispatch();
    var config = configSource.remoteAction.local();
    this.actions.updateConfig(config);
  }

  updateConfig(config) {
    this.dispatch(config);
  }

  saveConfig() {
    this.dispatch();
  }

}

export default alt.createActions(ConfigActions);
