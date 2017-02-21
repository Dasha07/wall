app.controller('WallController', function (WallFactory, $scope){
  WallFactory.getUser(function(user){
    $scope.user= user;
  })
  WallFactory.show(function(posts){
    $scope.posts = posts;
  })
  $scope.submitPost = function(){
    WallFactory.submitPost($scope.message, $scope.user.name, function(posts){
      $scope.posts = posts;
    });
  }
  $scope.submitComment = function(postID, index){
    console.log("comment = ", $scope.newComment);
    WallFactory.submitComment(postID, $scope.newComment, $scope.user.name, function(posts){
      $scope.posts = posts;
    });
  }
  $scope.signOut = function(){
    WallFactory.signOut();
    $scope.user = {};
  }

});
