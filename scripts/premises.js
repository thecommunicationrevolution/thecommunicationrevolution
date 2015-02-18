var bind,
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
    _isOpen,
    vimeo = require('./vimeo');

portfolios = {
  '303834': {
    name: '#betrue',
    description: [
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
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500193645_960x540.jpg'
  },
  '304257': {
    name: '#betrusted',
    description: [
      'Informação e tecnologia são commodities e ponto final.',
      'A sua audiência precisa de curadores criteriosos e confiáveis, e confiabilidade se constrói através de relações de mão dupla.',
      '<br>',
      'Em meio ao Data-Tsunami em que vivemos, assuma o compromisso de filtrar, informar e surpreender.',
      'Antecipe-se, descubra o que seu público quer, necessita e ainda não sabe.'
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500250027_960x540.jpg'
  },
  '305382': {
    name: '#bepart',
    description: [
      'A cultura da participação rejeita fortalezas, muros altos e intransponíveis.',
      'O encastelamento é inaceitável: onde ainda é muralha, construa aberturas.',
      'Participe, compartilhe, aproxime-se, humanize-se.',
      'Você tem todos os meios e os melhores motivos para fazer parte.',
      'Logue-se logo, e descubra as múltiplas oportunidades que esse o mundo multidimensional oferece.'
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500195390_295x166.jpg'
  },
  '307128': {
    name: '#thinkplural',
    description: [
      'Dualismo e bipolarização são comprovadamente restritivos.',
      'Ajude a construir uma cultura do diálogo e da criação coletiva em diferentes plataformas. Pense conceitos abertos, flexíveis, múltiplos.',
      'Rejeite verdades absolutas. Nenhuma merece crédito.',
      'A verdade é multifacetada e permite variadas interpretações e narrativas. Aprenda a contextualizar.',
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500194496_960x540.jpg'
  },
  '307853': {
    name: '#thinkmobile',
    description: [
      'O mundo está em nuvem, acessível e sem fronteiras e há fortes indícios',
      'de que poderá estar, num futuro próximo, em outro lugar igualmente improvável.',
      'Aceite o inimaginável. Assuma a possibilidade de novos formatos e novas configurações; mobile é convívio, conveniência, é recriar experiências.',
      'Pense mobile e subverta antigas concepções de tempo e espaço.'
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500250137_295x166.jpg'
  },
  '308270': {
    name: '#bebeta',
    description: [
      'As versões beta subvertem a lógica dos cronogramas industriais e ajudam consumidores a satisfazer o desejo de interagir com quem produz.',
      'Beta pressupõe questionamento, autocrítica e abertura para a mudança.',
      'Não case com as suas ideias, seja permeável, insatisfeito, incansável.',
      'O definitivo é provisório. Só o estado beta é permanente.'
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500219049_960x540.jpg'
  },
  '316197': {
    name: '#thinkahead',
    description: [
      'Abandone as zonas de conforto e as certezas reducionistas do passado. Evite as fronteiras construídas pelo chamado senso comum.',
      'A vida produz erros e acertos, aprenda com ambos.',
      'Vá em frente, inovação é coragem, experimentação, aprendizado e risco. E o lucro, é a remuneração do risco.',
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500250421_960x540.jpg'
  },
  '327936': {
    name: '#thinkhigher',
    description: [
      'Eleve o pensamento atribuindo aos seus propósitos significados mais nobres.',
      'Business também existem para servir e melhorar a qualidade de vida das pessoas.',
      'Transparência, responsabilidade social e gratidão são moedas fortes.',
      'Elas criam um círculo virtuoso comprovadamente eficaz para os negócios.',
      'O lucro não perdeu a importância.',
      'Apenas não é mais a única razão de ser das empresas.',
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500250510_295x166.jpg'
  },
  '330902': {
    name: '#becollaborative',
    description: [
      'A era digital fragmentou o mercado de trabalho.',
      'Babyboomers, gerações X, Y ou Z, ligadas à corporações ou a home-offices, precisam construir alianças e aprender a operar em rede.',
      'Entenda que hoje o valor está no comprometimento coletivo, na colaboração e na qualidade do que você e seus aliados entregam.'
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500302294_295x166.jpg'
  },
  '331606': {
    name: '#beintuitive',
    description: [
      'Intuir significa olhar com atenção, ver com todos os sentidos.',
      'A sabedoria resulta deste olhar atento e observador.',
      'A intuição revela, antecipa, prediz, subverte e busca as respostas onde elas geralmente estão: no espaço invisível que conecta um acontecimento ao outro.',
      'Liberte-se das amarras do pensamento cartesiano. Demostre com a lógica, descubra com a intuição.'
    ].join(' '),
    picture: '//i.vimeocdn.com/video/500217687_960x540.jpg'
  },
  '331446': {
    name: '#beuseful',
    description: [
      'Utilidade é um valor subjetivo diretamente relacionado a um grau de satisfação. Portanto, utilidade é percepção. Ela não está no que você realiza, mas no modo como o que você realiza é percebido.',
      'Use as premissas deste estudo para aumentar nos outros a percepção de utilidade naquilo que você faz e descubra em "The Communication Revolution" conhecimento capaz de fazer diferença na sua vida, e na vida dos demais.'
    ].join(' '),
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
};

close = function() {
  dialog.addEventListener('transitionend', hide);
  dialog.classList.remove('portfolio-expanded');
};

expanded = function() {
  dialog.removeEventListener('transitionend', expanded);
  dialog.classList.add('portfolio-expanded');
};

hide = function() {
  dialog.removeEventListener('transitionend', hide);
  dialog.classList.add('portfolio-hide');

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
      id = trigger.dataset.portfolioId;

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
    });
  }, 500);
};

reset = function() {
  dialogVideos.innerHTML = '';
};

show = function(trigger, id) {
  var boundingClientRect = trigger.getBoundingClientRect(),
      portfolio = portfolios[id];

  _isOpen = true;

  dialog.addEventListener('transitionend', shown);
  dialog.classList.remove('portfolio-hidden');

  dialog.style.top = boundingClientRect.top + 'px';
  dialog.style.left = boundingClientRect.left + 'px';
  dialog.style.width = trigger.offsetWidth + 'px';
  dialog.style.height = trigger.offsetHeight + 'px';

  dialogDescription.innerHTML = portfolio.description;
  dialogPicture.style.backgroundImage = 'url("' + portfolio.picture + '")';
  dialogName.innerHTML = portfolio.name;

  document.body.classList.add('overlay');
  dialog.classList.add('portfolio-show');
};

shown = function() {
  dialog.removeEventListener('transitionend', shown);
  dialog.removeAttribute('style');

  dialog.classList.add('portfolio-expand');

  window.requestAnimationFrame(function() {
    dialog.addEventListener('transitionend', expanded);
  });
};

isOpen = function() {
  return _isOpen;
}

transition = function(trigger, id) {
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  trigger.classList.add('premises-transition');

  trigger.style.top = '65px';
  trigger.style.left = 0;
  trigger.style.width = width + 'px';
  trigger.style.height = height + 'px';
};

module.exports = {
  init: premises,
  close: close,
  isOpen: isOpen
};
