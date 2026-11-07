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
    <li><span>Société</span>${legalName}</li>
    <li><span>Adresse</span>${location}</li>
    <li><span>Téléphone</span><a href="tel:${tel}">${contact.phoneDisplay || contact.phone}</a></li>
    <li><span>E-mail</span><a href="mailto:${contact.email}">${contact.email}</a></li>
    <li><span>Horaires</span>${contact.hours}</li>`;

  const mailSubject = encodeURIComponent("Contact Grain de Malice — BAVOIL Eliott");
  const mailBody = encodeURIComponent(
    "Bonjour,\n\nJe souhaite vous contacter.\n\nNom :\nVille :\nSujet (boutique / partenariat / commande) :\nMessage :\n\nMerci."
  );

  document.getElementById("contact-actions").innerHTML = `
    <a class="btn btn--accent btn--block contact-action" href="https://wa.me/${wa}?text=${encodeURIComponent("Bonjour Grain de Malice, je souhaite vous contacter.")}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a class="btn btn--block contact-action" href="mailto:${contact.email}?subject=${mailSubject}&body=${mailBody}">E-mail ${contact.email}</a>
    <a class="btn btn--block contact-action" href="tel:${tel}">Appeler ${contact.phoneDisplay || contact.phone}</a>
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
