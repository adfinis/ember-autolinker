/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-autolinker',

  included: function(app) {
    this._super.included(app)

    app.import('bower_components/Autolinker.js/dist/Autolinker.js')
  }
};
