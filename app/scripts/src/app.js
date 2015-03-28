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
});


//Directive for Slider component
app.directive('sliderChangeBgc', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        data1: "="
    },
    templateUrl: 'views/ui-components/sliderChangeBgc.html'
  };
});

//Directive for access component
app.directive('access', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        data: "="
    },
    templateUrl: 'views/ui-components/access.html'
  };
});

//Directive for information box component
app.directive('boxInformation', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        data: "="
    },
    templateUrl: 'views/ui-components/boxInformation.html'
  };
});

// Directive for information backgroung-image box 
app.directive('boxInformationBgi', function() {
  return {
    restrict: "C",
    transclude:true,
    scope: {
        data: "="
    },
    templateUrl: 'views/ui-components/boxInformationBgi.html'
  };
});



//Directive for plane slider component
app.directive('sliderPlane', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        title: '@',
        description: '@',
        options: "="
    },
    link: function(scope, element, attrs){
        console.log("link slide plane ");

        scope.data = {
        articles: [
            { 
                "title1": "nombre articulo" , 
                "title2": "tedakl{sdnma{fls" , 
                "img": "resources/img/article1.jpg"
            }, 
            { 
                "title1": "nombre articulo" , 
                "title2": "tedakl{sdnma{fls" , 
                "img": "resources/img/article2.jpg"
            },
             { 
                "title1": "nombre articulo" , 
                "title2": "tedakl{sdnma{fls" , 
                "img": "resources/img/article3.jpg"
            }, 
            { 
                "title1": "nombre articulo" , 
                "title2": "tedakl{sdnma{fls" , 
                "img": "resources/img/article4.jpg"
            }
        ]
    }
        console.log(scope);
    },
    templateUrl: 'views/ui-components/sliderPlane.html'
  };
});



/*fn jquery*/

function changeColor(element){
    var color = $(element).attr("color");
    var obj = $(element).attr("element");
    $(obj).css("background-color",color);
    console.log("change "+color +" element "+obj);
};

