/**
 * NJ MOTORS - Product Detail Page (PDP) Dynamic Renderer
 * Reads ?id=model-id from URL, populates specs from scooters.json or window.SCOOTERS_DATA,
 * and configures the dynamic WhatsApp CTA button.
 */

let currentScooter = null;
let allScootersList = [];

async function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const scooterId = urlParams.get('id') || 'urban-sprint';

  // 1. If window.SCOOTERS_DATA is already present, use it
  if (window.SCOOTERS_DATA && Array.isArray(window.SCOOTERS_DATA) && window.SCOOTERS_DATA.length > 0) {
    allScootersList = window.SCOOTERS_DATA;
    currentScooter = allScootersList.find(s => s.id === scooterId) || allScootersList[0];
    renderProductPage(currentScooter);
    renderSimilarModels(currentScooter);
    return;
  }

  // 2. Otherwise try fetch for data/scooters.json
  try {
    const response = await fetch('data/scooters.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allScootersList = await response.json();
    currentScooter = allScootersList.find(s => s.id === scooterId) || allScootersList[0];

    renderProductPage(currentScooter);
    renderSimilarModels(currentScooter);
  } catch (error) {
    console.warn('fetch data/scooters.json failed, falling back to window.SCOOTERS_DATA:', error);
    if (window.SCOOTERS_DATA && Array.isArray(window.SCOOTERS_DATA) && window.SCOOTERS_DATA.length > 0) {
      allScootersList = window.SCOOTERS_DATA;
      currentScooter = allScootersList.find(s => s.id === scooterId) || allScootersList[0];
      renderProductPage(currentScooter);
      renderSimilarModels(currentScooter);
    } else {
      const mainContainer = document.getElementById('pdpContainer');
      if (mainContainer) {
        mainContainer.innerHTML = `
          <div style="text-align: center; padding: 4rem 1.5rem; background: #ffffff; border-radius: 18px; border: 1px solid #e2e8f0; margin: 2rem 0;">
            <h2 style="color: #ef4444; margin-bottom: 0.5rem;">Scooter Model Not Found</h2>
            <p style="color: #64748b; margin-bottom: 1.5rem;">We couldn't retrieve the specifications for this model.</p>
            <a href="models.html" class="btn btn-primary">Shop All Models</a>
          </div>
        `;
      }
    }
  }
}

