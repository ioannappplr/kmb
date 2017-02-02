var app = angular.module("MyApp", ['angularUtils.directives.dirPagination', 'ngRoute']);

app.config(
	function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'views/sources.html'}).
		when('/sources/:sourceName/stitle/:sourceTitle', {templateUrl: 'views/articles.html'}).
		otherwise({redirectTo: '/'});
});

app.controller("PostsCtrl", function($scope, $http) {
    
  $http.get('https://newsapi.org/v1/sources').
    success(function(data, status, headers, config) {
      $scope.posts = data.sources;
    }).
    error(function(data, status, headers, config) {
    });
});

app.controller("SourceCtrl", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http) {
	thisSource =  $routeParams.sourceName;
	$http.get('https://newsapi.org/v1/articles?source=' + thisSource + '&sortBy=top&apiKey=62cfb786dc8e44cb9b8a2aef7ef64488').
    success(function(data, status, headers, config) {
    	$scope.news = data.articles;
    	$scope.parentTitle = $routeParams.sourceTitle;
    }).
    error(function(data, status, headers, config) {
    });
}]);


