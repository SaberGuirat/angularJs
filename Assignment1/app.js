(function () {
  "use strict";
  angular
    .module("myApp", [])
    .controller("solutionController", solutionController);

  solutionController.$inject = ["$scope"];

  function solutionController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.check = function () {
      if (!$scope.dishes) return ($scope.message = "Please enter data first");
      if ($scope.dishes.split(",").length <= 3)
        return ($scope.message = "Enjoy!");
      else return ($scope.message = "Too much!");
    };
  }
})();
