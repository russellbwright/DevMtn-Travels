angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $state, $state) {
    $scope.test = "ya bad";
    
    $scope.funId = mainSrv.getfunId($state.params.id);

});