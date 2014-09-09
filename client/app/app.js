/*
Author : Shahm Nattarshah
Date : 9/8/2014
*/

angular.module('audioPlayerApp', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'infinite-scroll',
    'LocalStorageModule'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html'
        })
        .when('/album/:albumId/tracks', {
            templateUrl : 'app/views/tracks/tracks.html',
            controller : 'TracksCtrl'
        })
        .when('/artist/:artistId/albums', {
            templateUrl : 'app/views/albums/albums.html',
            controller : 'AlbumsCtrl'
        });

        //$locationProvider.html5Mode(true);
}]);