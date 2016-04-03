(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('DeputyService', DeputyService);

  /** @ngInject */
  function DeputyService($q) {
    var data = [
      {
        'id': 1,
        'nombre_completo': 'Norman Noel Quijano González',
        'departamento': 'San Salvador',
        'partido': 'ARENA',
        'correo': 'norman.quijano@asamblea.gob.sv',
        'suplente': 'Ricardo Humberto Contreras Henríquez',
        'comisiones': [
          {
            'nombre': 'Comisión de Salud',
            'cargo': 'Vocal'
          },
          {
            'nombre': 'Comisión de Asuntos Municipales',
            'cargo': 'Vocal'
          }
        ],
        'trayectoria_politica': [
          {
            'cargo': 'Diputado Propietario a la Asamblea Legislativa por el departamento de San Salvador ',
            'periodo': 'Mayo 2015 - Abril 2018'
          }
        ],
        'foto': 'http://asamblea.gob.sv/pleno/pleno-legislativo/norman-noel-quijano-gonzalez/diputado_fotografia'
      }, {
        'id': 2
      }, {
        'id': 3,
        'nombre_completo': 'René Alfredo Portillo Cuadra',
        'departamento': 'San Salvador',
        'partido': 'ARENA',
        'correo': 'rene.portillo@asamblea.gob.sv',
        'suplente': 'Rolando Alvarenga Argueta',
        'comisiones': [
          {
            'nombre': 'Comisión de Legislación y Puntos Constitucionales',
            'cargo': 'Vocal'
          },
          {
            'nombre': 'Comisión de Reformas Electorales y Constitucionales',
            'cargo': 'Vocal'
          }
        ],
        'trayectoria_politica': [
          {
            'cargo': 'Diputado Propietario a la Asamblea Legislativa por el departamento de San Salvador',
            'periodo': 'Mayo 2015 - Abril 2018'
          }
        ],
        'foto': 'http://asamblea.gob.sv/pleno/pleno-legislativo/rene-alfredo-portillo-cuadra/diputado_fotografia'
      }, {
        'id': 4,
        'nombre_completo': 'Margarita Escobar',
        'departamento': 'San Salvador',
        'partido': 'ARENA',
        'correo': 'margarita.escobar@asamblea.gob.sv',
        'suplente': 'José Ramón González Suvillaga',
        'comisiones': [
          {
            'nombre': 'Comisión de Economía',
            'cargo': 'Presidenta'
          }
        ],
        'trayectoria_politica': [
          {
            'cargo': 'Diputada Propietaria a la Asamblea Legislativa por el departamento de San Salvador',
            'periodo': 'Mayo 2015 - Abril 2018'
          }, {
            'cargo': 'Diputada Propietaria a la Asamblea Legislativa por el departamento de San Salvador',
            'periodo': '2012 – 2015'
          }, {
            'cargo': 'Diputada Propietaria por Departamento de San Salvador',
            'periodo': '2009 – 2012'
          }, {
            'cargo': 'Vice Canciller de El Salvador – Salvadoreños en el exterior'
          }, {
            'cargo': 'Embajadora, Representante permanente ante OEA'
          }, {
            'cargo': 'Embajadora Extraordinaria y Plenipotenciaria en Venezuela concurrente en Trinidad y Tobago y Guyana'
          }, {
            'cargo': 'Embajadora, Representante Adjunta ante las Naciones Unidas y los demás organismos internacionales en Ginebra, Suiza'
          }
        ],
        'foto': 'http://asamblea.gob.sv/pleno/pleno-legislativo/margarita-escobar/diputado_fotografia'
      }, {
        'id': 0,
        'nombre_completo': 'Ana Vilma Albanez de Escobar',
        'departamento': 'San Salvador',
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
        'trayectoria_politica': [
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
      }, {
        'id': 114,
        'nombre_completo': 'José Antonio Almendáriz Rivas',
        'departamento': 'Sonsonate',
        'partido': 'PCN',
        'correo': 'jalmendariz@asamblea.gob.sv',
        'suplente': 'José Alfredo Mirón Ruiz',
        'comisiones': [
          {
            'nombre': 'Comisión de Seguridad Pública y Combate a la Narcoactividad',
            'cargo': 'Presidente'
          }, {
            'nombre': 'Comisión de Defensa',
            'cargo': 'Vocal'
          }, {
            'nombre': 'Comisión de Legislación y Puntos Constitucionales',
            'cargo': 'Vocal'
          }, {
            'nombre': 'Comisión Financiera',
            'cargo': 'Vocal'
          }, {
            'nombre': 'Comisión Política',
            'cargo': 'Vocal'
          }
        ],
        'trayectoria_politica': [
          {
            'cargo': 'Diputado Propietario a la Asamblea Legislativa por el departamento de Sonsonate',
            'periodo': 'Mayo 2015 - Abril 2018'
          }, {
            'cargo': 'Diputado Propietario por el Departamento de Sonsonate',
            'periodo': '2012 – 2015',
            'puesto': 'Presidente de la Comisión de Seguridad Pública.'
          }, {
            'cargo': 'Diputado Propietario por el Departamento de Sonsonate',
            'periodo': '2009 – 2012',
            'puesto': 'Presidente de la Comisión de Seguridad Pública'
          }, {
            'cargo': 'Diputado Propietario por el Departamento de Sonsonate',
            'periodo': '2006 – 2009',
            'puesto': 'Secretario de la Junta Directiva'
          }, {
            'cargo': 'Diputado Propietario por el Departamento de Sonsonate',
            'periodo': '2003 – 2006',
            'puesto': 'Presidente de la Comisión de Seguridad y Tercer Secretario'
          }, {
            'cargo': 'Diputado Propietario por el Departamento de Sonsonate',
            'periodo': '2000 – 2003',
            'puesto': 'Presidente de la Comisión de Defensa'
          }, {
            'cargo': 'Diputado Propietario por el Departamento de Sonsonate',
            'periodo': '1997 – 2000',
            'puesto': 'Presidente de la Comisión de Defensa'
          }
        ],
        'trayectoria_academica': [
          {
            'carrera': 'Doctorado en Teología',
            'institucion': 'Latin University of Theology',
            'egresado': 2010
          }, {
            'carrera': 'Egresado de Ciencias Políticas'
          }, {
            'carrera': 'Diplomado de Estado Mayor del Ejercito'
          }
        ],
        foto: 'http://asamblea.gob.sv/pleno/pleno-legislativo/jose-antonio-almendariz-rivas/diputado_fotografia'
      }
    ];

    this.getDeputies = getDeputies;
    this.getDeputy  = getDeputy;

    function getDeputies() {
      return $q.resolve(data);
    }

    function getDeputy(id) {
      return $q.resolve(data[id - 1]);
    }
  }

})();
