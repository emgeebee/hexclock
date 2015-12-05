import alt from 'components/Dispatcher';
import configActions from '../../actions/hextime/ConfigActions';

export class ConfigStore {

  constructor() {

    this.savedConfig = {};
    this.config = {};

    this.bindListeners({
      handleConfigLoad: configActions.INIT_CONFIG,
      handleConfigChange: configActions.UPDATE_CONFIG,
      handleConfigSave: configActions.SAVE_CONFIG
    });
  }

  handleConfigLoad(config) {
    this.config = config;
  }

  handleConfigSave() {
    this.savedConfig = this.config;
  }

  handleConfigChange(config) {
    this.config = config;
  }
}

export default alt.createStore(ConfigStore, 'ConfigStore');
