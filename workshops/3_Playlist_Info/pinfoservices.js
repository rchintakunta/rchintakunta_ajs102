angular.module('rcangular102')

    .service('PinfoService', function () {
        this.submitSongs = function (selectedSongs, allowExplicit) {
            self.endList = [];
            self.showSongs = angular.copy(selectedSongs);
            for (var i = 0; i < self.showSongs.length; i++) {
                self.endList.push({
                    title: self.showSongs[i].name,
                    ExplicitSel: allowExplicit
                });
            };
            console.log(JSON.stringify(self.endList));
            return self.showSongs;
        };

        this.saveSelection = function (selectedSongsList, genreSelectionSongs, songsList, inputID) {
            if (genreSelectionSongs[inputID]) {
                for (var i = 0; i < songsList.pop.length; i++) {
                    if (inputID == songsList.pop[i].id) {
                        selectedSongsList.push({
                            name: songsList.pop[i].name,
                            id: songsList.pop[i].id
                        });
                    }
                    if (inputID == songsList.rock[i].id) {
                        selectedSongsList.push({
                            name: songsList.rock[i].name,
                            id: songsList.rock[i].id
                        });
                    }
                    if (inputID == songsList.rap[i].id) {
                        selectedSongsList.push({
                            name: songsList.rap[i].name,
                            id: songsList.rap[i].id
                        });
                    }
                }
            } else {
                for (var i = 0; i < selectedSongsList.length; i++) {
                    if (inputID == selectedSongsList[i].id) {
                        selectedSongsList.splice(i, 1);
                    }
                }
            }

            return selectedSongsList;
        }

    })
