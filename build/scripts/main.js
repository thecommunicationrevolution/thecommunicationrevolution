(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// easing functions from "Tween.js"

exports.linear = function(n){
  return n;
};

exports.inQuad = function(n){
  return n * n;
};

exports.outQuad = function(n){
  return n * (2 - n);
};

exports.inOutQuad = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return - 0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function(n){
  return n * n * n;
};

exports.outCube = function(n){
  return --n * n * n + 1;
};

exports.inOutCube = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2 ) * n * n + 2);
};

exports.inQuart = function(n){
  return n * n * n * n;
};

exports.outQuart = function(n){
  return 1 - (--n * n * n * n);
};

exports.inOutQuart = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n;
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function(n){
  return n * n * n * n * n;
}

exports.outQuint = function(n){
  return --n * n * n * n * n + 1;
}

exports.inOutQuint = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n * n;
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function(n){
  return 1 - Math.cos(n * Math.PI / 2 );
};

exports.outSine = function(n){
  return Math.sin(n * Math.PI / 2);
};

exports.inOutSine = function(n){
  return .5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function(n){
  return 0 == n ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function(n){
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function(n){
  if (0 == n) return 0;
  if (1 == n) return 1;
  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function(n){
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function(n){
  return Math.sqrt(1 - (--n * n));
};

exports.inOutCirc = function(n){
  n *= 2
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function(n){
  var s = 1.70158;
  return n * n * (( s + 1 ) * n - s);
};

exports.outBack = function(n){
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function(n){
  var s = 1.70158 * 1.525;
  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
};

exports.inBounce = function(n){
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function(n){
  if ( n < ( 1 / 2.75 ) ) {
    return 7.5625 * n * n;
  } else if ( n < ( 2 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
  } else if ( n < ( 2.5 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
  } else {
    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
  }
};

exports.inOutBounce = function(n){
  if (n < .5) return exports.inBounce(n * 2) * .5;
  return exports.outBounce(n * 2 - 1) * .5 + .5;
};

// aliases

exports['in-quad'] = exports.inQuad;
exports['out-quad'] = exports.outQuad;
exports['in-out-quad'] = exports.inOutQuad;
exports['in-cube'] = exports.inCube;
exports['out-cube'] = exports.outCube;
exports['in-out-cube'] = exports.inOutCube;
exports['in-quart'] = exports.inQuart;
exports['out-quart'] = exports.outQuart;
exports['in-out-quart'] = exports.inOutQuart;
exports['in-quint'] = exports.inQuint;
exports['out-quint'] = exports.outQuint;
exports['in-out-quint'] = exports.inOutQuint;
exports['in-sine'] = exports.inSine;
exports['out-sine'] = exports.outSine;
exports['in-out-sine'] = exports.inOutSine;
exports['in-expo'] = exports.inExpo;
exports['out-expo'] = exports.outExpo;
exports['in-out-expo'] = exports.inOutExpo;
exports['in-circ'] = exports.inCirc;
exports['out-circ'] = exports.outCirc;
exports['in-out-circ'] = exports.inOutCirc;
exports['in-back'] = exports.inBack;
exports['out-back'] = exports.outBack;
exports['in-out-back'] = exports.inOutBack;
exports['in-bounce'] = exports.inBounce;
exports['out-bounce'] = exports.outBounce;
exports['in-out-bounce'] = exports.inOutBounce;

},{}],2:[function(require,module,exports){
/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame
  || window.webkitCancelAnimationFrame
  || window.mozCancelAnimationFrame
  || window.oCancelAnimationFrame
  || window.msCancelAnimationFrame
  || window.clearTimeout;

exports.cancel = function(id){
  cancel.call(window, id);
};

},{}],3:[function(require,module,exports){
var scroll = require('./scroll'),
    header,
    video,
    menuButton,
    scrollButton,
    status,
    links,
    timer;

function scrollToSection(e) {
  e.preventDefault();
  var section = document.getElementById(e.currentTarget.getAttribute('href')),
      elementScrollTop = section.offsetTop;

  header.classList.remove('nav-small--open');

  if (section.id !== 'landing')
    elementScrollTop -= 65;

  scroll(elementScrollTop, {
    ease: 'inOutCirc',
    duration: 1000
  });
}

function toggleMenu(e) {
  e.preventDefault();

  if (header.classList.contains('nav-small--open'))
    return header.classList.remove('nav-small--open');
  header.classList.add('nav-small--open');
}

module.exports = function() {
  wrapper = document.getElementById('wrapper');
  video = document.getElementById('video');
  header = document.getElementById('header');
  links = document.querySelectorAll('header nav li a, .nav-small-logo');
  scrollButton = document.getElementById('start-scroll');
  menuButton = document.getElementsByClassName('nav-small-button')[0];

    for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', scrollToSection);
  };

  menuButton.addEventListener('click', toggleMenu);
  scrollButton.addEventListener('click', scrollToSection);

  window.onscroll = function(e) {
    if (!status && window.scrollY > 25) {
      header.classList.add('toggle');
      video.pause();
      status = true;
    } else if (status && window.scrollY < 25) {
      header.classList.remove('toggle');
      video.play();
      status = false;
    }
  }
};

},{"./scroll":7}],4:[function(require,module,exports){
var main,
    header = require('./header'),
    manifest = require('./manifest'),
    premises = require('./premises'),
    styles = require('./styles'),
    theater = require('./theater');

main = function() {
  styles();
  header();
  manifest();
  theater();
  premises();
};

document.addEventListener('DOMContentLoaded', main);

},{"./header":3,"./manifest":5,"./premises":6,"./styles":8,"./theater":9}],5:[function(require,module,exports){
var bind,
    bindTriggers,
    boxes,
    cache,
    dialog,
    dialogClose,
    hide,
    manifest,
    open,
    show,
    triggers;

bind = function() {
  dialogClose.addEventListener('click', hide);
  triggers.forEach(bindTriggers);
};

bindTriggers = function(trigger) {
  trigger.addEventListener('click', open);
};

cache = function() {
  boxes = {
    specification: document.querySelector('.manifest-specification'),
    terms: document.querySelector('.manifest-terms')
  };

  dialog = document.querySelector('.manifest');
  dialogClose = document.querySelector('.manifest-close');
  triggers = [ ].slice.call(document.querySelectorAll('[data-manifest-id]'));
};

hide = function() {
  var id;

  for (id in boxes) {
    if (boxes.hasOwnProperty(id)) {
      boxes[id].classList.remove('manifest-active');
    }
  }

  dialog.classList.add('manifest-hidden');
  document.body.classList.remove('overlay');
};

manifest = function() {
  cache();
  bind();
};

open = function(event) {
  var trigger = event.currentTarget,
      id = trigger.dataset.manifestId;

  if (!id.length) {
    throw 'manifest called but no id was given';
  }

  show(id);
};

show = function(id) {
  document.body.classList.add('overlay');
  boxes[id].classList.add('manifest-active');
  dialog.classList.remove('manifest-hidden');
};

manifest.hide = hide;
manifest.show = show;

module.exports = manifest;

},{}],6:[function(require,module,exports){
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

  dialogDescription.innerHTML = portfolio.description;
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

},{"./theater":9,"./vimeo":10}],7:[function(require,module,exports){
var raf = require('raf-component'),
    ease = require('ease-component');

var scroll = function(to, options) {
  var type = 'inOutSine',
      duration = 350,
      cancelled = false,
      start = +new Date,
      from = window.scrollY;

  options = options || {};
  type = options.ease || type;
  duration = options.duration || duration;

  function cancel() {
    cancelled = true;
    document.removeEventListener('mousewheel', cancel);
  }

  function update(timestamp) {
    var now = +new Date,
        time = Math.min(1, ((now - start) / duration)),
        eased = ease[type](time);

    window.scrollTo(0, (eased * (to - from)) + from);

    if (time < 1)
      return raf(update);
    else
      cancel();
  }

  document.addEventListener('mousewheel', cancel);
  raf(update);
}

module.exports = scroll;
},{"ease-component":1,"raf-component":2}],8:[function(require,module,exports){
var link,
    loaded,
    styles;

loaded = function() {
  link.removeAttribute('media');
};

styles = function() {
  link = document.createElement('link');

  link.addEventListener('load', loaded);

  link.href = 'build/styles/minor.css';
  link.media = 'only x';
  link.rel = 'stylesheet';

  document.head.appendChild(link);
};

module.exports = styles;

},{}],9:[function(require,module,exports){
var bind,
    cache,
    dialog,
    wrapper,
    video,
    hide,
    hidden,
    open,
    player,
    reset,
    show,
    shown,
    theater,
    triggers,
    watch,
    pause;

bind = function(trigger) {
  dialog.addEventListener('click', hide);
  trigger.addEventListener('click', open);
  window.addEventListener('keyup', watch);
};

cache = function() {
  wrapper = document.getElementById('wrapper');
  video  = document.getElementById('video');
  dialog = document.querySelector('#theater');
  triggers = [].slice.call(document.querySelectorAll('[data-theater-id]'));

  triggers.forEach(bind);
};

hide = function() {
  document.body.classList.remove('overlay');
  dialog.addEventListener('transitionend', hidden);
  dialog.classList.remove('theater-show');
  dialog.classList.add('theater-hide');
};

hidden = function() {
  dialog.classList.remove('theater-hide');
  dialog.removeEventListener('transitionend', hidden);
  wrapper.classList.remove('theater--open');
  dialog.removeChild(player);
  video.play();
  
  reset();
};

open = function(event) {
  var trigger = event.currentTarget;
  if (!trigger.dataset.theaterId.length) {
    throw 'theater called but no video id was given';
  }

  show(trigger.dataset.theaterId);
};

reset = function() {
  player.removeAttribute('src');
};

show = function(id) {
  var source = '//player.vimeo.com/video/{{id}}?autoplay=1&badge=0&byline=0&portrait=0&title=0&api=1';

  video.pause();

  player = null;
  player = document.createElement('iframe');
  player.setAttribute('id', 'theater-player')
  player.setAttribute('webkitallowfullscreen', '');
  player.setAttribute('mozallowfullscreen', '');
  player.setAttribute('allowfullscreen', '');
  player.setAttribute('src', source.replace('{{id}}', id));
  dialog.appendChild(player);
  
  dialog.addEventListener('transitionend', shown);
  wrapper.classList.add('theater--open');
  dialog.classList.add('theater-show');
  document.body.classList.add('overlay');
};

shown = function() {
  dialog.removeEventListener('transitionend', shown);
};

theater = function() {
  cache();
};

watch = function(event) {
  if (event.which === 27) {
    hide();
  }
};

theater.hide = hide;
theater.reset = reset;
theater.show = show;

module.exports = theater;

},{}],10:[function(require,module,exports){
var dataFromEndpointLoaded,
    getDataFromEndpoint,
    getVideosFromPortfolio,
    cache = {};

dataFromEndpointLoaded = function(xhr, callback) {
  var data;

  try {
    data = JSON.parse(xhr.response);
  } catch (error) {
    console.error(error);
  }

  callback(data.data);
};

getDataFromEndpoint = function(endpoint, callback) {
  if (cache[endpoint])
    return callback(cache[endpoint]);

  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', dataFromEndpointLoaded.bind(window, xhr, function(data) {
    cache[endpoint] = data;
    callback(cache[endpoint]);
  }));

  xhr.open('get', 'https://api.vimeo.com/me/' + endpoint + '?page=1&per_page=50&sort=date&direction=desc&api=1');
  xhr.setRequestHeader('Accept', 'application/vnd.vimeo.*+json;version=3.2');
  xhr.setRequestHeader('Authorization', 'bearer 339c8bb892a6729db7e7b89c6f56c588');
  xhr.send();
};

getVideosFromPortfolio = function(portfolio, callback) {
  var endpoint = 'portfolios/' + portfolio + '/videos';

  getDataFromEndpoint(endpoint, callback);
};

module.exports = {
  getVideosFromPortfolio: getVideosFromPortfolio
};

},{}]},{},[3,4,5,6,7,8,9,10]);
