/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
    .controller('TracksCtrl', ['$scope','TracksService', '$routeParams', function($scope, TracksService, $routeParams) {

        $scope.albumTracks = [];

        /**
         * Get the artist tracks based on the album
         */
        $scope.getAlbumTracks = function() {

            var albumId = $routeParams.albumId;

            if (albumId === '') {

                $scope.albumTracks = [];
                console.log('Albums tracks set empty when albumId not passed in $routeParam');
            } else {

                TracksService.getAlbumTracks(albumId, function(data) {
                    $scope.albumTracks = data.items;
                });
            }
        };
    }]);