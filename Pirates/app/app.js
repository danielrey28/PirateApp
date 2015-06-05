var app = angular.module('app', []);

app.controller('pirateController', ['$scope', '$http',  function ($scope, $http) {
    //Calls the Pirate API and expects a count of gold coins depending on how many pirates where entered/
    $scope.getBooty = function () {
       

        if ($scope.pirateCount > 1 && !angular.isUndefined($scope.pirateCount)) {
            $scope.loading = true;
            $scope.showBooty = false;
            $http.get("http://pirate.azurewebsites.net/api/Pirate/" + $scope.pirateCount)
        .then(function (response) {
            $scope.booty = "Yo ho! The original booty be " + response.data + " peices of gold!";
            $scope.showBooty = true;
        })
        .catch(function (err) {
            $scope.booty = "Something went wrong with the count...yarrr...";
        })
        .finally(function () {
            $scope.loading = false;
        });
        }
        else {
            $scope.showBooty = true;
            $scope.booty = "Yarr! Enter more than one pirate, matey!";
        }
        
    }
    
}]);