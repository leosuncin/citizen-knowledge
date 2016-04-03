(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('PlenaryShowController', PlenaryShowController);

  /** @ngInject */
  function PlenaryShowController(plenaria, PlenaryService, $log) {
    var vm = this, i = 0, aux = [];
    vm.plenaria = plenaria;
    vm.resumen = PlenaryService.getSummary(plenaria.votos);
    vm.labels = Object.keys(vm.resumen).map(function(partido) {
      aux[i] = vm.resumen[partido.trim()];
      i++;
      return partido.trim();
    });
    vm.series = ['Sí', 'No', 'Abstención', 'No voto'];
    vm.data = aux[0].map(function(col, i) {
      return aux.map(function(row) {
        return row[i];
      })
    });

    function init() {
      $log.log('Plenary controller');
    }

    init();
  }
})();
