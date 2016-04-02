(function() {
  'use strict';

  angular
      .module('citizenKnowledge')
      .service('ExplainService', ExplainService);

  /** @ngInject */
  function ExplainService($q) {
    var data = [
      {
        'id': 0,
        'ley': 0,
        'titulo': 'Eveniet quidem doloribus',
        'contenido': 'Lorem ipsum dolor sit amet, mea et legendos assueverit, mei legimus consetetur eu. Accusam torquatos vim et, at sed labores sapientem assentior. Pri dolor vidisse ornatus ne, homero appetere et vis. At oblique splendide sea, nec homero numquam ei. Ad has elit aeque debitis, scripta consetetur quo ne, eu nisl timeam cum.\nNam gubergren consequat ad, ullum verear gubergren ei sed. In vix impedit meliore, eos ad omnes phaedrum mediocrem, quaeque appareat explicari pri ne. Ei eam appareat deserunt, nam ea dicam blandit. Per in oporteat evertitur, eu duo autem corpora vivendum, quis admodum disputando vim an. Modus suscipit interpretaris pri et, cu mea elitr perpetua. Eu pro aperiri numquam, nihil ceteros detracto pro ad.\nDuo iriure qualisque urbanitas ex. Ad porro labore verear pri, nam prodesset eloquentiam no, explicari disputationi his et. Id tale tincidunt consequuntur ius, eripuit eruditi debitis est et, te epicurei facilisi vel. Honestatis consectetuer ea vim, modo erant dicam no mei, at mea agam hendrerit. Oblique singulis vix ut, consequat mediocritatem ut vim, libris democritum mei in. Pro aliquam perpetua ei, dicunt utroque scribentur sed at.\nAgam novum quaerendum ne duo, lucilius recteque periculis sit id. Per graeco fabulas scriptorem ad, officiis legendos adolescens quo te, summo inciderint per in. Sed fabellas cotidieque cu, ad etiam animal qui. Amet omnis scriptorem ex vel, has cu nostro antiopam.\nEx vix diam wisi iuvaret, ea vim liber audire. Reque harum ut cum, vim ea duis comprehensam. Ei mutat autem interesset duo, justo admodum posidonium quo at. Repudiare urbanitas his eu, in iracundia expetendis vix.',
        'fecha_publicacion': '2016-03-16T06:00:00.000Z',
        'fuente': 'Dolor atque praesentium explicabo'
      }
    ];

    this.getExplains = getExplains;
    this.getExplain  = getExplain;

    function getExplains() {
      return $q.resolve(data);
    }

    function getExplain(id) {
      return $q.resolve(data[id]);
    }
  }

})();
