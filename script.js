document.querySelector('.hero__actions .button--reserve')?.remove();
document.querySelector('.reserve__actions .button--ghost')?.remove();

const accessList = document.querySelector('.access__list');

const updateAccessInfo = () => {
  if (!accessList) return;

  const rows = [...accessList.querySelectorAll(':scope > div')];

  rows.forEach((row) => {
    row.style.gridTemplateColumns = window.matchMedia('(max-width: 699px)').matches
      ? '6.6em minmax(0, 1fr)'
      : '7.2em minmax(0, 1fr)';
    row.style.alignItems = 'start';

    const label = row.querySelector('dt');
    if (label) {
      label.style.whiteSpace = 'nowrap';
      label.style.letterSpacing = '0.02em';
    }
  });

  const hasEmailRow = rows.some((row) => row.querySelector('dt')?.textContent?.trim() === 'メール');
  if (!hasEmailRow) {
    const emailRow = document.createElement('div');
    emailRow.innerHTML = '<dt>メール</dt><dd><a href="mailto:yamesample@co.jp">yamesample@co.jp</a></dd>';
    emailRow.style.gridTemplateColumns = window.matchMedia('(max-width: 699px)').matches
      ? '6.6em minmax(0, 1fr)'
      : '7.2em minmax(0, 1fr)';
    emailRow.style.alignItems = 'start';

    const label = emailRow.querySelector('dt');
    if (label) {
      label.style.whiteSpace = 'nowrap';
      label.style.letterSpacing = '0.02em';
    }

    const link = emailRow.querySelector('a');
    if (link) {
      link.style.textDecoration = 'none';
      link.style.color = 'inherit';
      link.style.wordBreak = 'break-word';
    }

    accessList.appendChild(emailRow);
  }
};

requestAnimationFrame(updateAccessInfo);
window.addEventListener('load', updateAccessInfo);
window.addEventListener('resize', updateAccessInfo);

document.querySelectorAll('a[href^="mailto:hello@example.com"]').forEach((link) => {
  const subject = link.href.includes('お問い合わせ') ? 'Yame%20Candle%20お問い合わせ' : 'Yame%20Candle%20レッスン予約';
  link.href = `mailto:yamesample@co.jp?subject=${subject}`;
});

const reserveNavLink = document.querySelector('.site-nav__reserve');

const normalizeReserveNavLink = () => {
  if (!reserveNavLink) return;

  reserveNavLink.style.setProperty('color', 'inherit', 'important');
  reserveNavLink.style.setProperty('background', 'transparent', 'important');
  reserveNavLink.style.setProperty('border', '0', 'important');
  reserveNavLink.style.setProperty('border-radius', '0', 'important');
  reserveNavLink.style.setProperty('box-shadow', 'none', 'important');

  if (window.matchMedia('(min-width: 960px)').matches) {
    reserveNavLink.style.setProperty('padding', '4px 0', 'important');
  } else {
    reserveNavLink.style.setProperty('padding', '12px 0', 'important');
  }
};

requestAnimationFrame(normalizeReserveNavLink);
window.addEventListener('load', normalizeReserveNavLink);
window.addEventListener('resize', normalizeReserveNavLink);

const lessonDescription = document.querySelector('#lesson .section-heading p:not(.eyebrow)');

const syncLessonDescriptionPosition = () => {
  if (!lessonDescription) return;

  lessonDescription.style.textAlign = 'left';
  lessonDescription.style.marginLeft = 'auto';
  lessonDescription.style.marginRight = 'auto';

  if (window.matchMedia('(min-width: 960px)').matches) {
    lessonDescription.style.display = 'inline-block';
    lessonDescription.style.maxWidth = 'max-content';
  } else {
    lessonDescription.style.display = 'block';
    lessonDescription.style.maxWidth = '760px';
  }
};

requestAnimationFrame(syncLessonDescriptionPosition);
window.addEventListener('load', syncLessonDescriptionPosition);
window.addEventListener('resize', syncLessonDescriptionPosition);

const profileSection = document.querySelector('#profile');
const profileGrid = profileSection?.querySelector(':scope > div');
const profileCard = profileGrid?.children?.[0];
const profilePhoto = profileGrid?.querySelector('.photo-frame');
const profileTags = profileCard?.querySelector('div[style*="display: flex"][style*="flex-wrap: wrap"]');
const profileTitle = profileSection?.querySelector('h2');
const profileTitleOriginalStyles = profileTitle
  ? {
      fontSize: profileTitle.style.fontSize,
      lineHeight: profileTitle.style.lineHeight,
      letterSpacing: profileTitle.style.letterSpacing,
      whiteSpace: profileTitle.style.whiteSpace,
    }
  : null;

