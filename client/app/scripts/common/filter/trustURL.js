/*
 Author : Shahm Nattarshah
 Date : 9/8/2014
 */

angular.module('audioPlayerApp')
    .filter('trustURL', function($sce) {
       return function(url) {
         return $sce.trustAsResourceUrl(url);
       };
    });