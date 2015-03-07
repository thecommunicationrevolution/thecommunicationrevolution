var babel = require('./babel'),
    bind,
    bindTriggers,
    cache,
    close,
    dialog,
    dialogClose,
    dialogDescription,
    dialogName,
    dialogPicture,
    dialogVideos,
    expanded,
    hide,
    loading,
    hidden,
    open,
    portfolios,
    premises,
    reset,
    show,
    shown,
    template,
    transition,
    triggers,
    isOpen,
    triggers,
    playVideo,
    _isOpen,
    theater = require('./theater'),
    vimeo = require('./vimeo');

portfolios = {
  '303834': {
    name: '#betrue',
    description: {
      en: [
        'You are in a showcase 24X7.',
        '<br>',
        'Only an increasingly tenuous and transparent line separates you from your audience.',
        '<br>',
        'Position yourself clearly and authentically.',
        '<br>',
        'Your contacts are increasingly capable of identifying blunders.',
        '<br>',
        'If you make a mistake, admit it.',
        '<br>',
        'Be truthful. Authenticity and courage are enchanting qualities.',
        '<br>',
        'Fake is out.'
      ].join(' '),
      pt: [
        'Você está numa vitrine 24X7.',
        '<br>',
        'O que o separa da sua audiência é uma linha cada vez mais tênue e transparente.',
        '<br>',
        'Posicione-se clara e autenticamente.',
        '<br>',
        'Seus interlocutores estão cada vez mais preparados para identificar erros.',
        '<br>',
        'Se errar, admita.',
        'Seja verdadeiro. Autenticidade e coragem encantam.',
        '<br>',
        'O falso é démodé.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500193645_960x540.jpg'
  },
  '304257': {
    name: '#betrusted',
    description: {
      en: [
        'Information and technology are commodities, period!',
        'Your audience needs judicious and reliable curators, and reliability is built through two-way relationships.',
        '<br>',
        'In the Data Tsunami we live in, make a commitment to filtering, informing and surprising.',
        'Anticipate, find out what your audience wants, needs, and does not know it yet.'
      ].join(' '),
      pt: [
        'Informação e tecnologia são commodities e ponto final.',
        'A sua audiência precisa de curadores criteriosos e confiáveis, e confiabilidade se constrói através de relações de mão dupla.',
        '<br>',
        'Em meio ao Data-Tsunami em que vivemos, assuma o compromisso de filtrar, informar e surpreender.',
        'Antecipe-se, descubra o que seu público quer, necessita e ainda não sabe.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500250027_960x540.jpg'
  },
  '305382': {
    name: '#bepart',
    description: {
      en: [
        'The culture of participation rejects fortresses, tall and insurmountable walls.',
        'The ivory tower is out: Where there are walls, create openings.',
        'Join, share, get together, humanize yourself.',
        'Investigate the many opportunities that the multidimensional world offers.'
      ].join(' '),
      pt: [
        'A cultura da participação rejeita fortalezas, muros altos e intransponíveis.',
        'O encastelamento é inaceitável: onde ainda é muralha, construa aberturas.',
        'Participe, compartilhe, aproxime-se, humanize-se.',
        'Você tem todos os meios e os melhores motivos para fazer parte.',
        'Logue-se logo, e descubra as múltiplas oportunidades que esse o mundo multidimensional oferece.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500195390_295x166.jpg'
  },
  '307128': {
    name: '#thinkplural',
    description: {
      en: [
        'Dualism and polarization are proven restrictive.',
        'Help build a culture of dialogue and collective creation on different platforms. Think open, flexible, multiple concepts.',
        'Reject absolute truths. None deserves credit.',
        'The truth is multifaceted and allows varying interpretations and narratives. Learn to contextualize.'
      ].join(' '),
      pt: [
        'Dualismo e bipolarização são comprovadamente restritivos.',
        'Ajude a construir uma cultura do diálogo e da criação coletiva em diferentes plataformas. Pense conceitos abertos, flexíveis, múltiplos.',
        'Rejeite verdades absolutas. Nenhuma merece crédito.',
        'A verdade é multifacetada e permite variadas interpretações e narrativas. Aprenda a contextualizar.',
    ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500194496_960x540.jpg'
  },
  '307853': {
    name: '#thinkmobile',
    description: {
      en: [
        'The world is in the cloud, accessible and without boundaries, and strong evidence points to it being in yet another equally unlikely space in the near future.',
        'Accept the unimaginable. Assume the possibility of new formats and new configurations; mobile means living, it means convenience, it is to recreate experiences.',
        'Think mobile and subvert old ideas of time and space.'
      ].join(' '),
      pt: [
        'O mundo está em nuvem, acessível e sem fronteiras e há fortes indícios',
        'de que poderá estar, num futuro próximo, em outro lugar igualmente improvável.',
        'Aceite o inimaginável. Assuma a possibilidade de novos formatos e novas configurações; mobile é convívio, conveniência, é recriar experiências.',
        'Pense mobile e subverta antigas concepções de tempo e espaço.'
    ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500250137_295x166.jpg'
  },
  '308270': {
    name: '#bebeta',
    description: {
      en: [
        'Beta versions subvert the logic of industrial schedules and help consumers satisfy their desire to interact with makers.',
        'Beta implies questioning, self-criticism and openness to change.',
        'Don’t be overly attached to your ideas, be permeable, dissatisfied, restless.',
        'Definitive is not for ever. Only the beta state is permanent.'
      ].join(' '),
      pt: [
        'As versões beta subvertem a lógica dos cronogramas industriais e ajudam consumidores a satisfazer o desejo de interagir com quem produz.',
        'Beta pressupõe questionamento, autocrítica e abertura para a mudança.',
        'Não case com as suas ideias, seja permeável, insatisfeito, incansável.',
        'O definitivo é provisório. Só o estado beta é permanente.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500219049_960x540.jpg'
  },
  '316197': {
    name: '#thinkahead',
    description: {
      en: [
        'Abandon reductionist interpretations of the past.',
        'When analyzing present day data, think outside the boxes of common sense.',
        'Life produces mistakes and successes, learn from both. Go ahead, innovation requires courage, experimentation, learning and risk.',
        'And profit is the reward of risk.'
      ].join(' '),
      pt: [
        'Abandone as zonas de conforto e as certezas reducionistas do passado. Evite as fronteiras construídas pelo chamado senso comum.',
        'A vida produz erros e acertos, aprenda com ambos.',
        'Vá em frente, inovação é coragem, experimentação, aprendizado e risco. E o lucro, é a remuneração do risco.',
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500250421_960x540.jpg'
  },
  '327936': {
    name: '#thinkhigher',
    description: {
      en: [
        'Raise your thought giving their deeper meanings purposes.',
        'Business also exist to serve and improve the quality of people’s life. Produce communication that informs and forms.',
        'Openness, social responsibility and gratitude are strong currencies . They create a proven virtuous circle for business. The profit has not lost its importance. Just is not the only reason for the companies.'
      ].join(' '),
      pt: [
        'Eleve o pensamento atribuindo aos seus propósitos significados mais nobres.',
        'Business também existem para servir e melhorar a qualidade de vida das pessoas.',
        'Transparência, responsabilidade social e gratidão são moedas fortes.',
        'Elas criam um círculo virtuoso comprovadamente eficaz para os negócios.',
        'O lucro não perdeu a importância.',
        'Apenas não é mais a única razão de ser das empresas.',
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500250510_295x166.jpg'
  },
  '330902': {
    name: '#becollaborative',
    description: {
      en: [
        'The advent of the digital age fragmented the labor market.',
        'Whether from the corporations they work in, or from their home-offices, as free-lancers, the baby boomers and generations X, Y or Z are required to build alliances and learn to operate in a network.',
        'Value today is in commitment to society, collaborative work, and the quality of what you and your allies deliver.'
      ].join(' '),
      pt: [
        'A era digital fragmentou o mercado de trabalho.',
        'Babyboomers, gerações X, Y ou Z, ligadas à corporações ou a home-offices, precisam construir alianças e aprender a operar em rede.',
        'Entenda que hoje o valor está no comprometimento coletivo, na colaboração e na qualidade do que você e seus aliados entregam.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500302294_295x166.jpg'
  },
  '331606': {
    name: '#beintuitive',
    description: {
      en: [
        'Intuition means to "see" with all your senses, to apply a watchful, comprehensive and decoding eye in the search for wisdom. Observation is the vantage point of intuition, revealing, anticipating, predicting and, not least of all, looking for answers in their usual abode: in the gaps invisibly connecting one event to another. The world needs intelligence and wisdom.'
      ].join(' '),
      pt: [
        'Intuir significa olhar com atenção, ver com todos os sentidos.',
        'A sabedoria resulta deste olhar atento e observador.',
        'A intuição revela, antecipa, prediz, subverte e busca as respostas onde elas geralmente estão: no espaço invisível que conecta um acontecimento ao outro.',
        'Liberte-se das amarras do pensamento cartesiano. Demostre com a lógica, descubra com a intuição.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500217687_960x540.jpg'
  },
  '331446': {
    name: '#beuseful',
    description: {
      en: [
        'Usefulness is a subjective value that’s in direct proportion to a degree of satisfaction. Usefulness, therefore, translates into perception and so it is not in what you do, but in how what you do is perceived.',
        'Base yourself on the premises of this study to enhance the way others perceive what you do as being useful, and find in The Communication (R)evolution the knowledge needed to improve the life of the general population.'
      ].join(' '),
      pt: [
        'Utilidade é um valor subjetivo diretamente relacionado a um grau de satisfação. Portanto, utilidade é percepção. Ela não está no que você realiza, mas no modo como o que você realiza é percebido.',
        'Use as premissas deste estudo para aumentar nos outros a percepção de utilidade naquilo que você faz e descubra em "The Communication Revolution" conhecimento capaz de fazer diferença na sua vida, e na vida dos demais.'
      ].join(' ')
    },
    picture: '//i.vimeocdn.com/video/500250354_960x540.jpg'
  }
};

bind = function() {
  dialogClose.addEventListener('click', close);
  triggers.forEach(bindTriggers);
};

bindTriggers = function(trigger) {
  trigger.addEventListener('click', open);
};

cache = function() {
  dialog = document.querySelector('.portfolio');
  dialogClose = document.querySelector('.portfolio-close');
  dialogDescription = document.querySelector('.portfolio-description');
  dialogName = document.querySelector('.portfolio-name');
  dialogPicture = document.querySelector('.portfolio-picture');
  dialogVideos = document.querySelector('.portfolio-videos');
  template = document.querySelector('.portfolio-template').innerHTML.trim().replace(/>\s+</g, '><');
  triggers = [ ].slice.call(document.querySelectorAll('[data-portfolio-id]'));
  loading = document.querySelector('.portfolio-loading');
};

close = function() {
  dialog.addEventListener('transitionend', hide);
  dialog.classList.remove('portfolio-expanded');
};

hide = function() {
  dialog.removeEventListener('transitionend', hide);
  dialog.classList.add('portfolio-hide');
  document.body.classList.remove('overlay-expanded');
  reset();

  window.requestAnimationFrame(function() {
    dialog.addEventListener('transitionend', hidden);
  });
};

hidden = function() {
  dialog.removeEventListener('transitionend', hidden);

  dialog.classList.remove('portfolio-expand');
  dialog.classList.remove('portfolio-hide');
  dialog.classList.remove('portfolio-show');
  document.body.classList.remove('overlay');
  dialog.classList.add('portfolio-hidden');
  _isOpen = false;
};

open = function(event) {
  var trigger = event.currentTarget,
      id = trigger.getAttribute('data-portfolio-id');

  if (!id.length) {
    throw 'premise called but no portfolio id was given';
  }

  vimeo.getVideosFromPortfolio(id, render);
  show(trigger, id);
};

premises = function() {
  cache();
  bind();
};

render = function(videos) {
  setTimeout(function(){
    videos.forEach(function(video) {
      var description = video.description || '',
          html,
          id = video.uri;
          picture = video.pictures.sizes.pop().link;

      description = description.replace(/\n/g, '<br>');
      id = id.replace(/^.+?([0-9]+)$/, '$1');

      html = template.replace('{{video-description}}', description)
                     .replace('{{video-id}}', id)
                     .replace('{{video-name}}', video.name)
                     .replace('{{video-picture}}', picture);

      dialogVideos.insertAdjacentHTML('beforeend', html);
      loading.classList.add('hidden');
    });

    triggers = [].slice.call(dialogVideos.querySelectorAll('.portfolio-video-button'));

    triggers.forEach(function(videoButton) {
      videoButton.addEventListener('click', playVideo);
    });
  }, 500);
};

playVideo = function(e) {
  e.preventDefault();
  var videoId = e.currentTarget.getAttribute('data-theater-id');
  theater.show(videoId);
};

reset = function() {
  dialogVideos.innerHTML = '';
};

show = function(trigger, id) {
  var portfolio = portfolios[id];

  dialogDescription.innerHTML = portfolio.description[babel.tag] || '';
  dialogPicture.style.backgroundImage = 'url("' + portfolio.picture + '")';
  dialogName.innerHTML = portfolio.name;

  loading.classList.remove('hidden');
  dialog.classList.remove('portfolio-hidden');
  dialog.classList.add('portfolio-expand');
  dialog.classList.add('portfolio-expanded');
  document.body.classList.add('overlay');
  document.body.classList.add('overlay-expanded');
};

transition = function(trigger, id) {
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  trigger.classList.add('premises-transition');

  trigger.style.top = '65px';
  trigger.style.left = 0;
  trigger.style.width = width + 'px';
  trigger.style.height = height + 'px';
};

module.exports = premises;
