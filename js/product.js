/**
 * NJ MOTORS - Product Detail Page (PDP) Dynamic Renderer
 * Reads ?id=model-id from URL, populates specs from scooters.json or window.SCOOTERS_DATA,
 * supports Dual Battery Selection (Lithium vs Graphene), and configures dynamic WhatsApp CTA button.
 */

let currentScooter = null;
let allScootersList = [];
let selectedBatteryType = 'lithium'; // default battery option

async function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const scooterId = urlParams.get('id') || 'urban-legend';
  const batteryParam = urlParams.get('battery');
  if (batteryParam === 'graphene' || batteryParam === 'lithium') {
    selectedBatteryType = batteryParam;
  }

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
  // Update Document Meta & Title for Dynamic SEO
  const fullModelName = scooter.name.startsWith('Urban') ? scooter.name : `Urban ${scooter.name}`;
  const pageTitle = `${fullModelName} Electric Scooter - Specs, Price, Range | NJ Motors Edavanna`;
  document.title = pageTitle;

  const metaDescText = `${fullModelName} electric scooter by Urban eBikes at NJ Motors Edavanna, Kerala. ${scooter.tagline}. Range: ${scooter.range || '80-110 km'}. No driving license required, zero RTO registration. Call +91 62386 69531.`;
  
  const seoDescEl = document.getElementById('seoMetaDesc');
  if (seoDescEl) seoDescEl.setAttribute('content', metaDescText);
  const ogDescEl = document.getElementById('ogDesc');
  if (ogDescEl) ogDescEl.setAttribute('content', metaDescText);
  const twitterDescEl = document.getElementById('twitterDesc');
  if (twitterDescEl) twitterDescEl.setAttribute('content', metaDescText);

  const ogTitleEl = document.getElementById('ogTitle');
  if (ogTitleEl) ogTitleEl.setAttribute('content', `${fullModelName} Electric Scooter | NJ Motors Edavanna`);
  const twitterTitleEl = document.getElementById('twitterTitle');
  if (twitterTitleEl) twitterTitleEl.setAttribute('content', `${fullModelName} Electric Scooter | NJ Motors Edavanna`);

  const canonicalUrl = `https://njmotors.in/product.html?id=${encodeURIComponent(scooter.id)}`;
  const seoCanonical = document.getElementById('seoCanonical');
  if (seoCanonical) seoCanonical.setAttribute('href', canonicalUrl);
  const ogUrl = document.getElementById('ogUrl');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
  const twitterUrl = document.getElementById('twitterUrl');
  if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);

  const defaultImg = (scooter.colors && scooter.colors[0]) ? scooter.colors[0].image : 'assets/images/legend-maroon.png';
  const fullImgUrl = `https://njmotors.in/${defaultImg}`;
  const ogImage = document.getElementById('ogImage');
  if (ogImage) ogImage.setAttribute('content', fullImgUrl);
  const ogImageSecure = document.getElementById('ogImageSecure');
  if (ogImageSecure) ogImageSecure.setAttribute('content', fullImgUrl);
  const twitterImage = document.getElementById('twitterImage');
  if (twitterImage) twitterImage.setAttribute('content', fullImgUrl);

  // Update Dynamic Schema.org Product JSON-LD
  const schemaEl = document.getElementById('productJsonLd');
  if (schemaEl) {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${canonicalUrl}#product`,
      "name": `${fullModelName} Electric Scooter`,
      "image": [fullImgUrl, "https://njmotors.in/assets/logo.png"],
      "description": scooter.description || metaDescText,
      "sku": scooter.id,
      "mpn": scooter.id,
      "brand": {
        "@type": "Brand",
        "name": "Urban eBikes"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Urban eBikes"
      },
      "category": "Vehicles & Parts > Vehicles > Motor Vehicles > Scooters",
      "offers": {
        "@type": "Offer",
        "url": canonicalUrl,
        "priceCurrency": "INR",
        "price": scooter.numericPrice || 49999,
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "MotorcycleDealer",
          "name": "NJ Motors Edavanna",
          "telephone": "+916238669531",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "NJ. MOTORS, CNG ROAD",
            "addressLocality": "Edavanna",
            "addressRegion": "Kerala",
            "postalCode": "676541",
            "addressCountry": "IN"
          }
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Driving License Requirement",
          "value": "No License Required (Non-RTO)"
        },
        {
          "@type": "PropertyValue",
          "name": "Certified Range",
          "value": scooter.range || "80 - 110 km"
        },
        {
          "@type": "PropertyValue",
          "name": "Top Speed",
          "value": scooter.topSpeed || "25 km/h"
        },
        {
          "@type": "PropertyValue",
          "name": "Warranty",
          "value": scooter.warranty || "3 Years (Lithium) / 1 Year (Graphene)"
        }
      ]
    };
    schemaEl.textContent = JSON.stringify(productSchema, null, 2);
  }

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
  if (badgeEl) badgeEl.textContent = scooter.badge || 'Urban eBikes';
  if (descEl) descEl.textContent = scooter.description;

  // Gallery & Image
  const mainImg = document.getElementById('pdpMainImg');
  if (mainImg) {
    mainImg.src = defaultImg;
    mainImg.alt = `${fullModelName} Electric Scooter at NJ Motors Edavanna`;
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

  // Render Features Checklist
  const featuresContainer = document.getElementById('pdpFeaturesContainer');
  if (featuresContainer && scooter.features) {
    const combinedFeatures = [
      ...scooter.features,
      "Free Doorstep Home Delivery with Live Vehicle & Battery Demo",
      "Authorized Doorstep Home Service & Maintenance Support"
    ];
    featuresContainer.innerHTML = combinedFeatures.map(f => `
      <div class="pdp-feature-item">
        <span class="pdp-feature-icon">✅</span>
        <span>${f}</span>
      </div>
    `).join('');
  }

  // Render Battery Selector
  renderBatterySelector(scooter);

  // Render Dynamic Quick Specs
  updateQuickSpecsAndCTAs(scooter);

  // Render Battery Comparison Table
  renderBatteryComparison(scooter);

  // Render Technical Specs Tables
  renderTechnicalSpecs(scooter);
}

