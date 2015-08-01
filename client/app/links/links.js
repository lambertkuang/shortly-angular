angular.module('shortly.links', [])
  .controller('LinksController',function ($scope, Links) {
    $scope.data = {
      links:[]
    };
    $scope.getLinks = function() {
      Links.getLinks()
        .then(function(links){
          $scope.data.links = links;    
        })
    };
    $scope.getLinks();

    $scope.testing = function(){
      console.log('WORKING!!!!!!');
    }
  });
