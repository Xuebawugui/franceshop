(function () {
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("fr-FR", { year: "numeric", month: "short", day: "numeric" });
  }

  function categoryClass(cat) {
    const map = {
      Tendances: "trend",
      Grossiste: "wholesale",
      Style: "style",
      Industrie: "industry",
      Tissus: "fabric",
      Boutique: "style",
      Conseils: "industry",
    };
    return map[cat] || "default";
  }

  window.renderNewsCard = function (item, { compact = false } = {}) {
    const cls = categoryClass(item.category);
    if (compact) {
      return `<a class="news-card news-card--rich" href="news.html#${item.slug}">
        <div class="news-card__thumb"><img src="${item.image}" alt="" loading="lazy" /></div>
        <div class="news-card__body">
          <span class="news-tag news-tag--${cls}">${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.excerpt}</p>
          <span class="news-card__meta">${formatDate(item.date)} · ${item.readMin} min de lecture</span>
        </div>
      </a>`;
    }
    return `<article class="news-article" id="${item.slug}" data-category="${item.category}">
      <div class="news-article__media"><img src="${item.image}" alt="" loading="lazy" /></div>
      <div class="news-article__content">
        <div class="news-article__head">
          <span class="news-tag news-tag--${cls}">${item.category}</span>
          <time datetime="${item.date}">${formatDate(item.date)}</time>
          <span class="news-read">${item.readMin} min de lecture</span>
        </div>
        <h2>${item.title}</h2>
        <p class="news-article__lead">${item.excerpt}</p>
        <div class="news-article__full">${item.body}</div>
      </div>
    </article>`;
  };

  window.renderNewsFeatured = function (item) {
    const cls = categoryClass(item.category);
    return `<a class="news-featured" href="news.html#${item.slug}">
      <div class="news-featured__media"><img src="${item.image}" alt="" /></div>
      <div class="news-featured__body">
        <span class="news-tag news-tag--${cls}">${item.category}</span>
        <span class="news-featured__badge">Sélection de la rédaction</span>
        <h2>${item.title}</h2>
        <p>${item.excerpt}</p>
        <span class="news-card__meta">${formatDate(item.date)} · ${item.readMin} min de lecture</span>
      </div>
    </a>`;
  };
})();
