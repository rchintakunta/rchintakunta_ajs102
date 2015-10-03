angular.module('rcangular102', [])
    .controller('uinfocontroller', function () {
        var self = this;
        self.details = {
            firstname: "Raghu",
            lastname: "Chintakunta",
            email: "crn@email.com"
        };

        self.masteruser = {};

        self.copyUser = function () {
            self.masteruser = angular.copy(self.details);
        };

        self.reset = function () {
            self.details = angular.copy(self.masteruser);
        };
    });