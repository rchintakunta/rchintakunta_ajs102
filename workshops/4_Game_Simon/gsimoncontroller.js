angular.module('rcangular102', []).controller('gsimoncontroller', function ($scope, $timeout, $interval) {
    var self = this;
    self.userClickedColors = [];
    self.simonClickedColors = []
    self.simonClickedColorOnlyArray = [];
    self.userClickedColorOnlyArray = [];
    self.timesUserClicked = 0;
    self.timesSimonClicked = 0;
    self.whenSimonClicked = 0;
    $scope.whenUserClickedDone = 0;
    self.gameStarted = 0;
    self.score = 0;
    self.messageSimon = "";
    self.messageUser = "";
    var availableColors = ['red', 'blue', 'green', 'yellow'];
    var initializing = true

    self.getUserColorClicked = function (colorClicked) {
        self.messageSimon = "";
        self.messageUser = "User is Clicking";
        self.timesUserClicked++;


        if (self.timesUserClicked <= self.timesSimonClicked) {
            var colorDivElement = '#' + colorClicked + 'Box';
            var myEl = angular.element(document.querySelector(colorDivElement));
            myEl.removeClass(colorClicked);
            $timeout(function () {
                myEl.addClass(colorClicked);
            }, 100);
            self.userClickedColorOnlyArray.push(colorClicked);
            var simonColors = self.simonClickedColors[self.timesUserClicked - 1].colors;

            if (colorClicked != simonColors[self.timesUserClicked - 1]) {

                myEl.addClass(colorClicked);

                self.score = 0;
                self.simonClickedColorOnlyArray = [];
                self.timesSimonClicked = 0
                self.userClickedColorOnlyArray = [];
                self.gameStarted = 0;
                self.simonClickedColors = [];
                self.messageSimon = "";
                self.messageUser = "";
                alert('Game Fail');

            }
        } else {
            alert('can not click more thank simon\'s click');
            $scope.whenUserClickedDone = ++$scope.whenUserClickedDone;

        }

        if (self.timesUserClicked == self.timesSimonClicked) {
            self.score++;
            $scope.whenUserClickedDone = --$scope.whenUserClickedDone;
        }

    }

    self.getSimonColorClicked = function (old, colorClicked) {

        self.userClickedColorOnlyArray = [];
        self.timesUserClicked = 0;
        var colorDivElement = '#' + colorClicked + 'Box';
        var myEl = angular.element(document.querySelector(colorDivElement));
        myEl.removeClass(colorClicked);
        $timeout(function () {
            myEl.addClass(colorClicked);
        }, 100);

        if (old == 0) {

            self.simonClickedColorOnlyArray.push(colorClicked);
            self.simonClickedColors.push({
                whichTime: self.timesSimonClicked,
                colors: self.simonClickedColorOnlyArray

            });
            console.log('Simon: ', JSON.stringify(self.simonClickedColorOnlyArray));
            self.timesSimonClicked++;
            self.whenSimonClicked = 1;
            self.timesUserClicked = 0;
            self.userClickedColorOnlyArray = [];
        }
    }

    self.startGame = function () {
        self.gameStarted = 1;
        var colorTobeClicked = availableColors[Math.floor(Math.random() * availableColors.length)];
        self.getSimonColorClicked(0, colorTobeClicked);
        self.messageSimon = "";
        self.messageUser = "User Chance to Click";
    }

    $scope.$watch('whenUserClickedDone', function (newVal, oldVal) {
        if (initializing) {
            $timeout(function () {
                initializing = false;
            });
        } else {
            if (self.timesSimonClicked != 0) {
                self.messageUser = "";
                self.messageSimon = "Simon is Clicking";
                console.log('simon clicking');
                var index = 0;
                $interval(function (index) {
                    console.log('clicking old colors');

                    self.getSimonColorClicked(1, self.simonClickedColorOnlyArray[index]);
                    index++;

                    if (index == self.simonClickedColorOnlyArray.length) {
                        console.log('index: ', index);
                        $timeout(function (index) {
                            console.log('clicking new color');
                            self.startGame();
                        }, 2000, true);

                    }
                }, 2000, self.simonClickedColorOnlyArray.length);

            }
        }
    }, true);


});
