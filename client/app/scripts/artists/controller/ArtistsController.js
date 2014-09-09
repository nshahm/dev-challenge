/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
    .controller('ArtistsCtrl', ['$scope','ArtistsService','localStorageService', function($scope, ArtistsService, localStorageService) {

        // artists result
        $scope.artists = [];

        $scope.limit = 25;
        $scope.offset = 0;
        // artist object
        $scope.artistsearchText = '';

        /**
         * Search Artist based on artist name
         */
        $scope.searchArtists = function (isFirstPage) {

            if (isFirstPage) {
                $scope.offset = 0;
                $scope.artists = [];
            }

            if ($scope.artistsearchText) {
                ArtistsService.searchArtists($scope.artistsearchText, $scope.limit, $scope.offset, function(data) {

                    for (var i = 0 ; i < data.artists.items.length; i++) {
                        $scope.artists.push(data.artists.items[i]);
                    }
                    $scope.offset = ($scope.offset + $scope.limit) + 1;
                });
            }
        };
}]);