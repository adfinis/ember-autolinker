/* eslint-env node */
'use strict';

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addBowerPackagesToProject([
      { name: 'Autolinker.js', target: '^1.4.3' }
    ])
  }
};
