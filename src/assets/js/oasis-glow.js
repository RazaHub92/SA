/**
 * Oasis Glow – Ready for Salla import
 * Vanilla JS: theme toggle, 3D tilt, hero parallax, scroll reveal, sticky ATC pulse
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var lowEnergy = root.classList.contains('oasis-low-energy');

  function initThemeToggle() {
    var btn = document.getElementById('oasis-theme-toggle');
    if (!btn) return;

    function syncLabels() {
      var isDark = root.classList.contains('dark');
      var sunEl = btn.querySelector('.oasis-theme-toggle__sun');
      var moonEl = btn.querySelector('.oasis-theme-toggle__moon');
      if (sunEl && moonEl) {
        sunEl.classList.toggle('hidden', !isDark);
        moonEl.classList.toggle('hidden', isDark);
      }
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    try {
      var stored = localStorage.getItem('oasis-theme');
      if (stored === 'light') {
        root.classList.remove('dark');
      } else if (stored === 'dark') {
        root.classList.add('dark');
      }
    } catch (e) {}

    syncLabels();

    btn.addEventListener('click', function () {
      root.classList.toggle('dark');
      try {
        localStorage.setItem('oasis-theme', root.classList.contains('dark') ? 'dark' : 'light');
      } catch (e) {}
      syncLabels();
    });
  }

  function initTilt() {
    if (lowEnergy) return;
    var cards = document.querySelectorAll('.oasis-tilt-card');
    cards.forEach(function (el) {
      var intensity = parseFloat(el.getAttribute('data-tilt-intensity') || '12', 10);
      if (isNaN(intensity)) intensity = 12;
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          'perspective(900px) rotateY(' + x * intensity + 'deg) rotateX(' + -y * intensity + 'deg) scale3d(1.01,1.01,1)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

  function initHeroParallax() {
    if (lowEnergy) return;
    var layer = document.querySelector('.oasis-hero__parallax');
    if (!layer) return;
    var onMove = function (e) {
      var cx = window.innerWidth / 2;
      var cy = window.innerHeight / 2;
      var dx = (e.clientX - cx) / cx;
      var dy = (e.clientY - cy) / cy;
      layer.style.transform =
        'translate3d(' + dx * 12 + 'px,' + dy * 8 + 'px,0) scale(1.04)';
    };
    window.addEventListener('mousemove', onMove, { passive: true });
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.oasis-float-on-scroll').forEach(function (el) {
        el.classList.add('is-inview');
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) en.target.classList.add('is-inview');
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    document.querySelectorAll('.oasis-float-on-scroll').forEach(function (el) {
      io.observe(el);
    });
  }

  function initStickyAtcPulse() {
    var bar = document.querySelector('.oasis-neon-sticky-wrap');
    if (!bar) return;
    if (root.classList.contains('oasis-no-neon')) return;
    bar.classList.add('oasis-sticky-atc-pulse');
  }

  function onReady() {
    initThemeToggle();
    initTilt();
    initHeroParallax();
    initScrollReveal();
    initStickyAtcPulse();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