function renderProductPage(scooter) {
  // Update Document Meta & Title
  document.title = `${scooter.name} - Electric Scooter (No License Required) | NJ Motors`;

  // Breadcrumb
  const breadcrumbModel = document.getElementById('pdpBreadcrumbModel');
  if (breadcrumbModel) breadcrumbModel.textContent = scooter.name;

  // Title, Tagline, Price
  const titleEl = document.getElementById('pdpModelTitle');
  const taglineEl = document.getElementById('pdpModelTagline');
  const priceEl = document.getElementById('pdpPriceAmount');
  const badgeEl = document.getElementById('pdpModelBadge');
  const descEl = document.getElementById('pdpDescription');

  if (titleEl) titleEl.textContent = scooter.name;
  if (taglineEl) taglineEl.textContent = scooter.tagline;
  if (priceEl) priceEl.textContent = scooter.price;
  if (badgeEl) badgeEl.textContent = scooter.badge || 'Urban Bikes';
  if (descEl) descEl.textContent = scooter.description;

  // Gallery & Image
  const mainImg = document.getElementById('pdpMainImg');
  const defaultImg = (scooter.colors && scooter.colors[0]) ? scooter.colors[0].image : 'assets/images/b2.png';
  if (mainImg) {
    mainImg.src = defaultImg;
    mainImg.alt = `${scooter.name} Electric Scooter - NJ Motors`;
  }

  // Color Swatches
  const colorContainer = document.getElementById('pdpColorSwatches');
  const selectedColorName = document.getElementById('pdpSelectedColorName');
  if (colorContainer && scooter.colors) {
    if (selectedColorName) selectedColorName.textContent = scooter.colors[0].name;

    colorContainer.innerHTML = scooter.colors.map((c, idx) => `
      <button class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
              style="background-color: ${c.hex};" 
              title="${c.name}" 
              aria-label="Select ${c.name} color"
              onclick="selectPdpColor(this, '${c.name}', '${c.image}')">
      </button>
    `).join('');
  }

  // Configure Primary WhatsApp CTA
  const primaryWaBtn = document.getElementById('pdpWhatsAppBtn');
  const testRideWaBtn = document.getElementById('pdpTestRideBtn');

  const inquiryMessage = `Hi NJ Motors, I am interested in the Urban Bikes ${scooter.name} (Price: ${scooter.price}, Range: ${scooter.range}). Please share the on-road price, color availability, and financing options!`;
  const testRideMessage = `Hi NJ Motors, I would like to book a free test ride for the Urban Bikes ${scooter.name} (No License Required). Please let me know the showroom timing and address.`;

  if (primaryWaBtn) {
    primaryWaBtn.href = `https://wa.me/919072430473?text=${encodeURIComponent(inquiryMessage)}`;
    primaryWaBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      Inquire about ${scooter.name} on WhatsApp
    `;
  }

  if (testRideWaBtn) {
    testRideWaBtn.href = `https://wa.me/919072430473?text=${encodeURIComponent(testRideMessage)}`;
  }

  // Render Features Checklist
  const featuresContainer = document.getElementById('pdpFeaturesContainer');
  if (featuresContainer && scooter.features) {
    featuresContainer.innerHTML = scooter.features.map(f => `
      <div class="pdp-feature-item">
        <span class="pdp-feature-icon">✅</span>
        <span>${f}</span>
      </div>
    `).join('');
  }

  // Render Specs Categories Table
  const specsContainer = document.getElementById('pdpSpecsContainer');
  if (specsContainer && scooter.specs) {
    const categoryIcons = {
      'Performance': '🚀',
      'Battery & Electricals': '🔋',
      'Chassis & Safety': '🛡️',
      'Dimensions & Utility': '📐'
    };

    let html = '';
    for (const [catName, catSpecs] of Object.entries(scooter.specs)) {
      const icon = categoryIcons[catName] || '⚙️';
      let rows = '';
      for (const [sKey, sVal] of Object.entries(catSpecs)) {
        rows += `
          <tr>
            <td class="spec-name">${sKey}</td>
            <td class="spec-val">${sVal}</td>
          </tr>
        `;
      }

      html += `
        <div class="pdp-spec-category">
          <h4 class="pdp-spec-cat-title"><span>${icon}</span> ${catName}</h4>
          <table class="pdp-spec-table">
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      `;
    }
    specsContainer.innerHTML = html;
  }
}

function selectPdpColor(btnElement, colorName, imgSrc) {
  const mainImg = document.getElementById('pdpMainImg');
  const selectedColorName = document.getElementById('pdpSelectedColorName');
  if (mainImg) mainImg.src = imgSrc;
  if (selectedColorName) selectedColorName.textContent = colorName;

  const swatches = document.querySelectorAll('.color-swatch-btn');
  swatches.forEach(s => s.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
}

function renderSimilarModels(current) {
  const container = document.getElementById('similarModelsContainer');
  if (!container) return;

  const others = allScootersList.filter(s => s.id !== current.id).slice(0, 3);
  container.innerHTML = others.map(s => {
    const defaultColor = s.colors && s.colors[0] ? s.colors[0].image : 'assets/images/b2.png';
    return `
      <div class="scooter-card">
        <div class="scooter-img-box" style="min-height: 170px;">
          <a href="product.html?id=${s.id}">
            <img src="${defaultColor}" alt="${s.name}" class="scooter-img" style="max-height: 140px;" loading="lazy"/>
          </a>
        </div>
        <div class="card-body" style="padding: 1.2rem;">
          <h4 class="scooter-name" style="font-size: 1.15rem;">
            <a href="product.html?id=${s.id}">${s.name}</a>
          </h4>
          <p class="scooter-tagline" style="margin-bottom: 0.8rem;">${s.tagline}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
            <span style="font-weight: 800; font-family: var(--font-heading); color: var(--primary);">${s.price}</span>
            <a href="product.html?id=${s.id}" class="btn btn-outline btn-sm">View Model</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', loadProductDetails);
