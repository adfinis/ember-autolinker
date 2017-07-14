/* eslint-env node */
'use strict';

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    this.addBowerPackageToProject({ name: 'Autolinker.js', target: '^1.4.3' })
  }
};
