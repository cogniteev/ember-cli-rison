/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-rison',

  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/rison/js/rison.js', {
      type: 'vendor'
    });
    app.import('vendor/rison.shim.js', {
      type: 'vendor',
      exports: {
        rison: [ 'default' ]
      }
    });
  }

};
