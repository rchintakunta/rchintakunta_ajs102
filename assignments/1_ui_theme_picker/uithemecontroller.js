angular.module('rcangular102', []).controller('uithemecontroller', function () {
    var self = this;
    self.background = {'background-color': 'white'};
    self.bgcolor = 'none';
    self.items = [{
        parent: "Personal",
        subs: [
            {sub: "PDocs"},
            {sub: "PFiles"}
        ]
    }, {
        parent: "Work",
        subs: [
            {sub: "WDocs"},
            {sub: "WFiles"}
        ]
    }, {
        parent: "Trip",
        subs: [
            {sub: "TripDocs"}
        ]
    }];

    self.addFileFn = function (toAddFile, toAddFolder) {
        console.log("File to add: " + toAddFile);
        console.log("folder selected to add: " + toAddFolder);
        for (var i = 0; i < self.items.length; i++) {
            if (toAddFolder == self.items[i].parent) {
                console.log("Adding File: \"" + toAddFile + "\" to Folder: " + self.items[i].parent);
                self.items[i].subs.push({sub: toAddFile})
            }

        }
    }
})