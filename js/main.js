// Profile photo: show real photo when loaded, fall back to initials
const avatarPhoto = document.querySelector('.avatar-photo');
if (avatarPhoto) {
  avatarPhoto.addEventListener('load', () => avatarPhoto.classList.add('loaded'));
  avatarPhoto.addEventListener('error', () => avatarPhoto.remove());
}

// Lightbox
(function () {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const lbImg = lb.querySelector('.lb-img');
  const lbCaption = lb.querySelector('.lb-caption');
  const lbPrev = lb.querySelector('.lb-prev');
  const lbNext = lb.querySelector('.lb-next');
  let items = [], cur = 0;

  function show(i) {
    cur = (i + items.length) % items.length;
    lbImg.src = items[cur].src;
    lbImg.alt = items[cur].caption;
    lbCaption.textContent = items[cur].caption;
    lbPrev.hidden = items.length <= 1;
    lbNext.hidden = items.length <= 1;
  }

  function open(group, idx) {
    items = [...document.querySelectorAll(`.lb-trigger[data-group="${group}"]`)]
      .map(el => ({ src: el.dataset.src || el.src, caption: el.dataset.caption || el.alt || '' }));
    if (!items.length) return;
    show(idx);
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 200);
  }

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  lbPrev.addEventListener('click', () => show(cur - 1));
  lbNext.addEventListener('click', () => show(cur + 1));

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  // Touch swipe
  let tx = 0;
  lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });

  // Auto-bind all .lb-trigger elements
  document.querySelectorAll('.lb-trigger').forEach(el => {
    el.addEventListener('click', function () {
      const group = this.dataset.group || 'default';
      const all = [...document.querySelectorAll(`.lb-trigger[data-group="${group}"]`)];
      open(group, all.indexOf(this));
    });
  });
})();