function renderBatterySelector(scooter) {
  const container = document.getElementById('pdpBatterySelector');
  if (!container) return;

  const lithiumVariant = scooter.batteryVariants?.lithium || {
    range: scooter.range || '80 - 110 km',
    chargingTime: '3.5 - 4 Hours',
    warranty: '3 Years Warranty'
  };

  const grapheneVariant = scooter.batteryVariants?.graphene || {
    range: '65 - 80 km',
    chargingTime: '6 - 7 Hours',
    warranty: '1 Year Warranty'
  };

  container.innerHTML = `
    <div class="battery-select-header">
      <div class="battery-select-title">
        <span>🔋</span> Choose Battery Type:
      </div>
      <span style="font-size: 0.78rem; color: #64748b; font-weight: 600;">
        Both options available with spot delivery
      </span>
    </div>

    <div class="battery-options-grid">
      <!-- Option 1: Lithium Battery -->
      <button type="button" class="battery-opt-btn ${selectedBatteryType === 'lithium' ? 'active' : ''}" id="btn-battery-lithium" onclick="selectBatteryOption('lithium')">
        <div style="justify-content: space-between; align-items: center;" class="d-none">
          <span class="battery-opt-badge lithium-badge">⚡ 3-Year Warranty • Fast Charge</span>
          <div class="battery-check-icon">${selectedBatteryType === 'lithium' ? '✓' : ''}</div>
        </div>
        <div class="battery-opt-name">Lithium Battery</div>
        <div class="battery-opt-specs">
          <div class="battery-opt-spec-item">⚡ Range: <strong>${lithiumVariant.range}</strong></div>
          <div class="battery-opt-spec-item">🔌 Fast Charge: <strong>${lithiumVariant.chargingTime}</strong></div>
          <div class="battery-opt-spec-item">🛡️ Warranty: <strong>3 Years</strong></div>
        </div>
      </button>

      <!-- Option 2: Graphene Battery -->
      <button type="button" class="battery-opt-btn ${selectedBatteryType === 'graphene' ? 'active' : ''}" id="btn-battery-graphene" onclick="selectBatteryOption('graphene')">
        <div style="justify-content: space-between; align-items: center;" class="d-none">
          <span class="battery-opt-badge graphene-badge">💰 1-Year Warranty • Standard</span>
          <div class="battery-check-icon">${selectedBatteryType === 'graphene' ? '✓' : ''}</div>
        </div>
        <div class="battery-opt-name">Graphene Battery</div>
        <div class="battery-opt-specs">
          <div class="battery-opt-spec-item">⚡ Range: <strong>${grapheneVariant.range}</strong></div>
          <div class="battery-opt-spec-item">🔌 Charge Time: <strong>${grapheneVariant.chargingTime}</strong></div>
          <div class="battery-opt-spec-item">🛡️ Warranty: <strong>1 Year</strong></div>
        </div>
      </button>
    </div>
  `;
}

