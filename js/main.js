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

  /* ---------- Facebook-plasings ----------
     Elke .feed-card[data-fb-post] met 'n data-href word 'n Facebook-plasing.
     Facebook lewer dit teen 350px breed; ons skaal dit om die kaart te vul. */
  var FB_WIDTH = 350;
  var fit = function (card) {
    card.style.setProperty('--s', String(card.clientWidth / FB_WIDTH));
  };
  var ro = 'ResizeObserver' in window
    ? new ResizeObserver(function (entries) { entries.forEach(function (e) { fit(e.target); }); })
    : null;
  document.querySelectorAll('[data-fb-post]').forEach(function (card, i) {
    var href = (card.getAttribute('data-href') || '').trim();
    if (!href) {
      card.classList.add('placeholder');
      card.setAttribute('role', 'img');
      card.setAttribute('aria-label', 'Facebook-plasing ' + (i + 1));
      card.innerHTML = '<span class="rof-label">Facebook-plasing ' + (i + 1) + '</span>';
      return;
    }
    var frame = document.createElement('iframe');
    frame.title = 'Facebook-plasing ' + (i + 1) + ' van Rapport Onderwysfonds';
    frame.loading = 'lazy';
    frame.scrolling = 'no';
    frame.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
    // Reels en video's gebruik Facebook se videospeler; gewone plasings die plasing-inprop.
    var plugin = /\/(reel|videos?)\//.test(href) ? 'video' : 'post';
    frame.src = 'https://www.facebook.com/plugins/' + plugin + '.php?href=' + encodeURIComponent(href) +
      '&show_text=true&width=' + FB_WIDTH + '&locale=af_ZA';
    card.appendChild(frame);
    fit(card);
    if (ro) ro.observe(card); else window.addEventListener('resize', function () { fit(card); });
  });

  /* ---------- Ligkas (modaal) ----------
     Knoppies met data-modal-open="<id>" maak die <dialog> oop. As die dialoog
     'n [data-hs-form]-element bevat, word die HubSpot-vorm eers dan gelaai. */
  var hsScript = null;
  var loadHubSpot = function () {
    if (hsScript) return hsScript;
    hsScript = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      s.charset = 'utf-8';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return hsScript;
  };
  // HubSpot teken die vorm in 'n iframe op dieselfde oorsprong; ons sit ons eie
  // stylblad (css/hs-form.css) daarin sodat dit soos die res van die webwerf lyk.
  var HS_CSS = new URL('css/hs-form.css?v=2', document.baseURI).href;
  var styleHubSpotForm = function (target) {
    var frame = target.querySelector('iframe');
    var doc = null;
    try { doc = frame ? frame.contentDocument : null; } catch (e) { doc = null; }
    if (!doc || !doc.head || doc.getElementById('rof-hs-css')) return;
    var link = doc.createElement('link');
    link.id = 'rof-hs-css';
    link.rel = 'stylesheet';
    link.href = HS_CSS;
    doc.head.appendChild(link);
  };
  var mountForm = function (target) {
    if (target.getAttribute('data-hs-loaded')) return;
    target.setAttribute('data-hs-loaded', '1');
    loadHubSpot().then(function () {
      target.innerHTML = '';
      window.hbspt.forms.create({
        portalId: target.getAttribute('data-hs-portal'),
        formId: target.getAttribute('data-hs-form'),
        region: target.getAttribute('data-hs-region'),
        target: '#' + target.id,
        onFormReady: function () { styleHubSpotForm(target); }
      });
    }).catch(function () {
      target.removeAttribute('data-hs-loaded');
      target.innerHTML = '<p class="modal__status">Die vorm kon nie gelaai word nie. Probeer weer, of e-pos <a href="mailto:charl@rof.org.za">Charl@rof.org.za</a>.</p>';
    });
  };
  document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
    var dialog = document.getElementById(btn.getAttribute('data-modal-open'));
    if (!dialog || typeof dialog.showModal !== 'function') return;
    btn.addEventListener('click', function () {
      dialog.showModal();
      var form = dialog.querySelector('[data-hs-form]');
      if (form) mountForm(form);
      // Nuwer HubSpot-inbedding (.hs-form-frame): laai die skrip eers wanneer die ligkas oopmaak.
      var frame = dialog.querySelector('[data-hs-frame-src]');
      if (frame && !frame.getAttribute('data-hs-loaded')) {
        frame.setAttribute('data-hs-loaded', '1');
        var sc = document.createElement('script');
        sc.src = frame.getAttribute('data-hs-frame-src');
        sc.defer = true;
        document.head.appendChild(sc);
        // Wys "Laai vorm…" totdat HubSpot se vorm sigbaar is (dit kan 'n paar sekondes neem).
        var status = frame.querySelector('[data-hs-status]');
        if (status) {
          var tries = 0;
          var poll = setInterval(function () {
            var f = frame.querySelector('.hs-form-frame iframe');
            if ((f && f.offsetHeight > 50) || ++tries > 100) { status.remove(); clearInterval(poll); }
          }, 300);
        }
      }
    });
  });
  document.querySelectorAll('dialog.modal').forEach(function (dialog) {
    dialog.querySelectorAll('[data-modal-close]').forEach(function (b) {
      b.addEventListener('click', function () { dialog.close(); });
    });
    // Klik op die donker agtergrond sluit die ligkas.
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
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
