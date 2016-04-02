(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(covers) {
    var vm = this;

    vm.awesomeThings = [{
      title: 'Leyes',
      url: 'laws',
      description: 'Consultar las leyes aprobadas o en proceso',
      logo: 'leyes.png'
    },
    {
      title: 'Votaciones',
      url: 'votes',
      description: 'Distribución de los votos por proyecto de ley',
      logo: 'group.png'
    },
    {
      title: 'Diputados',
      description: 'Listado de diputados propietarios y suplentes de la Asamblea Legislativa',
      url: 'deputies',
      logo: 'debate.png'
    }];

    vm.covers = covers;
  }
})();
