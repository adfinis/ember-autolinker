/* eslint-env node */
'use strict'

module.exports = {
  name: 'ember-autolinker',

  included: function (app) {
    this._super.included(app)

    app.import('node_modules/autolinker/dist/Autolinker.min.js', {
      using: [ {transformation: 'amd', as: 'autolinker'} ]
    })
  }
}
