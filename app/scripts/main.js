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
});


//Directive for Slider component
app.directive('sliderChangeBgc', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        data1: "="
    },
    templateUrl: 'views/ui-components/sliderChangeBgc.html',
    replace: true
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
    templateUrl: 'views/ui-components/access.html',
    replace:true
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
    templateUrl: 'views/ui-components/boxInformation.html',
    replace:true
  };
});

// Directive for information backgroung-image box 
app.directive('boxInformationBgi', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        title1: "@",
        title2: "@",
        icontext: "@",
        img:"@",
        class1: "@",
        class2: "@",
        class3: "@",
        type: "@"
    },
    templateUrl: 'views/ui-components/boxInformationBgi.html',
    replace:true,
    link: function(){
        console.log("boxInformationBgi");
    }
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
                "title1": "CELEBRATION" , 
                "title2": "Sensual",
                "title3": "Sensual" , 
                "img": "resources/img/article1.jpg",
                "icontext": "&"
            }, 
            { 
                "title1": "Beauty" , 
                "title2": "for tow",
                "title3": "THIS MONTH, WE GIBE YOU A BEAUTY SESSION FOR THE PURCHASE ANOTHER THER. 70C." , 
                "img": "resources/img/article2.jpg",
                "icontext": "$"
            },
             { 
                "title1": "ESCAPADA" , 
                "title2": "ACTIVA'T 20C.",
                "title3": "tedakl{sdnma{fls" , 
                "img": "resources/img/article3.jpg"
            }, 
            { 
                "title1": "nombre articulo" , 
                "title2": "",
                "title3": "tedakl{sdnma{fls" , 
                "img": "resources/img/article4.jpg"
            }, 
            { 
                "title1": "nombre articulo" , 
                "title2": "",
                "title3": "tedakl{sdnma{fls" , 
                "img": "resources/img/article4.jpg"
               /* "other-type": true,
                "which-type": "<maps></maps>"*/
            }, 
            { 
                "other-type": true,
                "which-type": "<maps></maps>"
            }, 
            { 
                "other-type": true,
                "which-type": "<slider-information-change></slider-information-change>"
            }, 
            { 
                "other-type": true,
                "which-type": "<follow-us></follow-us>"
            }
        ]
    }
        console.log(scope);
    },
    templateUrl: 'views/ui-components/sliderPlane.html',
    replace:true
  };
});


/*fn jquery*/

function changeColor(element){
    var color = $(element).attr("color");
    var obj = $(element).attr("element");
    $(obj).css("background-color",color);
    console.log("change "+color +" element "+obj);
};
