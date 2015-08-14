(function() {
  'use strict';

  angular
    .module('emailClient')
    .factory('emailService', emailService);

  /** @ngInject */
  function emailService($http) {
    var service = {
      getEmails: getEmails
    };

    return service;

    function getEmails() {
      return $http.get('app/api/emails.json');
    }
  }
})();
