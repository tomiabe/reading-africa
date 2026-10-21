// ============================================================
// Reading Africa: vanilla JS (port of the React app)
// ============================================================

(function () {
  'use strict';

  // ---------- Helpers ----------

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---------- Theme ----------

  const rootEl = document.documentElement;
  let isDark = false;

  function initTheme() {
    const hour = new Date().getHours();
    isDark = hour >= 19 || hour < 7; // night: 7pm - 7am
    applyTheme();
  }

  function applyTheme() {
    rootEl.classList.toggle('dark', isDark);
  }

  function toggleTheme() {
    isDark = !isDark;
    applyTheme();
  }

  // ---------- View navigation ----------

  const VIEW_IDS = ['manifesto', 'start_here', 'journalists', 'countries', 'media', 'books', 'research', 'culture', 'contribute'];

  function showView(id) {
    document.querySelectorAll('.view').forEach((view) => {
      view.classList.toggle('active', view.dataset.view === id);
    });
    document.querySelectorAll('[data-nav]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.nav === id);
    });
    document.getElementById('main').scrollTop = 0;
    closeSidebar();
  }

  function openCountry(countryId) {
    const country = COUNTRIES.find((c) => c.id === countryId);
    if (!country) return;
    document.getElementById('country-list-wrap').hidden = true;
    const detail = document.getElementById('country-detail');
    detail.hidden = false;
    detail.innerHTML = countryDetailHtml(country);
    document.getElementById('main').scrollTop = 0;
    closeSidebar();
  }

  function closeCountry() {
    const detail = document.getElementById('country-detail');
    detail.hidden = true;
    detail.innerHTML = '';
    document.getElementById('country-list-wrap').hidden = false;
    document.getElementById('main').scrollTop = 0;
  }

  // ---------- Sidebar (mobile) ----------

  function openSidebar() {
    document.getElementById('sidebar').classList.add('is-open');
    document.getElementById('overlay').classList.add('is-open');
    document.getElementById('menu-toggle').classList.add('is-open');
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('is-open');
    document.getElementById('overlay').classList.remove('is-open');
    document.getElementById('menu-toggle').classList.remove('is-open');
  }

  // ---------- Renderers ----------

  function mediaHtml(item, imageClass) {
    const image = item.imageUrl
      ? '<img class="' + imageClass + '" src="' + esc(item.imageUrl) + '" alt="' + esc(item.title) + '" loading="lazy" />'
      : '';
    const placeholder = image
      ? ''
      : '<div class="placeholder"><span class="placeholder-text">Reading Africa</span></div>';
    return image + placeholder;
  }

  function cardHtml(item) {
    const source = item.authorOrSource
      ? '<div class="card-source">' + esc(item.authorOrSource) + '</div>'
      : '<div class="card-source"></div>';
    const tags = item.tags && item.tags.length
      ? '<div class="card-tags">' + item.tags.map((t) => '<span class="tag">#' + esc(t) + '</span>').join('') + '</div>'
      : '';
    return (
      '<div class="card">' +
        '<div class="card-media">' + mediaHtml(item, 'card-img') + '<div class="card-badge">' + esc(item.type || 'resource') + '</div></div>' +
        '<div class="card-body">' + source +
          '<h3 class="card-title">' + esc(item.title) + '</h3>' +
          '<p class="card-desc">' + esc(item.description) + '</p>' +
          tags +
        '</div>' +
      '</div>'
    );
  }

  function imageCardHtml(item) {
    const source = item.authorOrSource
      ? '<div class="icard-source">' + esc(item.authorOrSource) + '</div>'
      : '';
    const tags = item.tags && item.tags.length
      ? '<div class="icard-tags">' + item.tags.map((t) => '<span class="tag">#' + esc(t) + '</span>').join('') + '</div>'
      : '';
    return (
      '<div class="icard">' +
        '<div class="icard-media">' + mediaHtml(item, 'card-img') + '<div class="card-badge">' + esc(item.type || 'Resource') + '</div></div>' +
        '<div class="icard-body">' + source +
          '<h3 class="icard-title">' + esc(item.title) + '</h3>' +
          '<p class="icard-desc">' + esc(item.description) + '</p>' +
          tags +
        '</div>' +
      '</div>'
    );
  }

  function countryCardHtml(country) {
    const img = country.imageUrl
      ? '<img class="country-img" src="' + esc(country.imageUrl) + '" alt="' + esc(country.name) + '" loading="lazy" />'
      : '';
    return (
      '<button type="button" class="country-card" data-country="' + esc(country.id) + '">' +
        '<div class="country-img-wrap">' + img + '</div>' +
        '<div class="country-overlay"></div>' +
        '<div class="country-content">' +
          '<span class="country-region">' + esc(country.region) + '</span>' +
          '<h3 class="country-name">' + esc(country.name) + '</h3>' +
          '<p class="country-blurb">' + esc(country.blurb) + '</p>' +
          '<div class="country-cta">Explore Context' + ICONS.arrowRight + '</div>' +
        '</div>' +
      '</button>'
    );
  }

  const RESOURCE_LIST_ICONS = {
    media: ICONS.newspaperBig,
    books: ICONS.bookOpenBig,
    data: ICONS.barChartBig,
    culture: ICONS.filmBig
  };

  const RESOURCE_LIST_TITLES = {
    media: 'Media & Journalism',
    books: 'Books & Long-Form Reading',
    data: 'Data & Research',
    culture: 'Culture as Context'
  };

  function resourceListHtml(title, iconSvg, items) {
    if (!items || items.length === 0) return '';
    const rows = items.map((item) => {
      const meta = item.authorOrSource
        ? '<span class="res-meta">' + esc(item.authorOrSource) + '</span>'
        : '';
      return (
        '<div class="res-item">' +
          '<div class="res-item-top">' +
            '<div><h5 class="res-title">' + esc(item.title) + '</h5>' +
            '<p class="res-desc">' + esc(item.description) + '</p></div>' +
            meta +
          '</div>' +
        '</div>'
      );
    }).join('');
    return (
      '<div class="res-list">' +
        '<h4 class="res-list-title">' + iconSvg + ' ' + esc(title) + '</h4>' +
        '<div class="res-rows">' + rows + '</div>' +
      '</div>'
    );
  }

  function countryDetailHtml(country) {
    const img = country.imageUrl
      ? '<img class="cd-hero-img" src="' + esc(country.imageUrl) + '" alt="' + esc(country.name) + '" />'
      : '';
    const misunderstandings = country.misunderstandings.map((m) =>
      '<li><span class="misunderstood-bullet">\u2022</span><span>' + esc(m) + '</span></li>'
    ).join('');
    const specificity = country.specificity.map((s) =>
      '<li><span class="spec-arrow">\u2192</span>' + esc(s) + '</li>'
    ).join('');

    return (
      '<div class="cd-wrap">' +
        '<div class="cd-hero">' + img +
          '<div class="cd-hero-overlay"></div>' +
          '<div class="cd-hero-inner">' +
            '<button type="button" class="back-btn" data-action="back">' + ICONS.arrowLeft + ' All Countries</button>' +
            '<span class="cd-region">' + esc(country.region) + '</span>' +
            '<h1 class="cd-title">' + esc(country.name) + '</h1>' +
            '<p class="cd-blurb">' + esc(country.blurb) + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="cd-body">' +
          '<div class="cd-grid">' +
            '<div class="cd-main">' +
              '<section class="cd-context">' +
                '<h3 class="cd-section-title">Why Context Matters</h3>' +
                '<p class="cd-context-text">' + esc(country.contextMatters) + '</p>' +
              '</section>' +
              '<section class="cd-misunderstood">' +
                '<h3 class="cd-misunderstood-title">' + ICONS.alertCircle + ' Common Misunderstandings</h3>' +
                '<ul class="misunderstood-list">' + misunderstandings + '</ul>' +
              '</section>' +
              '<div>' +
                resourceListHtml(RESOURCE_LIST_TITLES.media, RESOURCE_LIST_ICONS.media, country.media) +
                resourceListHtml(RESOURCE_LIST_TITLES.books, RESOURCE_LIST_ICONS.books, country.books) +
                resourceListHtml(RESOURCE_LIST_TITLES.data, RESOURCE_LIST_ICONS.data, country.data) +
                resourceListHtml(RESOURCE_LIST_TITLES.culture, RESOURCE_LIST_ICONS.culture, country.culture) +
              '</div>' +
            '</div>' +
            '<div class="cd-side">' +
              '<div class="sticky">' +
                '<div class="spec-card">' +
                  '<h3 class="spec-title">Notes on Specificity</h3>' +
                  '<p class="spec-label">Distinguish between:</p>' +
                  '<ul class="spec-list">' + specificity + '</ul>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          widgetHtml() +
        '</div>' +
      '</div>'
    );
  }

  function widgetHtml() {
    return (
      '<div class="widget">' +
        '<div class="widget-head">' + ICONS.lightbulb +
          '<h3 class="widget-title">Know a source that should be here?</h3>' +
        '</div>' +
        '<p class="widget-text">Reading Africa is a living resource. We welcome suggestions that deepen understanding, respect specificity, and avoid flattening the continent.</p>' +
        '<button type="button" class="widget-btn" data-action="contribute">Submit a suggestion' + ICONS.arrowRight + '</button>' +
      '</div>'
    );
  }

  // ---------- Build the page ----------

  function renderNav() {
    const list = document.getElementById('nav-list');
    list.innerHTML = NAV_ITEMS.map((item) => {
      if (item.type === 'divider') {
        return '<li class="nav-divider"></li>';
      }
      if (item.type === 'group') {
        return '<li class="nav-group">' + esc(item.label) + '</li>';
      }
      return (
        '<li>' +
          '<button type="button" class="nav-btn" data-nav="' + esc(item.id) + '">' +
            ICONS[item.icon] + ' ' + esc(item.label) +
          '</button>' +
        '</li>'
      );
    }).join('');
  }

  function renderGrids() {
    document.querySelectorAll('[data-grid]').forEach((container) => {
      const key = container.dataset.grid;
      let items = null;
      if (key === 'media') items = ALL_MEDIA;
      else if (key === 'books') items = ALL_BOOKS;
      else if (key === 'research') items = ALL_DATA;
      else if (key === 'culture') items = ALL_CULTURE;
      else if (key === 'start-media') items = START_HERE_MEDIA;
      else if (key === 'start-books') items = START_HERE_BOOKS;
      else if (key === 'start-data') items = START_HERE_DATA;
      if (!items) return;
      container.insertAdjacentHTML('beforeend', items.map((item) =>
        key.indexOf('start-') === 0 ? imageCardHtml(item) : cardHtml(item)
      ).join(''));
    });
  }

  function renderCountries() {
    document.getElementById('country-list').innerHTML = COUNTRIES.map(countryCardHtml).join('');
  }

  function renderWidgets() {
    document.querySelectorAll('[data-widget]').forEach((container) => {
      container.outerHTML = widgetHtml();
    });
  }

  // ---------- Events ----------

  function onDocClick(e) {
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      showView(navBtn.dataset.nav);
      return;
    }
    const countryBtn = e.target.closest('[data-country]');
    if (countryBtn) {
      openCountry(countryBtn.dataset.country);
      return;
    }
    const action = e.target.closest('[data-action]');
    if (action) {
      if (action.dataset.action === 'contribute') {
        showView('contribute');
      } else if (action.dataset.action === 'back') {
        closeCountry();
      }
    }
  }

  // ---------- Init ----------

  function init() {
    initTheme();
    renderNav();
    renderGrids();
    renderCountries();
    renderWidgets();
    showView('manifesto');

    document.getElementById('theme-toggle-desktop').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
    document.getElementById('menu-toggle').addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar.classList.contains('is-open')) closeSidebar();
      else openSidebar();
    });
    document.getElementById('overlay').addEventListener('click', closeSidebar);
    document.addEventListener('click', onDocClick);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
