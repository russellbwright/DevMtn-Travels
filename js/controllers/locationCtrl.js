angular.module('devmtnTravel').controller('locationCtrl', function ($scope, mainSrv, $state) {
    $scope.test = "ya bad";
    $scope.locationInfo = mainSrv.travelInfo
});