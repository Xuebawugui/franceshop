(function () {
  const { products, news, img, intro, motto, mission } = window.SITE;

  document.getElementById("home-intro").textContent = intro;
  document.getElementById("home-motto").textContent = `Notre engagement : ${motto}.`;
  document.getElementById("mission-text").textContent = mission;

  document.getElementById("feature-icon-fabric").src = img.iconFabric;
  document.getElementById("feature-icon-value").src = img.iconValue;

  const row = document.getElementById("home-products");
  products.slice(0, 4).forEach((p) => {
    row.insertAdjacentHTML(
      "beforeend",
      `<a class="product-card" href="products.html"><img src="${p.image}" alt="${p.name}" loading="lazy" /><span class="product-card__label">${p.name}${p.price ? ` · ${p.price} €` : ""}</span></a>`
    );
  });

  const apparel = document.getElementById("apparel-grid");
  img.gallery.forEach((src, i) => {
    apparel.insertAdjacentHTML(
      "beforeend",
      `<div class="product-card"><img src="${src}" alt="Look vestimentaire ${i + 1}" loading="lazy" /></div>`
    );
  });

  const homeNews = document.getElementById("home-news");
  news.slice(0, 3).forEach((n) => {
    homeNews.insertAdjacentHTML("beforeend", window.renderNewsCard(n, { compact: true }));
  });

  const servicesEl = document.getElementById("home-services");
  window.SITE.services.forEach((s) => {
    servicesEl.insertAdjacentHTML(
      "beforeend",
      `<div class="service-card service-card--light"><h3>${s.title}</h3><p>${s.desc}</p></div>`
    );
  });
})();
