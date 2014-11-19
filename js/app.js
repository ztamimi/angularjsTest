angular.module('testApp', ['ngRoute']);

angular.module('testApp').config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'testController',
				templateUrl: 'views/view1.html'
			})
		.when('/view2',
			{
				controller: 'testController',
				templateUrl: 'views/view2.html'
			})
		.otherwise({redirectTo: '/' });
});

