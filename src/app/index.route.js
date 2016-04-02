(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('law', {
        url: '/law/:id',
        templateUrl: 'app/law/law.show.html',
        controller: 'LawShowController',
        controllerAs: 'law',
        resolve: {
          /** @ngInject */
          decreto: function(LawService, $stateParams) {
            return LawService.getLaw($stateParams.id).then(function(decreto) {
              return decreto;
            });
          }
        }
      })
      .state('laws', {
        url: '/law',
        templateUrl: 'app/law/law.index.html',
        controller: 'LawIndexController',
        controllerAs: 'laws',
        resolve: {
          /** @ngInject */
          decretos: function(LawService) {
            return LawService.getLaws().then(function(decretos) {
              return decretos;
            });
          }
        }
      })
      .state('deputy', {
        url: '/deputy/:id',
        templateUrl: 'app/deputy/deputy.show.html',
        controller: 'DeputyShowController',
        controllerAs: 'deputy',
        resolve: {
          /** @ngInject */
          diputado: function(DeputyService, $stateParams) {
            return DeputyService.getDeputy($stateParams.id).then(function(diputado) {
              return diputado;
            });
          }
        }
      })
      .state('deputies', {
        url: '/deputy',
        templateUrl: 'app/deputy/deputy.index.html',
        controller: 'DeputyIndexController',
        controllerAs: 'deputies',
        resolve: {
          /** @ngInject */
          diputados: function(DeputyService) {
            return DeputyService.getDeputies().then(function(diputados) {
              return diputados;
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
