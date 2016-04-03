(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('PlenaryService', PlenaryService);

  /** @ngInject */
  function PlenaryService($q) {
    var data = [
      {}, {
        'id': 1,
        'ley': 1,
        'titulo': 'Ley de Probidad.',
        'fecha_plenaria': '2016-12-16T19:17:00.000Z',
        'total_votos': 80,
        'a_favor': 45,
        'en_contra': 34,
        'abstencion': 1,
        'sin_voto': 0,
        'image': 'assets/images/votacion-ley-probidad-legislacion-dict-20_favorable.png',
        'votos': [
          {
            "id": "1",
            "nombre": "Quijano Norman",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "3",
            "nombre": "Cuadra Portillo",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "4",
            "nombre": "Escobar Margarita",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "6",
            "nombre": "Muyshondt Ernesto",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "7",
            "nombre": "Wright John",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "9",
            "nombre": "Batres Marta",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "10",
            "nombre": "Valdivieso Patricia",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "11",
            "nombre": "Vargas Mauricio ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "16",
            "nombre": "Serrano Misael",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "19",
            "nombre": "Rivera Francisco",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "21",
            "nombre": "Larrave Mercedes",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "23",
            "nombre": "Guevara Norma",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "24",
            "nombre": "Diaz Nidia",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "26",
            "nombre": "Sosa Karina",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "27",
            "nombre": "Peña Lorena",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "28",
            "nombre": "Ruiz Carlos",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "29",
            "nombre": "Blandino Nerio",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "30",
            "nombre": "Quijada Zoila",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "31",
            "nombre": "Mejia Misael",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "32",
            "nombre": "Mata Rolando",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "35",
            "nombre": "Alegria Damian",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "43",
            "nombre": "Gallegos Guillermo ",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "45",
            "nombre": "Lopez Cristina",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "46",
            "nombre": "Marin Arnoldo",
            "partido": "PDC",
            "voto": "Abstención"
          }, {
            "id": "50",
            "nombre": "Palomo Javier",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "51",
            "nombre": "Salazar Marcos",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "52",
            "nombre": "Godoy Josue",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "54",
            "nombre": "Lopez Margarita",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "55",
            "nombre": "Cuellar Omar",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "58",
            "nombre": "Merino Francisco",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "60",
            "nombre": "Rodriguez Margarita",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "61",
            "nombre": "Mendoza Juan Carlos",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "62",
            "nombre": "Quintanilla Nelson",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "63",
            "nombre": "Martinez Rodolfo ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "64",
            "nombre": "Perla Felipe",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "68",
            "nombre": "Escolan Edgar",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "69",
            "nombre": "de Leon Lucia ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "71",
            "nombre": "Castaneda Jorge",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "73",
            "nombre": "Gomez Gloria",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "74",
            "nombre": "Avila Rodrigo",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "75",
            "nombre": "Valiente Juan ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "77",
            "nombre": "Hernandez Karla ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "78",
            "nombre": "Escalante Gustavo",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "80",
            "nombre": "Cristales Felissa ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "81",
            "nombre": "Palma Lisseth ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "84",
            "nombre": "Cornejo Cristina",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "86",
            "nombre": "Mejia Calixto",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "88",
            "nombre": "Mata Guillermo",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "94",
            "nombre": "Baires Lucia",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "96",
            "nombre": "Hernandez Estela ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "98",
            "nombre": "Candray Orlando",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "100",
            "nombre": "Linares Mauricio",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "104",
            "nombre": "Ostorga Silvia ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "106",
            "nombre": "Iraheta Maytee ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "108",
            "nombre": "Valdes Jaime",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "110",
            "nombre": "Sandoval Jaime ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "112",
            "nombre": "Rivas Adelmo",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "114",
            "nombre": "Almendariz Antonio",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "115",
            "nombre": "Miron Jose",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "116",
            "nombre": "Escobar Jorge ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "118",
            "nombre": "Flores Santiago",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "120",
            "nombre": "Rodriguez Abilio",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "125",
            "nombre": "Duran Roxana ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "126",
            "nombre": "Cruz Alma",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "128",
            "nombre": "Tenorio Mario",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "129",
            "nombre": "Grande Jesus",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "132",
            "nombre": "Lopez Audelia",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "135",
            "nombre": "Tejada Carlos ",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "136",
            "nombre": "Rivera Jackeline",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "138",
            "nombre": "Romero Alberto ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "139",
            "nombre": "Ortiz Ana Maria",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "140",
            "nombre": "Ponce Mario",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "142",
            "nombre": "Rodriguez Carolina",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "145",
            "nombre": "Mirasol Mario",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "146",
            "nombre": "Cabrera Yohalmo",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "152",
            "nombre": "Melara Jose ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "155",
            "nombre": "Hernandez Samuel Eliseo",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "156",
            "nombre": "Gomez Elizabeth",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "162",
            "nombre": "Reyes Carlos ",
            "partido": "ARENA",
            "voto": "No"
          }, {
            "id": "164",
            "nombre": "Alvarenga Ana",
            "partido": "FMLN",
            "voto": "Sí"
          }
        ]
      }, {
        'id': 2,
        'ley': 2,
        'titulo': 'Ley de Deberes y Derechos de los Pacientes y Prestadores de Servicios de Salud.',
        'fecha_plenaria': '2015-03-10T15:45:00.000Z',
        'total_votos': 73,
        'a_favor': 73,
        'en_contra': 0,
        'abstencion': 0,
        'sin_voto': 0,
        'image': 'assets/images/votacion-ley-de-deberes-y-derechos-de-los-pacientes-y-prestadores-de-servicios-de-salud-dict-06_favorable.png',
        'votos': [
          {
            "id": "1",
            "nombre": "Quijano Norman",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "2",
            "nombre": "de Escobar Ana Vilma",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "3",
            "nombre": "Cuadra Portillo",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "5",
            "nombre": "Reyes David",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "6",
            "nombre": "Muyshondt Ernesto",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "8",
            "nombre": "Castro Alejandrina",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "9",
            "nombre": "Batres Marta",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "10",
            "nombre": "Valdivieso Patricia",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "11",
            "nombre": "Vargas Mauricio ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "14",
            "nombre": "Alvarenga Rolando",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "18",
            "nombre": "Fontan Juan Pablo",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "19",
            "nombre": "Rivera Francisco",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "23",
            "nombre": "Guevara Norma",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "26",
            "nombre": "Sosa Karina",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "27",
            "nombre": "Peña Lorena",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "28",
            "nombre": "Ruiz Carlos",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "29",
            "nombre": "Blandino Nerio",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "30",
            "nombre": "Quijada Zoila",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "31",
            "nombre": "Mejia Misael",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "32",
            "nombre": "Mata Rolando",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "37",
            "nombre": "Batres Luis",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "40",
            "nombre": "Matamoros Maria Otilia",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "46",
            "nombre": "Marin Arnoldo",
            "partido": "PDC",
            "voto": "Sí"
          }, {
            "id": "50",
            "nombre": "Palomo Javier",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "51",
            "nombre": "Salazar Marcos",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "52",
            "nombre": "Godoy Josue",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "54",
            "nombre": "Lopez Margarita",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "55",
            "nombre": "Cuellar Omar",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "58",
            "nombre": "Merino Francisco",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "60",
            "nombre": "Rodriguez Margarita",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "61",
            "nombre": "Mendoza Juan Carlos",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "62",
            "nombre": "Quintanilla Nelson",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "63",
            "nombre": "Martinez Rodolfo ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "66",
            "nombre": "Argueta Dina ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "67",
            "nombre": "Murillo Gabriel",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "68",
            "nombre": "Escolan Edgar",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "69",
            "nombre": "de Leon Lucia ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "72",
            "nombre": "Salgado Numan",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "74",
            "nombre": "Avila Rodrigo",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "75",
            "nombre": "Valiente Juan ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "76",
            "nombre": "Velasquez Ricardo",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "78",
            "nombre": "Escalante Gustavo",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "80",
            "nombre": "Cristales Felissa ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "82",
            "nombre": "Munguia Carlos",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "84",
            "nombre": "Cornejo Cristina",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "88",
            "nombre": "Mata Guillermo",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "90",
            "nombre": "Flores Manuel",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "94",
            "nombre": "Baires Lucia",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "96",
            "nombre": "Hernandez Estela ",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "98",
            "nombre": "Candray Orlando",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "102",
            "nombre": "Soto Rigoberto",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "104",
            "nombre": "Ostorga Silvia ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "112",
            "nombre": "Rivas Adelmo",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "113",
            "nombre": "Menjivar Carlos Roberto",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "116",
            "nombre": "Escobar Jorge ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "118",
            "nombre": "Flores Santiago",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "121",
            "nombre": "Garcia Noel Orlando",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "124",
            "nombre": "Corpeño Aristides",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "126",
            "nombre": "Cruz Alma",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "129",
            "nombre": "Grande Jesus",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "132",
            "nombre": "Lopez Audelia",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "135",
            "nombre": "Tejada Carlos ",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "136",
            "nombre": "Rivera Jackeline",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "138",
            "nombre": "Romero Alberto ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "140",
            "nombre": "Ponce Mario",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "141",
            "nombre": "Carrillo Vidal",
            "partido": "PCN",
            "voto": "Sí"
          }, {
            "id": "142",
            "nombre": "Rodriguez Carolina",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "144",
            "nombre": "Godoy Ricardo ",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "146",
            "nombre": "Cabrera Yohalmo",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "156",
            "nombre": "Gomez Elizabeth",
            "partido": "FMLN",
            "voto": "Sí"
          }, {
            "id": "158",
            "nombre": "Vaquerano Donato",
            "partido": "ARENA",
            "voto": "Sí"
          }, {
            "id": "161",
            "nombre": "Urquilla Pablo",
            "partido": "GANA",
            "voto": "Sí"
          }, {
            "id": "164",
            "nombre": "Alvarenga Ana",
            "partido": "FMLN",
            "voto": "Sí"
          }
        ]
      }
    ];

    this.getPlenaries = getPlenaries;
    this.getPlenary  = getPlenary;
    this.getVotes = getVotes;
    this.getSummary = getSummary;

    function getPlenaries() {
      return $q.resolve(data);
    }

    function getPlenary(id) {
      return $q.resolve(data[id]);
    }

    function getVotes(id) {
      return new $q(function (resolve, reject) {
        var votos = data[id].votos;
        if (votos) {
          resolve(votos);
        } else {
          reject(votos);
        }
      });
    }

    function getSummary(votos) {
      if (!angular.isArray(votos)) {
        return;
      } else {
        var summary = {};
        angular.forEach(votos, function(voto) {
          voto.partido = voto.partido.trim();
          summary[voto.partido] = summary[voto.partido] || [0, 0, 0, 0];// si, no, abstension, no voto
          if (voto.voto === 'Sí' || voto.voto === 'Si') {
            summary[voto.partido][0] += 1;
          } else if (voto.voto === 'No') {
            summary[voto.partido][1] += 1;
          } else if (voto.voto.trim() === 'Abstención'){
            summary[voto.partido][2] += 1;
          } else {
            summary[voto.partido][3] += 1;
          }
        });
        return summary;
      }
    }
  }

})();
