 var mainApp = angular.module("mainApp", ['ngRoute']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/measurement', {
               templateUrl: 'measurement.htm',
               controller: 'MeasurementController'
            }).
            
            when('/quotation', {
               templateUrl: 'quotation.htm',
               controller: 'QuotationController'
            }).

            when('/payment', {
               templateUrl: 'payment.htm',
               controller: 'PaymentController'
            }).

            when('/progress', {
               templateUrl: 'progress.htm',
               controller: 'ProgressController'
            }).
            
            
            otherwise({
               redirectTo: '/measurement'
            });
         }]);
         
         mainApp.controller('MeasurementController', function($scope) {
             $scope.message = "This MeasurementController will be used to display all the students";
         });
         
         mainApp.controller('QuotationController', function($scope) {
            $scope.message = "This QuotationController will be used to display all the students";
         });

        mainApp.controller('PaymentController', function($scope) {
            $scope.message = "This PaymentController will be used to display all the students";
         });

        mainApp.controller('ProgressController', function($scope) {
            $scope.message = "This ProgressController will be used to display all the students";
         });


         