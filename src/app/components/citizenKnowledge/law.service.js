(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('LawService', LawService);

  /** @ngInject */
  function LawService($q) {
    var data = [
      {
        'id': 0,
        'rama_derecho': 'Derecho Administrativo',
        'materia': 'Asamblea Legislativa',
        'sub_materia': 'Autorizaciones',
        'titulo': 'Autorízase el ingreso, tránsito y estacionamiento en aguas territoriales salvadoreñas, en el periodo comprendido del 18 al 20 de abril de 2016, a la Flota de Amistad No. 105, compuesta por 3 Buques de combate de la Fuerza Naval de la República de China (Taiwán).',
        'tipo_documento': 'Decretos',
        'decreto': 316,
        'fecha_emision': '2016-03-16T06:00:00.000Z',
        'estado': 'Pendiente de publicación en el Diario Oficial y de entrada en vigencia.',
        'resumen': 'AUTORÍZASE EL INGRESO, TRÁNSITO Y ESTACIONAMIENTO EN AGUAS TERRITORIALES SALVADOREÑAS, EN EL PERIODO COMPRENDIDO DEL 18 AL 20 DE ABRIL DE 2016, A LA FLOTA DE AMISTAD NO. 105, COMPUESTA POR 3 BUQUES DE COMBATE DE LA FUERZA NAVAL DE LA REPÚBLICA DE CHINA (TAIWÁN).'
      }, {
        'id': 1,
        'rama_derecho': 'Derecho Constitucional',
        'materia': 'Sistema Judicial',
        'sub_materia': 'Civil y Procedimientos',
        'titulo': 'Ley de Probidad.',
        'tipo_documento': 'Ley',
        'decreto': 225,
        'diario_oficial': 237,
        'tomo': 409,
        'fecha_emision': '2015-12-16T06:00:00.000Z',
        'fecha_publicacion': '2015-12-23T06:00:00.000Z',
        'estado': 'Publicación en el Diario Oficial y entrada en vigencia.',
        'resumen': 'TIENE POR OBJETO ESTABLECER LOS PROCEDIMIENTOS PARA DETERMINAR EL PATRIMONIO DE LOS SUJETOS OBLIGADOS, ASÍ COMO IMPONER SANCIONES ADMINISTRATIVAS POR EL INCUMPLIMIENTO DE LA MISMA. ( POR RESOLUCIÓN DE LA SALA DE LO CONSTITUCIONAL REF. 6-2016 SE SUSPENDE PROVISIONALMENTE SU ENTRADA EN VIGENCIA)',
        'documento': 'http://asamblea.gob.sv/eparlamento/indice-legislativo/buscador-de-documentos-legislativos/ley-de-probidad/archivo_documento_legislativo'
      }
    ];

    this.getLaws = getLaws;
    this.getLaw  = getLaw;

    function getLaws() {
      return $q.resolve(data);
    }

    function getLaw(id) {
      return $q.resolve(data[id]);
    }
  }

})();
