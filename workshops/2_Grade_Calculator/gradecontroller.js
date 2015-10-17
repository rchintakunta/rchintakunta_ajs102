angular.module('rcangular102', []).controller('gradecontroller', function ($scope, AssignmentFactory, AssignmentService) {
        var self = this;
        self.studentName="";
        self.assignmentList=[];
        self.avg="";
        self.grade="";
        self.status="";

        self.AddAssignment = function(name, score){
            self.AssignmentObj = new AssignmentFactory(name, score);
            console.log(self.AssignmentObj);
            self.assignmentList.push(self.AssignmentObj);
            self.avg = AssignmentService.calculateAvg(self.assignmentList);
            self.grade = AssignmentService.calculateGrade(self.avg);
            self.status= AssignmentService.calculateStatus(self.grade);
            }

    });
