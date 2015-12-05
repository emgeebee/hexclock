'use strict';

import alt from 'components/Dispatcher';
import { ConfigStore } from 'stores/hextime/ConfigStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('ConfigStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, ConfigStore);
  });
});
