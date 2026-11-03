(function () {
  const img = window.SITE?.img;
  if (!img) return;

  document.querySelectorAll("[data-bg]").forEach((el) => {
    const key = el.dataset.bg;
    const val = img[key];
    if (val) el.style.backgroundImage = `url('${val}')`;
  });
})();
