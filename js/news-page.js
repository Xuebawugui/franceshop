(function () {
  const { news, newsFeatured } = window.SITE;
  const categories = ["All", ...new Set(news.map((n) => n.category))];

  const tabsEl = document.getElementById("news-tabs");
  const feedEl = document.getElementById("news-feed");
  const featuredWrap = document.getElementById("news-featured-wrap");
  const statsEl = document.getElementById("news-stats");

  let active = "All";

  const featured = news.find((n) => n.slug === newsFeatured) || news[0];
  featuredWrap.innerHTML = window.renderNewsFeatured(featured);

  statsEl.innerHTML = `
    <span><strong>${news.length}</strong> articles</span>
    <span><strong>${categories.length - 1}</strong> topics</span>
    <span>Updated for <strong>2026</strong></span>
  `;

  categories.forEach((cat, i) => {
    tabsEl.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="news-tab${i === 0 ? " is-active" : ""}" data-cat="${cat}" role="tab">${cat}</button>`
    );
  });

  function renderFeed() {
    const list = active === "All" ? news : news.filter((n) => n.category === active);
    feedEl.innerHTML = list
      .filter((n) => n.slug !== featured.slug)
      .map((n) => window.renderNewsCard(n))
      .join("");

    bindExpand();
    scrollToHash();
  }

  function bindExpand() {
    feedEl.querySelectorAll(".news-article").forEach((art) => {
      art.querySelector("h2")?.addEventListener("click", () => {
        art.classList.toggle("is-expanded");
      });
    });
  }

  function scrollToHash() {
    if (!location.hash) return;
    const slug = location.hash.slice(1);
    if (slug === featured.slug) {
      featuredWrap.querySelector(".news-featured")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const el = document.querySelector(location.hash);
    if (el) {
      el.classList.add("is-expanded", "is-highlight");
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".news-tab");
    if (!btn) return;
    active = btn.dataset.cat;
    tabsEl.querySelectorAll(".news-tab").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderFeed();
  });

  renderFeed();
})();
