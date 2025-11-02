// js/main.js
// Moved from index.html inline scripts. Handles year, mobile menu, smooth scroll, and contact form demo.

(function(){
  function init(){
    // Dynamic year
    var yEl = document.getElementById('y');
    if (yEl) yEl.textContent = new Date().getFullYear();

    // Mobile menu elements
    var menu = document.querySelector('.mobile-menu');
    var btn = document.querySelector('.mobile-toggle');

    // Expose toggle function globally because index.html uses onclick attribute
    window.toggleMobileMenu = function(){
      if (!menu || !btn) return;
      var isOpen = !menu.hasAttribute('hidden');
      if (isOpen) {
        menu.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        menu.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      }
    };

    // Close mobile menu on link click
    if (menu) {
      menu.querySelectorAll('a').forEach(function(link){
        link.addEventListener('click', function(){
          menu.setAttribute('hidden', '');
          if (btn) btn.setAttribute('aria-expanded', 'false');
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

    // Contact form demo (moved from inline onsubmit)
    var form = document.getElementById('contact-form');
    if (form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        // Friendly demo message
        alert('Thanks! This is a local demo — message sent for Vann Tasty Plates.');
        try{ form.reset(); }catch(e){}
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
