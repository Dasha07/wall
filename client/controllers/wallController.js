app.controller('WallController', function (WallFactory, $scope){
  WallFactory.show(function(posts){
    $scope.posts = posts;
  })
  $scope.submitPost = function(){
    WallFactory.submitPost(function(posts){
      $scope.posts = posts;
    });
  }
  $scope.submitComment = function(postID){
    WallFactory.submitComment(postID, function(posts){
      $scope.posts = posts;
    });
  }
});
