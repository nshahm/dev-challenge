/*
 Author : Shahm Nattarshah
 */

angular.module('audioPlayerApp')
    .controller('LocalStorageCtrl', ['$scope', 'localStorageService', function($scope, localStorageService) {

        /**
         *
         * @param id
         * @returns {boolean}
         */
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
}]);