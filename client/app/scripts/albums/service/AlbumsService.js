/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */


angular.module('audioPlayerApp')
       .factory('AlbumsService', ['$resource', function($resource) {

        return {

            /**
             * Search Artists will return the list of artist and each record will be an artists object.
             * @param artistName
             */
            getArtistAlbum : function(artistId, offsetVal, limitVal, callback) {

                    var albums = new $resource('https://api.spotify.com/v1/artists/:artistId/albums', {});
                    albums.get({artistId:artistId, limit : limitVal, offset : offsetVal, album_type:'single'}, function(data) {
                        callback(data);
                    });
             }
        };
}]);