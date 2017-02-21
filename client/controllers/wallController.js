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
  $scope.submitComment = function(postID, newComment){
    console.log("comment = ", newComment);
    WallFactory.submitComment(postID, newComment, $scope.user.name, function(posts){
      $scope.posts = posts;
    });
  }
  $scope.signOut = function(){
    WallFactory.signOut();
    $scope.user = {};
  }

});
