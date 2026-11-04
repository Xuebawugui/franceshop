(function () {
  const {
    franchiseBenefits,
    partnershipModels,
    partnershipLead,
    intro,
    contact,
    location,
    legalName,
  } = window.SITE;
  const tel = contact.phone.replace(/\D/g, "");
  const wa = (contact.whatsapp || tel).replace(/\D/g, "");

  document.getElementById("franchise-intro").textContent = intro;
  document.getElementById("franchise-contact").innerHTML = `
    <li><span>Company</span>${legalName}</li>
    <li><span>Address</span>${location}</li>
    <li><span>Phone</span><a href="tel:${tel}">${contact.phoneDisplay || contact.phone}</a></li>
    <li><span>Email</span><a href="mailto:${contact.email}">${contact.email}</a></li>
    <li><span>Hours</span>${contact.hours}</li>`;

  const mailSubject = encodeURIComponent("Ruixu partnership inquiry");
  const mailBody = encodeURIComponent(
    "Hi Ruixu team,\n\nI am interested in partnering.\n\nName:\nCountry/City:\nPrimary sales channel:\nEstimated monthly volume:\nCategories needed:\n\nThank you."
  );

  document.getElementById("contact-actions").innerHTML = `
    <a class="btn btn--accent btn--block contact-action" href="https://wa.me/${wa}?text=${encodeURIComponent("Hi Ruixu, I would like to discuss a wholesale partnership.")}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a class="btn btn--block contact-action" href="mailto:${contact.email}?subject=${mailSubject}&body=${mailBody}">Email ${contact.email}</a>
    <a class="btn btn--block contact-action" href="tel:${tel}">Call ${contact.phoneDisplay || contact.phone}</a>
  `;

  const leadEl = document.getElementById("partnership-lead");
  if (leadEl && partnershipLead) leadEl.textContent = partnershipLead;

  partnershipModels?.forEach((m) => {
    document.getElementById("partnership-models")?.insertAdjacentHTML(
      "beforeend",
      `<div class="service-card"><h3>${m.title}</h3><p>${m.desc}</p></div>`
    );
  });

  franchiseBenefits.forEach((b) => {
    document.getElementById("franchise-benefits").insertAdjacentHTML(
      "beforeend",
      `<div class="service-card"><h3>${b.title}</h3><p>${b.desc}</p></div>`
    );
  });
})();
