(function() {
  'use strict';

  describe('Email Service', function() {
    var emailService,
        http;

    beforeEach(module('emailClient'));

    beforeEach(inject(function(_emailService_, _$http_) {
      emailService = _emailService_;
      http = _$http_;
    }));

    describe('Get emails', function() {
      var url = 'app/api/emails.json';

      it('should get emails', function() {
        spyOn(http, 'get');

        emailService.getEmails();

        expect(http.get).toHaveBeenCalledWith(url);
      });
    });
  });
})();
