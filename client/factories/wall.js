app.factory("WallFactory", function ($http, $location) {
  var user = {};
   var posts = {};
   var factory = {};

   factory.show = function(callback){
     $http.get('/posts').then(function(data){
       posts = data.data
       console.log(posts);
       callback(posts);
      })
   }
   factory.submitPost = function(message, userName, callback){
     $http.post('/createPost',{message: message, userName: userName}).then(function(data){
       if (!data.data.err){
         posts = data.data

         callback(posts);
       }
      })
   }
   factory.submitComment = function(id, comment, userName, callback){
     $http.post('/createComment',{_id: id, comment: comment, userName: userName}).then(function(data){
       if (!data.data.err){
         posts = data.data;
         callback(posts);
       }
      })
    }
   factory.signIn = function(getuser){
     console.log("our user in factory is ", getuser);
     $http.post('/login', {user:getuser}).then(function(gotuser){
       console.log(gotuser.data);
       user = gotuser.data;
       $location.path('/wall');
     })
   }
   factory.getUser = function(callback){
     console.log(user);
     callback(user);
   }
   factory.signOut = function(){
     user = {};
     $location.path('/');
   }

   return factory;

});