const syncProfileTitle = () => {
  if (!profileTitle || !profileTitleOriginalStyles) return;

  if (window.matchMedia('(max-width: 699px)').matches) {
    profileTitle.style.whiteSpace = 'nowrap';
    profileTitle.style.fontSize = 'clamp(1.7rem, 7vw, 2.1rem)';
    profileTitle.style.lineHeight = '1.22';
    profileTitle.style.letterSpacing = '0.02em';
  } else {
    profileTitle.style.whiteSpace = profileTitleOriginalStyles.whiteSpace;
    profileTitle.style.fontSize = profileTitleOriginalStyles.fontSize;
    profileTitle.style.lineHeight = profileTitleOriginalStyles.lineHeight;
    profileTitle.style.letterSpacing = profileTitleOriginalStyles.letterSpacing;
  }
};

requestAnimationFrame(syncProfileTitle);
window.addEventListener('load', syncProfileTitle);
window.addEventListener('resize', syncProfileTitle);

profileTags?.remove();

if (profileGrid && profileCard && profilePhoto) {
  profileGrid.style.alignItems = 'stretch';
  profileCard.style.alignSelf = 'stretch';
  profilePhoto.style.alignSelf = 'stretch';
  profilePhoto.style.maxHeight = 'none';

  const syncProfilePhotoHeight = () => {
    if (window.matchMedia('(min-width: 760px)').matches) {
      const cardHeight = profileCard.offsetHeight;
      profilePhoto.style.height = `${cardHeight}px`;
      profilePhoto.style.minHeight = `${cardHeight}px`;
    } else {
      profilePhoto.style.height = '';
      profilePhoto.style.minHeight = 'clamp(300px, 82vw, 420px)';
    }
  };

  requestAnimationFrame(syncProfilePhotoHeight);
  window.addEventListener('load', syncProfilePhotoHeight);
  window.addEventListener('resize', syncProfilePhotoHeight);
}

const contactVisual = document.querySelector('.contact__visual');
const contactInner = document.querySelector('.contact__inner');
const contactDescription = contactInner?.querySelector('p:not(.eyebrow)');

if (contactDescription) {
  contactDescription.style.textAlign = 'left';
  contactDescription.style.maxWidth = '640px';
  contactDescription.style.marginLeft = 'auto';
  contactDescription.style.marginRight = 'auto';
}

if (contactVisual) {
  contactVisual.classList.remove('is-missing');
  contactVisual.dataset.fallbackText = '';
  contactVisual.style.alignSelf = 'stretch';
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
        padding: clamp(24px, 4vw, 46px);
        text-align: center;
        background:
          radial-gradient(circle at 18% 18%, rgba(201, 131, 43, 0.16), transparent 34%),
          linear-gradient(135deg, rgba(255, 253, 248, 0.95), rgba(241, 228, 207, 0.82));
        color: var(--color-brown);
        overflow: hidden;
      "
    >
      <span style="display: grid; gap: clamp(18px, 3.5vw, 24px); justify-items: center; align-content: center; width: 100%; max-width: 560px;">
        <span class="eyebrow" style="margin: 0;">Instagram</span>
        <span style="display: block; font-family: var(--font-serif); font-size: clamp(1.7rem, 6.2vw, 2.8rem); line-height: 1.42; letter-spacing: 0.06em;">お得情報は<br>Instagramへ</span>
        <span class="button button--primary" style="margin-top: 0; min-width: min(100%, 260px); max-width: 100%;">Instagramを見る</span>
      </span>
    </a>
  `;
}

const syncContactHeight = () => {
  if (!contactVisual || !contactInner) return;

  if (window.matchMedia('(min-width: 960px)').matches) {
    const contactHeight = contactInner.offsetHeight;
    contactVisual.style.height = `${contactHeight}px`;
    contactVisual.style.minHeight = `${contactHeight}px`;
  } else {
    contactVisual.style.height = '';
    contactVisual.style.minHeight = 'clamp(380px, 90vw, 480px)';
  }
};

requestAnimationFrame(syncContactHeight);
window.addEventListener('load', syncContactHeight);
window.addEventListener('resize', syncContactHeight);

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
