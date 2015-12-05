'use strict';

import alt from 'components/Dispatcher';
import { TimeStore } from 'stores/hextime/TimeStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('TimeStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, TimeStore);
  });
});
