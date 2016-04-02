(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('LawService', LawService);

  /** @ngInject */
  function LawService() {
    var data = [
      {
        'nombre_completo': 'Ana Vilma Albanez de Escobar',
        'departamento': '	San Salvador',
        'partido': 'ARENA',
        'correo': 'anav.escobar@asamblea.gob.sv',
        'tipo_documento': 'Decretos',
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
            'inicio': '2015-05-01T06:00:00.000Z',
            'fin': '2018-04-01T06:00:00.000Z'
          }
        ]
      }
    ];

    this.getLaws = getLaws;
    this.getLaw  = getLaw;

    function getLaws() {
      return data;
    }

    function getLaw(id) {
      return data[id];
    }
  }

})();
