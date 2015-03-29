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

//Directive for maps
app.directive('maps', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        data: "="
    },
    templateUrl: 'views/ui-components/maps.html',
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
        title3: "@",
        icontext: "@",
        img:"@",
        classopacity:  "@",
        class1: "@",
        class2: "@",
        class3: "@",
        class4: "@",
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
                "img": "resources/img/article1.jpg",
                "icontext": "&",
                "class1": "title title1 font-monteserrat",
                "class2": "title  fonts-roboto icon-text",
                "class3": "title title2 fonts-roboto",
                "classopacity": "red",

            }, 
            { 
                "title1":   "Beauty" , 
                "title2":   "for two",
                "title3":   "THIS MONTH, WE GIVE YOU A BEAUTY SESSION FOR THE PURCHASE ANOTHER THER. 70C." , 
                "img":      "resources/img/article2.jpg",
                "class1":   "font-droid-serif f60 fw500 t1",
                "class3":   "title f22 fonts-roboto t2 ls2 ",
                "class4":   "title t3 f18 ls4",
                "classopacity": "green-1",
            },
             { 
                "title1": "ESCAPADA" , 
                "title2": "ACTIVA'T 20C.",
                "img": "resources/img/article3.jpg",
                "class1":   "title title1 font-monteserrat",
                "class3":   "title  fonts-roboto t4 ",
                "classopacity": "violet",
            }, 
            { 
                "title1": "nombre articulo" , 
                "title2": "",
                "title3": "tedakl{sdnma{fls" , 
                "img": "resources/img/article4.jpg",
                "classopacity": "blue",
            }, 
            { 
                "maps": "<maps></maps>",
            }, 
            { 
                "sci": "<slider-change-information></slider-change-information>",
            }/*, 
            { 
                "other-type": true,
                "which-type": "<slider-information-change></slider-information-change>"
            }, 
            { 
                "other-type": true,
                "which-type": "<follow-us></follow-us>"
            }*/
        ]
    }
        console.log(scope);
    },
    templateUrl: 'views/ui-components/sliderPlane.html',
    replace:true
  };
});


// Directive for information box-maps
app.directive('boxMaps', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        type: "@"
    },
    templateUrl: 'views/ui-components/boxMaps.html',
    replace:true,
    link: function(){
        console.log("boxMaps");
    }
  };
});


// Directive for information slider-change-information
app.directive('sliderChangeInformation', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
        type: "@"
    },
    templateUrl: 'views/ui-components/sliderChangeInformation.html',
    replace:true,
    link: function(){
        console.log("boxMaps");
    }
  };
});




/*fn jquery*/

function changeColor(element){
    var color = $(element).attr("color");
    var obj = $(element).attr("element");
    $(obj).css("background-color",color);
    console.log("change "+color +" element "+obj);
};
