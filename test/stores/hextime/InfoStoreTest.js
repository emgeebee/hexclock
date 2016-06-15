'use strict';

import alt from 'components/Dispatcher';
import { InfoStore } from 'stores/hextime/InfoStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('InfoStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, InfoStore);
  });
});
