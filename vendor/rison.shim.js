(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['rison'],
      __esModule: true,
    };
  }

  define('rison', [], vendorModule);
})();

