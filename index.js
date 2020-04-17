'use strict';

module.exports = {
  name: 'ember-cli-rison',

  included(app) {
    this._super.included(app);
    app.import('node_modules/rison-node/js/rison.js', {
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
