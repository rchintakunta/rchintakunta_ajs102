angular.module('rcangular102')
   .factory('AssignmentFactory', function(){

        function Assignment(assignmentName, assignmentScore){
            this.assignmentName = assignmentName;
            this.assignmentScore = assignmentScore;
        }
        return Assignment;


    })

    .service('AssignmentService', function() {
        var self = this;
        self.avg=0;
        self.grade="";
        self.status="";
        this.calculateAvg = function(assignmentArray) {
            var avg = 0;
            var sum = 0;

            for (var i = 0; i < assignmentArray.length; i++) {
                sum = sum + parseInt(assignmentArray[i].assignmentScore);
                console.log("assignmentArray[i].assignmentScore: "+assignmentArray[i].assignmentScore);
                console.log("sum: "+sum);
            }

            self.avg= (sum / assignmentArray.length);
            return self.avg;
        }

        this.calculateGrade = function(avg){
            if (avg>=90){
                self.grade="A";
            }else if (avg>=70){
                self.grade="B";
            }else if (avg>=60){
                self.grade="C"
            }else if (avg>=50){
                self.grade="D";
            }else {
                self.grade="F";
            }

            return self.grade;
        }

        this.calculateStatus = function(grade){
            if (grade=="F"){
                self.status="Fail";
            }else {
                self.status="Pass";
            }

            return self.status;
        }
    })
