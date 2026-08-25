/**
 * NJ MOTORS - Models Catalog Logic
 * Renders and filters all Urban eBikes models dynamically from scooters.json or window.SCOOTERS_DATA
 * Supports dual battery specifications (Lithium vs Graphene).
 */

let allScooters = [];
let currentCategory = 'all';
let currentSort = 'default';
let currentSearch = '';

async function loadScootersData() {
  // If window.SCOOTERS_DATA is already available (via script tag), use it immediately
  if (window.SCOOTERS_DATA && Array.isArray(window.SCOOTERS_DATA) && window.SCOOTERS_DATA.length > 0) {
    allScooters = window.SCOOTERS_DATA;
    renderScooterGrid();
    initFiltersAndSearch();
    return;
  }

  // Otherwise, attempt fetch for data/scooters.json
  try {
    const response = await fetch('data/scooters.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allScooters = await response.json();
    renderScooterGrid();
    initFiltersAndSearch();
  } catch (error) {
    console.warn('fetch data/scooters.json failed, checking window.SCOOTERS_DATA fallback:', error);
    if (window.SCOOTERS_DATA && Array.isArray(window.SCOOTERS_DATA) && window.SCOOTERS_DATA.length > 0) {
      allScooters = window.SCOOTERS_DATA;
      renderScooterGrid();
      initFiltersAndSearch();
    } else {
      const container = document.getElementById('scooterGridContainer');
      if (container) {
        container.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0;">
            <h3 style="color: #ef4444; margin-bottom: 0.5rem;">Unable to load scooter models</h3>
            <p style="color: #64748b; margin-bottom: 1.5rem;">Please check your connection or reload the page.</p>
            <a href="https://wa.me/916238669531?text=Hi%20NJ%20Motors,%20please%20send%20me%20the%20catalog%20of%20all%20Urban%20Bikes%20models" class="btn btn-whatsapp" target="_blank">Inquire Directly on WhatsApp</a>
          </div>
        `;
      }
    }
  }
}

function renderScooterGrid() {
  const container = document.getElementById('scooterGridContainer');
  const countBadge = document.getElementById('modelCountBadge');
  if (!container) return;

  // Filter list
  let filtered = allScooters.filter(scooter => {
    const cat = scooter.category ? scooter.category.toLowerCase() : '';
    const tag = scooter.tagline ? scooter.tagline.toLowerCase() : '';

    const matchCategory = (currentCategory === 'all') || 
      (currentCategory === 'long-range' && (scooter.rangeKm >= 80 || (scooter.range && scooter.range.includes('80 - 110')))) ||
      (currentCategory === 'sport' && (cat.includes('sport') || cat.includes('performance') || tag.includes('speed'))) ||
      (currentCategory === 'commute' && (cat.includes('commute') || cat.includes('daily') || cat.includes('comfort') || cat.includes('efficiency')));

    const query = currentSearch.toLowerCase();
    const matchSearch = currentSearch === '' || 
      scooter.name.toLowerCase().includes(query) ||
      scooter.tagline.toLowerCase().includes(query) ||
      cat.includes(query) ||
      (scooter.description && scooter.description.toLowerCase().includes(query)) ||
      (query.includes('lithium') || query.includes('graphene') || query.includes('battery'));

    return matchCategory && matchSearch;
  });

  // Sort list
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.numericPrice - a.numericPrice);
  } else if (currentSort === 'range-high') {
    filtered.sort((a, b) => b.rangeKm - a.rangeKm);
  }

  if (countBadge) {
    countBadge.textContent = `Showing ${filtered.length} of ${allScooters.length} Models`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: #ffffff; border-radius: 18px; border: 1px solid #e2e8f0;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #0f172a;">No Scooter Models Found</h3>
        <p style="color: #64748b; margin-bottom: 1.5rem;">Try adjusting your search query or category filters.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(scooter => {
    const defaultBattery = 'lithium';
    const liVar = scooter.batteryVariants?.lithium || { range: '80 - 110 km', chargingTime: '3.5 - 4 Hours' };
    const grVar = scooter.batteryVariants?.graphene || { range: '65 - 80 km', chargingTime: '6 - 7 Hours' };
    
    const waText = encodeURIComponent(`Hi NJ Motors, I want to inquire about the Urban eBikes ${scooter.name} with Lithium Battery (Price: ${scooter.price}, Range: ${liVar.range}). Please share Doorstep Home Delivery details!`);
    const waUrl = `https://wa.me/916238669531?text=${waText}`;
    const defaultColor = scooter.colors && scooter.colors.length > 0 ? scooter.colors[0] : null;
    const initialImg = scooter.image || (defaultColor ? defaultColor.image : 'assets/images/legend.png');

    const colorDots = scooter.colors ? scooter.colors.map((c, idx) => `
      <span class="color-dot ${idx === 0 ? 'active' : ''}" 
            style="background-color: ${c.hex};" 
            title="${c.name}" 
            onclick="changeCardColor(event, '${scooter.id}')">
      </span>
    `).join('') : '';

    return `
      <div class="scooter-card" id="card-${scooter.id}">
        <div class="card-badge-top">
          <span class="scooter-badge">${scooter.badge || 'Urban Bikes'}</span>
        </div>

        <div class="scooter-img-box">
          <a href="product.html?id=${scooter.id}&battery=lithium" class="card-details-btn">
            <img src="${initialImg}" alt="${scooter.name} Electric Scooter" class="scooter-img" id="img-${scooter.id}" loading="lazy" />
          </a>
        </div>

        <div class="card-body">
          <div class="color-swatches-row">
            <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">Colors:</span>
            ${colorDots}
          </div>

          <h3 class="scooter-name">
            <a href="product.html?id=${scooter.id}&battery=lithium" class="card-details-btn">${scooter.name}</a>
          </h3>
          <p class="scooter-tagline">${scooter.tagline}</p>

          <!-- Interactive Battery Type Switcher -->
          <div class="card-battery-toggle-wrap">
            <span class="card-battery-toggle-lbl">🔋 Battery:</span>
            <div class="card-battery-toggle" role="group" aria-label="Select Battery Variant">
              <button type="button" class="card-battery-btn active" data-battery="lithium" title="Switch to Lithium" onclick="toggleCardBattery(event, '${scooter.id}', 'lithium')">
                ⚡ Lithium
              </button>
              <button type="button" class="card-battery-btn" data-battery="graphene" title="Switch to Graphene" onclick="toggleCardBattery(event, '${scooter.id}', 'graphene')">
                🔋 Graphene
              </button>
            </div>
          </div>

          <div class="scooter-specs-pills">
            <div class="spec-pill spec-pill-range">
              <span class="spec-pill-icon">⚡</span>
              <div class="spec-pill-text">
                <strong>${liVar.range}</strong>
                <span>Certified Range</span>
              </div>
            </div>
            <div class="spec-pill spec-pill-charge">
              <span class="spec-pill-icon">🔌</span>
              <div class="spec-pill-text">
                <strong>${liVar.chargingTime}</strong>
                <span>⚡ Fast Charging</span>
              </div>
            </div>
            <div class="spec-pill spec-pill-warranty">
              <span class="spec-pill-icon">🛡️</span>
              <div class="spec-pill-text">
                <strong>3 Years</strong>
                <span>Lithium Warranty</span>
              </div>
            </div>
            <div class="spec-pill">
              <span class="spec-pill-icon">🚀</span>
              <div class="spec-pill-text">
                <strong>${scooter.topSpeed}</strong>
                <span>Non-RTO Legal</span>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="scooter-price-box">
              <span class="price-label">Starting Price</span>
              <span class="price-val">${scooter.price}</span>
            </div>
            <div class="card-actions">
              <a href="product.html?id=${scooter.id}&battery=lithium" class="btn btn-outline btn-sm card-details-btn">Details</a>
              <a href="${waUrl}" class="btn btn-whatsapp btn-sm card-inquire-btn" target="_blank" title="Inquire on WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function changeCardColor(event, scooterId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const card = document.getElementById(`card-${scooterId}`);
  if (card && event && event.target) {
    const dots = card.querySelectorAll('.color-dot');
    dots.forEach(d => d.classList.remove('active'));
    event.target.classList.add('active');
  }
}

function initFiltersAndSearch() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderScooterGrid();
    });
  });

  const searchInput = document.getElementById('modelSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderScooterGrid();
    });
  }

  const sortSelect = document.getElementById('modelSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderScooterGrid();
    });
  }
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  currentSort = 'default';
  const searchInput = document.getElementById('modelSearchInput');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('modelSortSelect');
  if (sortSelect) sortSelect.value = 'default';
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(b => {
    if (b.getAttribute('data-filter') === 'all') {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderScooterGrid();
}

document.addEventListener('DOMContentLoaded', loadScootersData);
