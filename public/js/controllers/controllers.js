var app = angular.module('Licenta')
    app.controller('HomepageCtrl', ['$scope','$window', '$routeParams', '$filter', '$http', 'AIService', function ($scope, $window, $routeParams, $filter, $http, AIService) {

        $scope.dataFromBack = [];

        $scope.sub = function () {
            $http.post('/view', $scope.parentData).
                success(function (data) {
                    $scope.dataFromBack.push(data);
                    console.log($scope.dataFromBack);
                    console.log($scope.parentData);
                    var target = document.getElementById('target');
                    var firstElem = angular.element("<div class='parent' ng-model='parentData.desc'>"+ $scope.parentData.desc +"</div>");
                    angular.element(target).append(firstElem);
                    $scope.jsonObj = [];
                    data.forEach(function (value) {
                        var newEle = angular.element("<div class='red' ng-click='sub()' >"+ value +"</div>");
                        angular.element(target).append(newEle);

                        var id = value;
                        var name = value;
                        item = {}
                        item ["id"] = id;
                        item ["name"] = name;
                       $scope.jsonObj.push(item);
                    });
                    $scope.vm = {};
                        $scope.vm.Courses = $scope.jsonObj;
                        $scope.OpenCourse = function(courseId) {
                            $window.alert("Called " + courseId);
                        }
                        console.log("posted successfully course");
                    console.log($scope.jsonObj);
                    console.log("posted successfully");

                }).error(function (data) {
                    console.error("error in posting");
                })
        };
            $scope.sub2 = function () {
            $http.post('/ceva', $scope.child).
                success(function (data) {
                    $scope.jsonObj = [];
                    data.forEach(function (value) {
                        var id = value;
                        var name = value;
                        item = {}
                        item ["id"] = id;
                        item ["name"] = name;
                       $scope.jsonObj.push(item);
                    });
                    $scope.vm = {};
                        $scope.vm.Courses = $scope.jsonObj;
                        $scope.OpenCourse = function(courseId) {
                            $window.alert("Called " + courseId);
                        }
                        console.log("posted successfully course");
                        console.log($scope.jsonObj);
                        console.log("posted successfully");

                }).error(function (data) {
                    console.error("error in posting");
                })
        };



        //ceva.$inject = ['$scope'];
        //$('#jstree').jstree({ 'core' : {
        //    'data' : [
        //       {
        //         'text' : 'Result 1',
        //         'state' : {
        //           'opened' : true,
        //           'selected' : true
        //         },
        //         'children' : [
        //             {
        //                 'text': 'Result 1.1',
        //                 'state': {
        //                     'opened': true,
        //                     'selected': true
        //                 },
        //                 'children': [
        //                     {
        //                         'text': 'Result 1.1.1',
        //                         'state': {
        //                             'opened': true,
        //                             'selected': true
        //                         },
        //                         'children': [
        //                             {
        //                                 'text': 'Result 1.1.1.1',
        //                                 'state': {
        //                                     'opened': true,
        //                                     'selected': true
        //                                 },
        //                                 'children': [
        //                                     {
        //                                         'text': 'Result 1.1.1.1.1',
        //                                         'state': {
        //                                             'opened': true,
        //                                             'selected': true
        //                                         },
        //                                     },
        //                                     'Result 1.1.1.1.2'
        //                                 ]
        //                             },
        //                             {
        //                                 'text': 'Result 1.1.1.2',
        //                                 'state': {
        //                                     'opened': true,
        //                                     'selected': true
        //                                 },
        //                                 'children': [
        //                                     {
        //                                         'text': 'Result 1.1.1.2.1',
        //                                         'state': {
        //                                             'opened': true,
        //                                             'selected': true
        //                                         },
        //                                     },
        //                                     'Result 1.1.1.2.2'
        //                                 ]  
        //                             }, 
        //                             'Result 1.1.1.3'
        //                         ]
                             
        //                     },
        //                     'Result 1.1.2'
        //                 ]},
        //           'Result 1.2'
        //         ]
        //       },

        //       {
        //           'text': 'Result 2',
        //           'state': {
        //               'opened': true,
        //               'selected': true
        //           },
        //           'children': [
        //               { 'text': 'Result 2.1' },
        //               'Result 2.2'
        //           ]
        //       }
        //    ]
        //} 
        //});
        //$('#examples').jstree({
        //    'core': {
        //        'data': [
        //            'Simple root node',
        //            {
        //                'text': 'Root node 2',
        //                'state': {
        //                    'opened': true,
        //                    'selected': true
        //                },
        //                'children': [
        //                    { 'text': 'Child 1' },
        //                    'Child 2'
        //                ]
        //            }
        //        ]
        //    }
        //});

        

    }]);
//function BasicCtrl($scope) { };

// EOF
    
   