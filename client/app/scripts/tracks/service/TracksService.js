/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
    .factory('TracksService', ['$resource', function($resource) {

    return {
        /**
         * Get all the tracks for a particular album
         * @param artistName
         */
        getAlbumTracks : function(albumId, callback) {

            var tracks = new $resource('https://api.spotify.com/v1/albums/:albId/tracks', {});
            tracks.get({albId:albumId, limit : 20}, function(data) {
                callback(data);
            });
        }
    };
}]);