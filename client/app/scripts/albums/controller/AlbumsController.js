/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
    .controller('AlbumsCtrl', ['$scope','AlbumsService', '$routeParams', function($scope, AlbumsService, $routeParams) {

        $scope.artistAlbums = [];
        $scope.limit = 25;
        $scope.offset = 0;
        $scope.artistId = "";

        /**
         * Get the artist albums based on the artistId
         */
        $scope.getArtistAlbums = function(isFirstPage) {

            if (isFirstPage) {
                $scope.offset = 0;
                $scope.artistAlbums = [];
                $scope.artistId = $routeParams.artistId;
            }

            $scope.artistId = $routeParams.artistId ? $routeParams.artistId : $scope.artistId;

            if ($scope.artistId === '') {
                $scope.artistAlbums = [];
                console.log('Artist albums sets empty as the artistId not passed in $routeParam');
            } else {

                AlbumsService.getArtistAlbum($scope.artistId, $scope.offset, $scope.limit, function(data) {
                    for (var i = 0 ; i < data.items.length; i++) {
                        $scope.artistAlbums.push(data.items[i]);
                    }

                    $scope.offset = ($scope.offset + $scope.limit) + 1;
                });
            }
        };
}]);