function selectBatteryOption(type) {
  selectedBatteryType = type;
  if (!currentScooter) return;

  // Update button active classes
  const btnLithium = document.getElementById('btn-battery-lithium');
  const btnGraphene = document.getElementById('btn-battery-graphene');
  
  if (btnLithium) {
    btnLithium.classList.toggle('active', type === 'lithium');
    const check = btnLithium.querySelector('.battery-check-icon');
    if (check) check.textContent = type === 'lithium' ? '✓' : '';
  }
  if (btnGraphene) {
    btnGraphene.classList.toggle('active', type === 'graphene');
    const check = btnGraphene.querySelector('.battery-check-icon');
    if (check) check.textContent = type === 'graphene' ? '✓' : '';
  }

  // Update Battery Badge in Header
  const batteryBadge = document.getElementById('pdpBatteryBadge');
  if (batteryBadge) {
    if (type === 'lithium') {
      batteryBadge.textContent = '🛡️ 3-Year Lithium Warranty • Fast Charging';
      batteryBadge.style.color = '#2563eb';
      batteryBadge.style.background = 'rgba(59, 130, 246, 0.1)';
      batteryBadge.style.borderColor = 'rgba(59, 130, 246, 0.3)';
    } else {
      batteryBadge.textContent = '🛡️ 1-Year Graphene Warranty • Standard Charging';
      batteryBadge.style.color = '#0284c7';
      batteryBadge.style.background = 'rgba(2, 132, 199, 0.1)';
      batteryBadge.style.borderColor = 'rgba(2, 132, 199, 0.3)';
    }
  }

  // Update Dynamic Quick Specs & CTAs
  updateQuickSpecsAndCTAs(currentScooter);

  // Update Technical Specs Table
  renderTechnicalSpecs(currentScooter);
}

