angular.module('Locuslens', [
  'ngRoute',
  'mobile-angular-ui',
  'Locuslens.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});