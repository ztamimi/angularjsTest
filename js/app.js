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

angular.module('testApp').controller('testController', function ($scope) {
	console.log("testController");
	$scope.toDoList = ['clean room', 'buy butter', 'send mail'];
	$scope.testVar = 'Hello World!';
});
**
