//Angular application
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    	
    	.when('/home',{
            templateUrl: "views/home.html",
            controller: "t_indexCtrl"
        })
      
        //Default
        .otherwise({
            redirectTo: '/home'
        })
});

//Index controller
app.controller('t_indexCtrl', function($scope){
	console.log('t_indexCtrl'); 

    $scope.text = "hola mundo cruel!!!";
  /*  $scope.changeColor = function(){
        console.log("function changeColor(this);");
    };*/
});


function changeColor(element){
    var color = $(element).attr("color");
    var obj = $(element).attr("element");
    $(obj).css("background-color",color);
    console.log("change "+color +" element "+obj);
};