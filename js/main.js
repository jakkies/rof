/* ROF Webwerf — klein, afhanklikheidsvrye interaksies. */
(function () {
  'use strict';

  /* ---------- Mobiele kieslys ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Sluit ×' : 'Kieslys';
    };
    toggle.addEventListener('click', function () { setMenu(menu.hidden); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setMenu(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 1100px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Oortjies (sosiale media, skenk-opsies) ---------- */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
      // Laai die Facebook-iframe eers wanneer dit nodig is.
      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      var lazy = panel && panel.querySelector('iframe[data-src]');
      if (lazy) { lazy.src = lazy.getAttribute('data-src'); lazy.removeAttribute('data-src'); }
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (next) { e.preventDefault(); select(next, true); }
      });
    });
    var initial = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
    if (initial) select(initial);
  });

  /* ---------- Gereelde vrae ---------- */
  var faqButtons = document.querySelectorAll('.faq__q');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      faqButtons.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        document.getElementById(b.getAttribute('aria-controls')).hidden = true;
      });
      if (!open) {
        btn.setAttribute('aria-expanded', 'true');
        document.getElementById(btn.getAttribute('aria-controls')).hidden = false;
      }
    });
  });

  /* ---------- Tydlyn ---------- */
  var tl = document.querySelector('.timeline');
  document.querySelectorAll('[data-tl]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (tl) tl.scrollBy({ left: Number(btn.getAttribute('data-tl')) * 340, behavior: 'smooth' });
    });
  });

  /* ---------- Vorms ----------
     Daar is nog geen agterkant nie (HubSpot-integrasie is hangende).
     Ons valideer in die blaaier en wys 'n bevestiging; koppel die
     `action` van elke vorm aan HubSpot sodra dit beskikbaar is. */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      form.querySelectorAll('.field').forEach(function (field) {
        var input = field.querySelector('input, select, textarea');
        if (!input) return;
        var msg = '';
        var val = input.value.trim();
        if (input.required && !val) msg = 'Hierdie veld is verpligtend.';
        else if (input.type === 'email' && val && !EMAIL.test(val)) msg = "Voer 'n geldige e-posadres in.";
        var err = field.querySelector('.field__error');
        if (msg) {
          field.classList.add('is-invalid');
          input.setAttribute('aria-invalid', 'true');
          if (!err) {
            err = document.createElement('span');
            err.className = 'field__error';
            err.id = (input.id || input.name) + '-err';
            input.setAttribute('aria-describedby', err.id);
            field.appendChild(err);
          }
          err.textContent = msg;
          if (!firstBad) firstBad = input;
        } else {
          field.classList.remove('is-invalid');
          input.removeAttribute('aria-invalid');
          if (err) err.remove();
        }
      });
      if (firstBad) { firstBad.focus(); return; }
      var note = form.querySelector('.form-note');
      if (note) { note.hidden = false; }
      form.reset();
    });
  });

  /* ---------- Jaartal in voet ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
