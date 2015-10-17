angular.module('rcangular102', []).controller('pinfocontroller', function ($scope, PinfoService) {
    var self = this;

    self.personName = "";
    self.personAge = "";

    self.genre = [{desc: 'Pop Hits', value: 'pic.songsList.pop'},
        {desc: 'Rock Hits', value: 'pic.songsList.rock'},
        {desc: 'Rap Hits', value: 'pic.songsList.rap'}];

    self.songsList = {
        pop: [{name: 'Pop Song1', id: 'p1'}, {name: 'Pop Song2', id: 'p2'}],
        rock: [{name: 'Rock Song1', id: 'r1'}, {name: 'Rock Song2', id: 'r2'}],
        rap: [{name: 'Rap Song1', id: 'ra1'}, {name: 'Rap Song2', id: 'ra2'}]
    };

    self.genreSelectionSongs = self.songsList.pop;
    self.selectedSongsList = [];
    self.showSongs = [];
    self.allowExplicit = "Clean";


    self.submitSongs = function (allowExplicit) {
        self.showSongs = PinfoService.submitSongs(self.selectedSongsList, allowExplicit);

    }

    self.saveSelection = function (inputID) {

        self.selectedSongsList = PinfoService.saveSelection(self.selectedSongsList, self.genreSelectionSongs, self.songsList, inputID);


    }
});
