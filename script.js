document.querySelector('.hero__actions .button--reserve')?.remove();
document.querySelector('.reserve__actions .button--ghost')?.remove();

const contactVisual = document.querySelector('.contact__visual');
if (contactVisual) {
  contactVisual.classList.remove('is-missing');
  contactVisual.dataset.fallbackText = '';
  contactVisual.innerHTML = `
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Yame CandleのInstagramを開く"
      style="
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        padding: clamp(30px, 6vw, 64px);
        text-align: center;
        background:
          radial-gradient(circle at 18% 18%, rgba(201, 131, 43, 0.18), transparent 34%),
          linear-gradient(135deg, rgba(255, 253, 248, 0.95), rgba(241, 228, 207, 0.82));
        color: var(--color-brown);
      "
    >
      <span style="display: grid; gap: 18px; justify-items: center; max-width: 520px;">
        <span class="eyebrow" style="margin: 0;">Instagram</span>
        <span style="display: grid; place-items: center; width: clamp(74px, 9vw, 104px); height: clamp(74px, 9vw, 104px); border: 1px solid rgba(159, 97, 32, 0.28); border-radius: 50%; background: rgba(255, 253, 248, 0.82); box-shadow: 0 18px 46px rgba(80, 52, 30, 0.12); font-family: var(--font-serif); font-size: clamp(2rem, 4vw, 3rem); color: var(--color-amber-dark);">◎</span>
        <span style="display: block; font-family: var(--font-serif); font-size: clamp(1.7rem, 4vw, 2.7rem); line-height: 1.45; letter-spacing: 0.06em;">制作風景や最新情報は<br>Instagramへ</span>
        <span style="display: block; color: var(--color-soft-brown); line-height: 1.9;">レッスンの雰囲気、完成作品、空き日程のお知らせを投稿しています。</span>
        <span class="button button--primary" style="margin-top: 6px; min-width: min(100%, 260px);">Instagramを見る</span>
      </span>
    </a>
  `;
}

const menuToggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-nav]');
const navLinks = navigation ? [...navigation.querySelectorAll('a')] : [];

const closeMenu = () => {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navigation.classList.toggle('is-open', !isExpanded);
    document.body.classList.toggle('menu-open', !isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

document.querySelectorAll('.photo-frame img').forEach((image) => {
  const frame = image.closest('.photo-frame');
  if (!frame) return;

  frame.dataset.fallbackText = image.dataset.fallback || image.alt || 'Yame Candle';

  image.addEventListener('error', () => {
    image.hidden = true;
    frame.classList.add('is-missing');
  });
});

document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;

    document.querySelectorAll('.faq__item[open]').forEach((openItem) => {
      if (openItem !== item) openItem.open = false;
    });
  });
});
