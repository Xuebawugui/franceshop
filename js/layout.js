(function () {
  const page = document.body.dataset.page || "";
  const { name, brand, legalName, nav, products, footerAbout, contact, motto, location } =
    window.SITE;
  const year = new Date().getFullYear();
  const tel = contact.phone.replace(/\D/g, "");
  const wa = (contact.whatsapp || tel).replace(/\D/g, "");

  function renderHeader() {
    const links = nav
      .map(
        (item) =>
          `<a class="nav-link${item.id === page ? " is-active" : ""}" href="${item.href}">${item.label}</a>`
      )
      .join("");

    return `
      <div class="site-shell">
        <div class="topbar">
          <div class="topbar__inner">
            <span class="topbar__company">${legalName}</span>
            <div class="topbar__links">
              <a href="https://wa.me/${wa}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <span class="topbar__sep" aria-hidden="true">|</span>
              <a href="tel:${tel}">${contact.phoneDisplay || contact.phone}</a>
              <span class="topbar__sep" aria-hidden="true">|</span>
              <a href="mailto:${contact.email}">${contact.email}</a>
            </div>
          </div>
        </div>
        <header class="site-header">
          <div class="header-inner">
            <a class="logo" href="index.html">
              <span class="logo-mark" aria-hidden="true">GM</span>
              <span class="logo-text">
                <span class="logo-name">${name}</span>
                <span class="logo-brand">${brand}</span>
              </span>
            </a>
            <nav class="main-nav" aria-label="Navigation principale">${links}</nav>
            <a class="btn btn--accent btn--sm header-cta" href="franchise.html">Contacter les ventes</a>
          </div>
        </header>
      </div>`;
  }

  function renderFooter() {
    const picks = products.slice(0, 2)
      .map(
        (p) => `
        <article class="footer-product">
          <a href="products.html"><img src="${p.image}" alt="${p.name}" loading="lazy" /></a>
          <h4>${p.name}</h4>
          ${p.price ? `<p class="price">${p.price} €</p>` : ""}
        </article>`
      )
      .join("");

    const quickLinks = nav
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");

    return `
      <footer class="site-footer">
        <div class="footer-inner footer-inner--cols">
          <section class="footer-about">
            <h3>${legalName}</h3>
            <p>${footerAbout}</p>
            <p class="footer-motto">${motto}</p>
          </section>
          <section class="footer-links">
            <h3>Liens rapides</h3>
            <ul>${quickLinks}</ul>
          </section>
          <section class="footer-contact">
            <h3>Contact</h3>
            <ul class="footer-contact-list">
              <li><span>Adresse</span>${location}</li>
              <li><span>Téléphone</span><a href="tel:${tel}">${contact.phoneDisplay || contact.phone}</a></li>
              <li><span>E-mail</span><a href="mailto:${contact.email}">${contact.email}</a></li>
              <li><span>Horaires</span>${contact.hours}</li>
            </ul>
          </section>
          <section class="footer-picks">
            <h3>Nouveautés</h3>
            <div class="footer-product-grid">${picks}</div>
          </section>
        </div>
        <div class="footer-copy">
          <p>© ${year} ${legalName}. Tous droits réservés.</p>
          <p class="footer-copy__sub">Tout le contenu de ce site appartient à ${legalName} · ${brand}</p>
        </div>
      </footer>`;
  }

  const mount = document.getElementById("app");
  if (!mount) return;

  mount.insertAdjacentHTML("afterbegin", renderHeader());
  mount.insertAdjacentHTML("beforeend", renderFooter());
})();