function updateQuickSpecsAndCTAs(scooter) {
  const quickSpecsContainer = document.getElementById('pdpQuickSpecs');
  const variant = (scooter.batteryVariants && scooter.batteryVariants[selectedBatteryType]) 
    ? scooter.batteryVariants[selectedBatteryType]
    : (selectedBatteryType === 'lithium' 
        ? { range: scooter.range || '80 - 110 km', chargingTime: '3.5 - 4 Hours', fastCharging: true, warranty: '3 Years Warranty' }
        : { range: '65 - 80 km', chargingTime: '6 - 7 Hours', fastCharging: false, warranty: '1 Year Warranty' });

  if (quickSpecsContainer) {
    quickSpecsContainer.innerHTML = `
      <div class="pdp-quick-spec-card highlight">
        <div class="pdp-quick-spec-icon">⚡</div>
        <div class="pdp-quick-spec-val">${variant.range}</div>
        <div class="pdp-quick-spec-lbl">Certified Range (${selectedBatteryType === 'lithium' ? 'Lithium' : 'Graphene'})</div>
      </div>
      <div class="pdp-quick-spec-card">
        <div class="pdp-quick-spec-icon">🔌</div>
        <div class="pdp-quick-spec-val">${variant.chargingTime}</div>
        <div class="pdp-quick-spec-lbl">${variant.fastCharging ? '⚡ Fast Charging' : 'Standard Charging'}</div>
      </div>
      <div class="pdp-quick-spec-card">
        <div class="pdp-quick-spec-icon">🛡️</div>
        <div class="pdp-quick-spec-val">${variant.warranty}</div>
        <div class="pdp-quick-spec-lbl">Battery Warranty</div>
      </div>
      <div class="pdp-quick-spec-card">
        <div class="pdp-quick-spec-icon">🚀</div>
        <div class="pdp-quick-spec-val">${scooter.topSpeed || '25 km/h'}</div>
        <div class="pdp-quick-spec-lbl">Non-RTO Legal</div>
      </div>
    `;
  }

  // Configure WhatsApp CTA with selected battery type
  const primaryWaBtn = document.getElementById('pdpWhatsAppBtn');
  const testRideWaBtn = document.getElementById('pdpTestRideBtn');

  const batteryLabel = selectedBatteryType === 'lithium' ? 'Lithium Battery (3-Year Warranty, Fast Charging)' : 'Graphene Battery (1-Year Warranty, 6-7h Charge)';
  const inquiryMessage = `Hi NJ Motors, I am interested in the Urban eBikes ${scooter.name} with ${batteryLabel} (Price: ${scooter.price}, Range: ${variant.range}). Please share details about Doorstep Home Delivery, on-road price, and financing options!`;
  const testRideMessage = `Hi NJ Motors, I would like to book a free test ride (showroom or doorstep) for the Urban eBikes ${scooter.name} (${batteryLabel}). Please let me know the timing and availability.`;

  if (primaryWaBtn) {
    primaryWaBtn.href = `https://wa.me/916238669531?text=${encodeURIComponent(inquiryMessage)}`;
    primaryWaBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      Inquire about ${scooter.name} (${selectedBatteryType === 'lithium' ? 'Lithium' : 'Graphene'})
    `;
  }

  if (testRideWaBtn) {
    testRideWaBtn.href = `https://wa.me/916238669531?text=${encodeURIComponent(testRideMessage)}`;
  }
}

