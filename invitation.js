document.addEventListener('DOMContentLoaded', function () {

  // ── Animación intro del sobre ────────────────────────────────────────────
  var overlay    = document.getElementById('intro-overlay');
  var invitation = document.querySelector('.invitation');
  var flapLeft   = document.getElementById('flap-left');
  var flapRight  = document.getElementById('flap-right');
  var flapBottom = document.getElementById('flap-bottom');
  var introCard  = document.getElementById('intro-card');

  if (overlay && invitation) {
    overlay.addEventListener('click', function () {
      // Piezas del sobre vuelan hacia afuera
      if (flapLeft)   { flapLeft.style.transform   = 'translate(-300%, 5%) rotate(45deg)';       flapLeft.style.opacity   = '0'; }
      if (flapRight)  { flapRight.style.transform  = 'translate(200%, 5%) rotate(45deg)';        flapRight.style.opacity  = '0'; }
      if (flapBottom) { flapBottom.style.transform = 'translate(-50%, 220%) rotate(45deg)';      flapBottom.style.opacity = '0'; }
      if (introCard)  { introCard.style.transform  = 'translateX(-50%) translateY(-220%) rotate(45deg)'; introCard.style.opacity  = '0'; }

      // Tras la animación, mostrar invitación y ocultar overlay
      setTimeout(function () {
        overlay.style.display = 'none';
        invitation.classList.remove('hidden');
        invitation.classList.add('block');
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Arrancar música automáticamente (requiere interacción previa del usuario = clic en el sobre)
        var song = document.getElementById('song');
        if (song) {
          song.play().catch(function (err) {
            console.warn('Audio no pudo reproducirse:', err);
          });
        }
      }, 750);
    });
  }

  // ── Corregir fecha (reemplaza spans 3D por texto limpio) ─────────────────
  var dateDiv = document.querySelector('.text-xl.tracking-widest');
  if (dateDiv) {
    var dateP = dateDiv.querySelector('p');
    if (dateP) {
      dateP.innerHTML = '— 18 · 12 · 2026 —';
      dateP.removeAttribute('class');
      dateP.removeAttribute('style');
      dateP.style.cssText = 'color: #393939; letter-spacing: 0.15em;';
    }
  }

  // ── Carruseles (bus y alojamientos) ──────────────────────────────────────
  document.querySelectorAll('.embla-carousel_embla__wD71s').forEach(function (outer) {
    var container = outer.querySelector('.embla-carousel_emblaContainer__NX79x');
    if (!container) return;
    var total   = container.children.length;
    var current = 0;
    var wrapper = outer.closest('.relative');
    var prevImg = wrapper ? wrapper.querySelector('img[alt="<"]') : null;
    var nextImg = wrapper ? wrapper.querySelector('img[alt=">"]') : null;
    var dots    = wrapper ? wrapper.querySelectorAll('button[type="button"]') : [];

    function goTo(index) {
      current = ((index % total) + total) % total;
      container.style.transform = 'translate3d(-' + (current * 100) + '%, 0px, 0px)';
      dots.forEach(function (dot, i) {
        var inner = dot.querySelector('div');
        if (!inner) return;
        inner.className = i === current
          ? 'h-3 w-3 rounded-full bg-black/80'
          : 'h-3 w-3 rounded-full scale-75 border-2 border-black bg-gray-400';
      });
    }

    if (prevImg) prevImg.closest('button').addEventListener('click', function () { goTo(current - 1); });
    if (nextImg) nextImg.closest('button').addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) { dot.addEventListener('click', function () { goTo(i); }); });
    goTo(0);
  });

  // ── Carrusel álbum de fotos ───────────────────────────────────────────────
  document.querySelectorAll('.carousel-album_embla__mfewC').forEach(function (outer) {
    var container = outer.querySelector('.carousel-album_emblaContainer__nBGH0');
    if (!container) return;
    var total   = container.children.length;
    var current = 0;
    var wrapper = outer.closest('.relative');
    var prevImg = wrapper ? wrapper.querySelector('img[alt="<"]') : null;
    var nextImg = wrapper ? wrapper.querySelector('img[alt=">"]') : null;

    function goTo(index) {
      current = ((index % total) + total) % total;
      container.style.transform = 'translate3d(-' + (current * 100) + '%, 0px, 0px)';
    }

    if (prevImg) prevImg.closest('button').addEventListener('click', function () { goTo(current - 1); });
    if (nextImg) nextImg.closest('button').addEventListener('click', function () { goTo(current + 1); });
    goTo(0);
  });

  // ── Botón de música (toggle play/pause) ───────────────────────────────────
  var musicBtn     = document.querySelector('#bottom-controls button');
  var speakerIcon  = musicBtn ? musicBtn.querySelector('img') : null;
  var playing      = false;

  if (musicBtn) {
    musicBtn.addEventListener('click', function () {
      var song = document.getElementById('song');
      if (!song) return;
      if (playing) {
        song.pause();
        if (speakerIcon) speakerIcon.style.opacity = '0.5';
      } else {
        song.play().catch(function (err) {
          console.warn('Audio no pudo reproducirse:', err);
        });
        if (speakerIcon) speakerIcon.style.opacity = '1';
      }
      playing = !playing;
    });
  }

  // ── Copiar al portapapeles ────────────────────────────────────────────────
  function setupCopy(elementId) {
    var el  = document.getElementById(elementId);
    if (!el) return;
    var btn = el.closest('button');
    if (!btn) return;
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(el.textContent.trim()).then(function () {
        var original = el.textContent;
        el.textContent = '¡Copiado!';
        setTimeout(function () { el.textContent = original; }, 2000);
      }).catch(function () {});
    });
  }

  setupCopy('gift-num-1-1');
  setupCopy('qr-1');

  // ── Cuenta regresiva dinámica ─────────────────────────────────────────────
  // Actualizar si cambia la fecha de la boda
  var weddingDate = new Date('2026-12-18T18:00:00');

  function updateCountdown() {
    var diff = weddingDate - new Date();
    if (diff <= 0) {
      document.querySelectorAll('.flex.justify-center.py-4 span.text-3xl').forEach(function (s) {
        s.textContent = '0';
      });
      return;
    }
    var days  = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins  = Math.floor((diff % 3600000) / 60000);
    var secs  = Math.floor((diff % 60000) / 1000);

    var spans = document.querySelectorAll('.flex.justify-center.py-4 span.text-3xl');
    if (spans.length >= 4) {
      spans[0].textContent = days;
      spans[1].textContent = hours;
      spans[2].textContent = mins;
      spans[3].textContent = secs;
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});