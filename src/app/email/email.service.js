(function() {
  'use strict';

  angular
    .module('emailClient')
    .controller('EmailService', EmailService);

  /** @ngInject */
  function EmailService() {
    var service = {};
    return service;
  }
})();
