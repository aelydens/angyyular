(function(){
var app = angular.module('favoritelist', []);

app.controller('FavoriteListController', function($scope){
          $scope.thingName
          $scope.thingColor
          $scope.thingColor1
          $scope.activity
          $scope.personName
          $scope.showThis = true
          $scope.todo = {mostImportant:"exercise"};
          var names = [
            {"name":'Jani'},
            {"name":'Hege'},
            {"name":'Kai'},
            {"name":'More stuff'}
          ];

          $scope.names = names;

   });
})();
