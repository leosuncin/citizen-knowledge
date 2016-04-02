(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log) {
    var vm = this;

    function init() {
      $log.log('Login controller');
    }

    init();
  }
})();
