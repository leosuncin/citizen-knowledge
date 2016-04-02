(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('LawShowController', LawShowController);

  /** @ngInject */
  function LawShowController(decreto, $log) {
    var vm = this;
    vm.decreto = decreto;

    function init() {
      $log.log('Law controller');
    }

    init();
  }
})();
