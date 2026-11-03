(function () {
  const { products, img, services } = window.SITE;

  const grid = document.getElementById("product-catalog");
  products.forEach((p) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<article class="product-tile">
        <div class="product-tile__img"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
        <div class="product-tile__body">
          <h3>${p.name}</h3>
          ${p.price ? `<p class="product-tile__price">From ¥${p.price} wholesale</p>` : `<p class="product-tile__price">Price on request</p>`}
          <p class="product-tile__hint">Mixed orders · Dropship OK</p>
        </div>
      </article>`
    );
  });

  const gallery = document.getElementById("product-gallery");
  img.gallery.forEach((src, i) => {
    gallery.insertAdjacentHTML(
      "beforeend",
      `<div class="product-card"><img src="${src}" alt="Display ${i + 1}" loading="lazy" /></div>`
    );
  });

  const servicesEl = document.getElementById("product-services");
  services.forEach((s) => {
    servicesEl.insertAdjacentHTML(
      "beforeend",
      `<div class="service-card"><h3>${s.title}</h3><p>${s.desc}</p></div>`
    );
  });
})();
