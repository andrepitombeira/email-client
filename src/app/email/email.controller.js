(function() {
  'use strict';

  angular
    .module('emailClient')
    .controller('EmailController', EmailController);

  /** @ngInject */
  function EmailController(emailService) {
    var vm = this,
        readFilter = {read: false};

    vm.emails = [];
    vm.selectedEmail = {};
    vm.readFilter = readFilter;

    vm.selectEmail = selectEmail;
    vm.toggleReadFilter = toggleReadFilter;

    activate();

    function activate() {
      emailService.getEmails().then(function(res) {
        vm.emails = res.data.emails;
      });
    }

    function selectEmail(email) {
      vm.selectedEmail = email;
    }

    function toggleReadFilter() {
      vm.readFilter = angular.isDefined(vm.readFilter.read) ? {} : {read: false};
    }
  }
})();
