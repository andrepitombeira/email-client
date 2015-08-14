(function() {
  'use strict';

  angular
    .module('emailClient')
    .controller('EmailController', EmailController);

  /** @ngInject */
  function EmailController() {
    var vm = this;

    activate();

    function activate() {}
  }
})();
