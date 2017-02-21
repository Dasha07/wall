app.controller('LoginController', function (WallFactory, $scope){
  $scope.signIn = function(){
    WallFactory.signIn($scope.user.name);
  }
});
