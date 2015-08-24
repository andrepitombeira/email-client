(function() {
  'use strict';

  describe('Email Controller', function() {
    var EmailController,
        emailService,
        scope,
        rootScope,
        q;

    beforeEach(module('emailClient'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _emailService_, _$q_) {
      rootScope = _$rootScope_;
      scope = rootScope.$new();
      emailService = _emailService_;
      q = _$q_;

      spyOn(emailService, 'getEmails').and.returnValue(q.when({data:[]}));

      EmailController = _$controller_('EmailController', {
        scope: scope
      });
    }));

    describe('selectEmail function', function() {
      var email;

      beforeEach(function() {
        email = {
          name: 'name'
        };
      });

      it('should select email', function() {
        EmailController.selectedEmail = null;

        EmailController.selectEmail(email);

        expect(EmailController.selectedEmail).toBe(email);
      });
    });

    describe('toggleReadFilter function', function() {

      it('should activate read filter', function() {
        EmailController.readFilter = {};

        EmailController.toggleReadFilter();

        expect(EmailController.readFilter.read).toBeDefined();
      });

      it('should deactivate read filter', function() {
        EmailController.readFilter = {read: false};

        EmailController.toggleReadFilter();

        expect(EmailController.readFilter.read).not.toBeDefined();
      });
    });

    describe('activate function', function() {
      var res,
          emails;

      beforeEach(function() {
        emails = [{id:1}, {id: 2}, {id: 3}];
        res = {
          data: {
            emails: emails
          }
        };

        emailService.getEmails.calls.reset();
        emailService.getEmails.and.returnValue(q.when(res));
      });

      it('should retrieve emails', function() {
        EmailController.activate();

        expect(emailService.getEmails).toHaveBeenCalled();
        scope.$apply();
        expect(EmailController.emails).toEqual(emails);
      });
    });
  });
})();
