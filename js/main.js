// js/main.js
// Handles dynamic year, mobile menu, smooth scroll, contact form behavior, and theme toggle.

(function(){
  function init(){
    // Dynamic year
    var yEl = document.getElementById('y');
    if (yEl) yEl.textContent = new Date().getFullYear();

    // Mobile menu elements
    var menu = document.querySelector('.mobile-menu');
    var navCollapseBtn = document.getElementById('nav-collapse-toggle');

    // Toggle function for collapse menu
    function toggleMenu(){
      if (!menu) return;
      var isOpen = !menu.hasAttribute('hidden');
      if (isOpen) {
        menu.setAttribute('hidden', '');
        if (navCollapseBtn) navCollapseBtn.setAttribute('aria-expanded', 'false');
      } else {
        menu.removeAttribute('hidden');
        if (navCollapseBtn) navCollapseBtn.setAttribute('aria-expanded', 'true');
      }
    }

    // Attach to nav-collapse-toggle button
    if (navCollapseBtn) {
      navCollapseBtn.addEventListener('click', toggleMenu);
    }

    // Close mobile menu on link click
    if (menu) {
      menu.querySelectorAll('a').forEach(function(link){
        link.addEventListener('click', function(){
          menu.setAttribute('hidden', '');
          if (navCollapseBtn) navCollapseBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href.startsWith('#')){
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Contact form behavior
    var form = document.getElementById('contact-form');
    if (form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        // Friendly confirmation message
        alert('Thanks! Your message has been sent to Vannak Tasty Plates. We will respond shortly.');
        try{ form.reset(); }catch(e){}
      });
    }

    // Theme toggle (persisted in localStorage)
    var themeToggle = document.getElementById('theme-toggle');
    function applyTheme(pref){
      if (pref === 'dark') document.body.classList.add('dark'); else document.body.classList.remove('dark');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', String(pref === 'dark'));
      if (themeToggle) themeToggle.textContent = pref === 'dark' ? '☀️' : '🌙';
    }
    // load saved preference
    var saved = null;
    try{ saved = localStorage.getItem('vannak-theme'); }catch(e){}
    if (!saved){
      // default to light
      saved = 'light';
    }
    applyTheme(saved);
    if (themeToggle){
      themeToggle.addEventListener('click', function(){
        var isDark = document.body.classList.contains('dark');
        var next = isDark ? 'light' : 'dark';
        try{ localStorage.setItem('vannak-theme', next); }catch(e){}
        applyTheme(next);
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
