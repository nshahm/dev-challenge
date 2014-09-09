/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
    .factory('ArtistsService', ['$resource', function($resource) {

    return {
        /**
         * Search Artists will return the list of artist and each record will be an artists object.
         * @param artistName
         */
        searchArtists : function(artistName, limitVal, offsetVal, callback) {

            var artists = new $resource('https://api.spotify.com/v1/search', {});
            artists.get({q:artistName, type:'artist', limit : limitVal, offset : offsetVal}, function(data) {
                callback(data);
            });
        }
    };
}]);