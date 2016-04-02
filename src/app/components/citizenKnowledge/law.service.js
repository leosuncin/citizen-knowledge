(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('LawService', LawService);

  /** @ngInject */
  function LawService() {
    var data = [
      {
        'rama_derecho': 'Derecho Administrativo',
        'materia': 'ASAMBLEA LEGISLATIVA',
        'sub_materia': 'Autorizaciones',
        'titulo': 'Autorízase el ingreso, tránsito y estacionamiento en aguas territoriales salvadoreñas, en el periodo comprendido del 18 al 20 de abril de 2016, a la Flota de Amistad No. 105, compuesta por 3 Buques de combate de la Fuerza Naval de la República de China (Taiwán).',
        'tipo_documento': 'Decretos',
        'decreto': 316,
        'fecha_emision': '2016-03-16T06:00:00.000Z',
        'estado': 'Pendiente de publicación en el Diario Oficial y de entrada en vigencia.',
        'resumen': 'AUTORÍZASE EL INGRESO, TRÁNSITO Y ESTACIONAMIENTO EN AGUAS TERRITORIALES SALVADOREÑAS, EN EL PERIODO COMPRENDIDO DEL 18 AL 20 DE ABRIL DE 2016, A LA FLOTA DE AMISTAD NO. 105, COMPUESTA POR 3 BUQUES DE COMBATE DE LA FUERZA NAVAL DE LA REPÚBLICA DE CHINA (TAIWÁN).'
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
