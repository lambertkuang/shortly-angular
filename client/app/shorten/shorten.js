angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    console.log('STUFF STUFF');
    Links.addLink()
      .then(function(link){
        //do something
        console.log('LINK -----------> ' + link);
      });
  };

});