function renderBatteryComparison(scooter) {
  const compareBox = document.getElementById('pdpBatteryCompareBox');
  if (!compareBox) return;

  const liVar = scooter.batteryVariants?.lithium || { range: '80 - 110 km', chargingTime: '3.5 - 4 Hours', warranty: '3 Years Warranty' };
  const grVar = scooter.batteryVariants?.graphene || { range: '65 - 80 km', chargingTime: '6 - 7 Hours', warranty: '1 Year Warranty' };

  compareBox.innerHTML = `
    <h4 class="battery-compare-title">
      <span>⚖️</span> Lithium vs. Graphene Battery Comparison for ${scooter.name}
    </h4>
    <p class="battery-compare-subtitle">
      NJ Motors provides both battery variants for every scooter model. Compare key technical differences below to choose the perfect match:
    </p>

    <div style="overflow-x: auto;">
      <table class="battery-compare-table">
        <thead>
          <tr>
            <th>Specification Feature</th>
            <th class="lithium-th">⚡ Lithium Battery (Smart BMS)</th>
            <th class="graphene-th">🔋 Graphene Battery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature-lbl">Certified Range</td>
            <td class="lithium-val"><strong>${liVar.range}</strong> per charge</td>
            <td class="graphene-val"><strong>${grVar.range}</strong> per charge</td>
          </tr>
          <tr>
            <td class="feature-lbl">Charging Speed</td>
            <td class="lithium-val">⚡ Fast Charging (<strong>${liVar.chargingTime}</strong>)</td>
            <td class="graphene-val">⏱️ Standard Charging (<strong>${grVar.chargingTime}</strong>)</td>
          </tr>
          <tr>
            <td class="feature-lbl">Fast Charge Support</td>
            <td class="lithium-val">✅ Yes (Smart Auto-cut Microcontroller)</td>
            <td class="graphene-val">❌ No (Takes 6 - 7 Hours)</td>
          </tr>
          <tr>
            <td class="feature-lbl">Battery Warranty</td>
            <td class="lithium-val">🛡️ <strong>3 Years Comprehensive Warranty</strong></td>
            <td class="graphene-val">🛡️ <strong>1 Year Dealership Warranty</strong></td>
          </tr>
          <tr>
            <td class="feature-lbl">Battery Placement</td>
            <td class="lithium-val">Portable Detachable Under-seat Pack</td>
            <td class="graphene-val">Secure Under-seat Pack</td>
          </tr>
          <tr>
            <td class="feature-lbl">Best Suited For</td>
            <td class="lithium-val">Daily heavy commuters &amp; quick top-ups</td>
            <td class="graphene-val">Cost-effective everyday town riding</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderTechnicalSpecs(scooter) {
  const specsContainer = document.getElementById('pdpSpecsContainer');
  if (!specsContainer || !scooter.specs) return;

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
      // Highlight row if it matches active battery type
      const isLiKey = sKey.toLowerCase().includes('lithium');
      const isGrKey = sKey.toLowerCase().includes('graphene');
      let rowStyle = '';
      if (selectedBatteryType === 'lithium' && isLiKey) {
        rowStyle = 'style="background: #f0fdf4;"';
      } else if (selectedBatteryType === 'graphene' && isGrKey) {
        rowStyle = 'style="background: #f0f9ff;"';
      }

      rows += `
        <tr ${rowStyle}>
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
    const liVar = s.batteryVariants?.lithium || { range: '80 - 110 km', chargingTime: '3.5 - 4 Hours' };
    const waText = encodeURIComponent(`Hi NJ Motors, I want to inquire about the Urban eBikes ${s.name} with Lithium Battery (Price: ${s.price}, Range: ${liVar.range}).`);
    const waUrl = `https://wa.me/916238669531?text=${waText}`;

    return `
      <div class="scooter-card" id="card-${s.id}">
        <div class="scooter-img-box" style="min-height: 170px;">
          <a href="product.html?id=${s.id}&battery=lithium" class="card-details-btn">
            <img src="${defaultColor}" alt="${s.name}" class="scooter-img" style="max-height: 140px;" loading="lazy"/>
          </a>
        </div>
        <div class="card-body" style="padding: 1.2rem;">
          <h4 class="scooter-name" style="font-size: 1.15rem;">
            <a href="product.html?id=${s.id}&battery=lithium" class="card-details-btn">${s.name}</a>
          </h4>
          <p class="scooter-tagline" style="margin-bottom: 0.6rem;">${s.tagline}</p>

          <!-- Interactive Battery Type Switcher -->
          <div class="card-battery-toggle-wrap" style="margin-bottom: 0.75rem;">
            <span class="card-battery-toggle-lbl" style="font-size: 0.7rem;">🔋 Battery:</span>
            <div class="card-battery-toggle" role="group">
              <button type="button" class="card-battery-btn active" data-battery="lithium" style="font-size: 0.68rem; padding: 0.25rem 0.5rem;" onclick="toggleCardBattery(event, '${s.id}', 'lithium')">
                ⚡ Lithium
              </button>
              <button type="button" class="card-battery-btn" data-battery="graphene" style="font-size: 0.68rem; padding: 0.25rem 0.5rem;" onclick="toggleCardBattery(event, '${s.id}', 'graphene')">
                🔋 Graphene
              </button>
            </div>
          </div>

          <div class="scooter-specs-pills" style="margin-bottom: 0.85rem; gap: 0.4rem;">
            <div class="spec-pill spec-pill-range" style="padding: 0.4rem 0.5rem;">
              <span class="spec-pill-icon" style="font-size: 0.85rem;">⚡</span>
              <div class="spec-pill-text">
                <strong style="font-size: 0.8rem;">${liVar.range}</strong>
                <span style="font-size: 0.65rem;">Range</span>
              </div>
            </div>
            <div class="spec-pill spec-pill-charge" style="padding: 0.4rem 0.5rem;">
              <span class="spec-pill-icon" style="font-size: 0.85rem;">🔌</span>
              <div class="spec-pill-text">
                <strong style="font-size: 0.8rem;">${liVar.chargingTime}</strong>
                <span style="font-size: 0.65rem;">Fast Charge</span>
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
            <span style="font-weight: 800; font-family: var(--font-heading); color: var(--primary);">${s.price}</span>
            <div style="display: flex; gap: 0.4rem;">
              <a href="product.html?id=${s.id}&battery=lithium" class="btn btn-outline btn-sm card-details-btn">View</a>
              <a href="${waUrl}" class="btn btn-whatsapp btn-sm card-inquire-btn" target="_blank" title="Inquire on WhatsApp">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', loadProductDetails);
