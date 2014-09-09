/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
.directive('ngxTile', function() {
        return {
            restrict : 'E',
            transclude : false,
            replace : true,
            scope : {
                id : "@",
                title : "@", // title
                image : "@", // thumbnail image
                type : "@", // data type album (single/...)
                tileType : "@", // album or artist
                url : "@" // url to poster image
            },
            template : '<div id=\"tile\"  class=\"col-lg-3 col-md-4 col-sm-6 col-xs-6 thumb\">' +
                            '<div class=\"thumbnail\" >' +
                                 '<a href=\"{{ url }}\">' +
                                    '<img class=\"img-responsive\" width="300" height="300" style="overflow-y: hidden" ng-src=\"{{image}}\" alt=\"{{ title }}\">' +
                                 '</a>' +
                                 '<div class=\"caption\">' +
                                      '<p>' +
                                         '<strong>{{title}} </strong>' +

                                          '<div ng-switch on=\"exist(id)\" style="margin-bottom: 40px">' +
                                                '<div ng-switch-when=\"true\">' +
                                                    '<img class=\"pull-right\" height=\"24\" width=\"24\" type=\"button\" src=\"app/assets/images/star.png\" ng-click=\"remove(id)\" />' +
                                                '</div>' +
                                                '<div ng-switch-when=\"false\">' +
                                                    '<img class=\"pull-right\" height=\"24\" width=\"24\" type=\"button\" src=\"app/assets/images/nostar.png\" ng-click=\"set(id)\" />' +
                                                '</div>' +
                                            '</div>' +
                                       '</p>' +
                                '</div>' +
                            '</div>' +
                       '</div>',

            controller : function($scope, localStorageService) {
                $scope.exist = function(id) {
                    return (localStorageService.get(id)) ? true : false;
                };

                $scope.set = function(id) {
                    if ($scope.exist()) {

                        localStorageService.remove(id);
                        return;
                    } else {
                        localStorageService.set(id, true);
                    }
                };

                $scope.remove = function(id) {
                   localStorageService.remove(id);
                };
            }
        };
    });