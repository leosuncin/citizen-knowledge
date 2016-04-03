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
      }, {
        'id': 1,
        'ley': 1,
        'titulo': 'Ex assum facilisi his, patrioque torquatos',
        'contenido': 'Ad pro aliquam minimum consectetuer, aeterno pertinax convenire ex qui, at intellegat efficiendi mei. Ne purto vero sale duo, eu suavitate persecuti his. Pro populo menandri conclusionemque te. Ne vix habeo nobis clita. In ius justo fugit. Usu te facer sensibus, cu officiis accusata persecuti mel.\nIus tritani deseruisse ea, mei apeirian senserit ad. Eos nibh vide id. Ut cum unum atomorum similique, no cum lorem etiam temporibus. Sit ut viris verear latine. Mutat iudico aliquando at vix. Vero etiam at duo, nec ut rebum corrumpit sadipscing. Vix ea postea possit euripidis, in per omnium vidisse.\nPri affert labores scaevola ei. Ad appareat vulputate est. Te mel iudico altera ponderum, qui id ullum consequat interesset. Mea id diam pertinacia mediocritatem, vel urbanitas torquatos liberavisse ut.\nEa natum phaedrum imperdiet nec, ne suavitate qualisque constituto has. Regione suscipit argumentum eam ne, ex summo referrentur vix, vix prima vocent incorrupte no. Cum cu modo munere facilis, exerci ocurreret theophrastus qui ut. Sea ex nibh summo audiam, ius in habemus praesent intellegebat.\nVim ea saperet habemus. At vix phaedrum ocurreret deterruisset, ad sit idque malorum. Ad nam purto appareat forensibus, mundi saepe oratio in eam. Ex elitr appellantur adversarium duo, urbanitas comprehensam pro ei.\nEi amet habeo harum qui, vim ea justo regione rationibus, has alia ludus convenire ex. Ignota contentiones no vix, vel ad velit accommodare. Mea ea delicata oportere, ex per fastidii mandamus appellantur. Denique salutatus sea et, qui quidam assueverit te.\nMea cu impetus voluptua erroribus. Tamquam dolorem nam an. Et doming officiis usu, id vero legere blandit vix. Ei percipit adolescens consequuntur vix, ex eam unum semper tibique, ei delenit maiestatis instructior sit. Ea porro probatus mel, has assentior incorrupte quaerendum eu. Nemore iuvaret utroque has no.\nMagna tritani constituam vis ex, ad mei idque legere. Per tamquam pericula id, ea sed euismod accusam nostrum, no tale brute scripserit cum. Eam lobortis pericula ex, vis veri interpretaris ei, cu harum dicit voluptaria per. Ne pro enim vituperatoribus. Mea ei gubergren dissentiet efficiantur. Vis commune similique an. Ei sed labitur laoreet pertinacia.\nSoluta doctus eos te, congue saperet ex pri. Cum id zril mollis scaevola, omnes interesset at nec. Ex vix partem maluisset. Sit posse deleniti in, suas dolorum erroribus ad pro. Duo cu iusto postea antiopam, sed natum persequeris id.\nId magna nobis sed, dicam oportere nec ne. Regione dissentias sea at, ex viderer periculis eam. Pri cu saperet percipit, in nec probo invidunt. Cu accumsan molestie nam, vix elitr option ex. Ex assum facilisi his, patrioque torquatos cu sed, usu verear latine commodo no.',
        'fecha_publicacion': '2016-03-16T06:00:00.000Z',
        'fuente': 'In ius justo fugit'
      }, {
        'id': 2,
        'ley': 2,
        'titulo': 'Ex civibús repudiandae vís',
        'contenido': 'Malorum dolórem in eám, ád alií lucilius suscipiántur ius. Ex civibús repudiandae vís, eum te unum paúlo meliore. No qui tempor mediocritatem, nam feugaít molestíe eu. Alterá effíciantur éam té, ex vix ámet mentitúm. Oratio adípisci cu iús, ea quís consulatu vix, everti honestatis ei cum.\nMea éx officiis inveñire ullámcorper, eum similique philosophia ex. Et dicta eránt euripidis his, porro clita detractó hás eu. Quo at dicit alíquam. Ne sea feugiat indoctúm, álii númquam aliquando mei et. Te sed véñiam partieñdo. Usu agam audíre voluptatibús an, íd nam promptá alterum.\nEa mundi appareat séd, mel habemus delectus constituám at. Ex enim áñcillae has, tíbique temporíbus ex sea. Veri minímum recteque pri at, in sed dolore dolores cónsequat, vis te novum legimus omñesque. Ad sumó atqui détracto eos. Cu támquam similiqué pri, at veniam essent option est. Qualisque scribentur est id, soñet prómpta abhorreant cu sea, sumó módus congúe ex éum. Perpetua volúptaria cum te, meí ne prima liber labitur, prí ad quidam integre evertitur.\nHabemús pérsequeris referreñtur pri ut, an vél érat dicañt. Est percipit lucilius eu, ét consulatu ássueverit est, ño movet sapieñtem áliquando mél. Mel omnis zril ut. Duo at magna admodum, séd ad laoreet ponderum. Suas apériam atomorum et qúo, semper iuvaret pri iñ.\nAt iuvaret vituperata vim. Ad mazim constitúto has. Id mei vidit epicurei, est ei ádhuc librís deleniti. Dúo verítus qualisque ut, éirmod scaevola qúo ín. Corrumpit euripídis mel te, mea no sanctus scripserit.\nPro no mutat primís núsquam. Ne nam accommodare voluptatibús, ut debitis deterruisset necessitátibus cum. Est eu vide appétere éxpetendis, eu lorem pericula eam, solum cívibus usu éa. At vim dolores dissentias. At veri coñsul delectus his, velit miñímum abhórreañt pri ex, ei hinc élit ponderum eum. Maiórum percipit sapientem ea qui, mei eú graeci ocurreret, cúm ea délenit erroribus.',
        'fecha_publicacion': '2016-03-16T06:00:00.000Z',
        'fuente': 'Malorum dolórem'
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
