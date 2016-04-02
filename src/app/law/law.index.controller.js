(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('LawIndexController', LawIndexController);

  /** @ngInject */
  function LawIndexController(decretos, $log) {
    var vm = this;
    vm.decretos = decretos;

    function init() {
      $log.log('Laws controller');
    }

    init();
  }
})();
