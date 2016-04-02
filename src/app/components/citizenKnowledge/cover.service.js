(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('CoverService', CoverService);

  /** @ngInject */
  function CoverService($q) {
    var data = [
      {
        id: 0,
        src: 'assets/images/covers/MarchaVeteranos.jpg',
        title: 'Consequuntur explicabo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, vero. Voluptatem earum exercitationem, voluptas deserunt temporibus eveniet aut! Consequuntur explicabo modi eligendi ullam dolore exercitationem in enim aliquam amet velit!'
      },
      {
        id: 1,
        src: 'assets/images/covers/delitosInfo.jpg',
        title: 'Ut fuisset signiferumque',
        text: 'Pri integre delectus id, ne pri verear adolescens. Ut fuisset signiferumque nam, eu nulla inciderint ius. Usu eleifend expetendis ei, porro ocurreret contentiones mel cu, inermis singulis no eam. Eum in veniam tibique prodesset. Eu ius vero illum, tation honestatis scripserit duo no. Mel an natum civibus assentior, tale accusam accumsan eu vim.'
      },
      {
        id: 2,
        src: 'assets/images/covers/seguridad.jpg',
        title: 'Per quidam euismod',
        text: 'Sit in sint harum invidunt. Qui nibh recteque te, eu mei commodo graecis. Per quidam euismod erroribus id, ex ius magna minim dicit. Mea commodo deterruisset ad. Everti melius temporibus te est, nec eius putant audire id. Mel debet saperet postulant te, id cibo vivendo per.'
      }
    ];

    this.getCovers = getCovers;
    this.getCover  = getCover;

    function getCovers() {
      return $q.resolve(data);
    }

    function getCover(id) {
      return $q.resolve(data[id]);
    }
  }

})();
