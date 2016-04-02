(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($log) {
    var vm = this;

    function init() {
      $log.log('Register controller');
    }

    init();

  }
})();
