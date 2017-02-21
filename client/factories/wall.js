app.factory("WallFactory", function ($http) {
  var user = {};
   var posts = {};
   var factory = {};

   factory.show = function(callback){
     $http.get('/posts').then(function(data){
       posts = data.data
       callback(posts);
      })
   }
   factory.signIn = function(getuser){
     console.log("our user in factory is ", getuser);
     $http.post('/login', getuser).then(function(gotuser){
       user = gotuser.data;
     })
   }

   return factory;

});
