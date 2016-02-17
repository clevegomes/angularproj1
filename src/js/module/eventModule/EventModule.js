/**
 * Created by Cleve on 2/17/16.
 */

angular.module('eventModule',[])
/**
 * Sharing data use factory
 */
    .factory('MainTitle',[function(){

        return {
            title: "Hello world! This is HTML5 Boilerplate."
        };
    }])
.config([function(){
        console.log('EventConfig');
    }])
.run([function(){
        console.log('EventRun');
    }])
.controller('EventCtrl', ['$scope','MainTitle', function ($scope,MainTitle) {

        $scope.mainTitle = MainTitle.title;
        $scope.index  =0;
        $scope.namelist=[
            {
                gId:1,
                firstname:"Jack",
                lastname:"Gomes",
                classSel:0
            },
            {
                gId:2,
                firstname:"Freda",
                lastname:"Gomes",
                classSel:0
            },
            {
                gId:5,
                firstname:"Bean",
                lastname:"Gomes",
                classSel:0
            },
            {
                gId:4,
                firstname:"Hello",
                lastname:"Gomes",
                classSel:0
            },
            {
                gId:3,
                firstname:"Cleve",
                lastname:"Gomes",
                classSel:0
            }
        ];

        $scope.setIndex = function(val,selitem)
        {
            selitem.classSel = val;
//            $scope.index = val;
        }
    }])
    .controller('NestedCont',['$scope',function($scope)
    {
        console.log('NestedCont Controller very bad practice');
        //Using controller object instead of using scope object  .. just to know..
       this.age = 25;
       $scope.college = "London University";
    }]);


