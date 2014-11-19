angular.module('testApp').controller('testController', function ($scope) {
	console.log("testController");
	$scope.toDoList = ['clean room', 'buy butter', 'send mail'];
	$scope.testVar = 'Hello World!';
});

