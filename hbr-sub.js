/* ═══════════════════════════════════════════════════════════════
   Hair&Barber Revolution - animazioni condivise delle sottopagine
   Nessuna libreria: IntersectionObserver per le comparse,
   un solo listener del puntatore per la luce sulle card.
   Se lo script non parte, tutto resta visibile (le regole che
   nascondono gli elementi dipendono dalla classe .js su <html>).
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var d = document.documentElement;
  d.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Divide il titolo della testata in parole, per farle salire una alla volta */
  function splitWords(el) {
    if (!el || el.getAttribute('data-split')) return;
    var words = el.textContent.replace(/\s+/g, ' ').trim().split(' ');
    el.setAttribute('aria-label', el.textContent.trim());
    el.textContent = '';
    words.forEach(function (word, i) {
      var w = document.createElement('span'); w.className = 'w'; w.style.setProperty('--i', i); w.setAttribute('aria-hidden', 'true');
      var s = document.createElement('span'); s.textContent = word; w.appendChild(s);
      el.appendChild(w);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    el.setAttribute('data-split', '1');
  }

  /* Comparsa allo scroll: osserva ogni [data-reveal] non ancora visto.
     Va richiamata dopo che uno script ha inserito nuovo contenuto. */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px' }) : null;

  function reveal(root) {
    var els = (root || document).querySelectorAll('[data-reveal]:not([data-seen])');
    Array.prototype.forEach.call(els, function (el) {
      el.setAttribute('data-seen', '1');
      if (!io || reduce) { el.classList.add('in'); return; }
      io.observe(el);
    });
  }

  /* Luce che segue il puntatore sulle card .spot (un solo listener, aggiornato a ogni frame) */
  var raf = 0, lastEvt = null;
  if (!reduce && window.matchMedia && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('pointermove', function (e) {
      lastEvt = e;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var card = lastEvt.target.closest && lastEvt.target.closest('.spot');
        if (!card) return;
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (lastEvt.clientX - r.left) + 'px');
        card.style.setProperty('--my', (lastEvt.clientY - r.top) + 'px');
      });
    }, { passive: true });
  }

  /* Indice della Privacy: evidenzia la sezione che si sta leggendo */
  function tocSpy() {
    var links = document.querySelectorAll('.privacy-toc a');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    Array.prototype.forEach.call(links, function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(map).forEach(function (id) { map[id].classList.toggle('is-current', id === e.target.id); });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('.page-title'), splitWords);
    reveal();
    tocSpy();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.HBR = { reveal: reveal, splitWords: splitWords, reduceMotion: reduce };
})();
