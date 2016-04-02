(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('DeputyService', DeputyService);

  /** @ngInject */
  function DeputyService($q) {
    var data = [
      {
        'id': 0,
        'nombre_completo': 'Ana Vilma Albanez de Escobar',
        'departamento': '	San Salvador',
        'partido': 'ARENA',
        'correo': 'anav.escobar@asamblea.gob.sv',
        'suplente': 'Patricia María Salazar de Rosales',
        'comisiones': [
          {
            'nombre': 'Comisión para estudiar las implicaciones de las sentencias emitidas por la Sala de lo Constitucional de la Corte Suprema de Justicia, sobre las inconstitucionalidades de algunos artículos de la Ley General de Electricidad y su Reglamento',
            'cargo': 'Secretaria'
          },
          {
            'nombre': 'Comisión de Hacienda y Especial del Presupuesto',
            'cargo': 'Vocal'
          }
        ],
        'trayectoria': [
          {
            'cargo': 'Diputada Propietaria a la Asamblea Legislativa por el departamento de San Salvador',
            'periodo': 'Mayo 2015 - Abril 2018'
          },
          {
            'cargo': 'Diputada Propietaria a la Asamblea Legislativa por el departamento de San Salvador',
            'periodo': '2012-2015'
          }
        ],
        foto: 'http://asamblea.gob.sv/pleno/pleno-legislativo/ana-vilma-albanez-de-escobar/diputado_fotografia'
      }
    ];

    this.getDeputies = getDeputies;
    this.getDeputy  = getDeputy;

    function getDeputies() {
      return $q.resolve(data);
    }

    function getDeputy(id) {
      return $q.resolve(data[id]);
    }
  }

})();
