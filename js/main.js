/**
 * NJ MOTORS - Global Application Logic
 * Dealership WhatsApp: +916238669531
 */

const NJ_MOTORS = {
  PHONE: '916238669531',
  DEALERSHIP_NAME: 'NJ Motors',
  BRAND_NAME: 'Urban eBikes',

  /**
   * Builds an encoded WhatsApp URL with optional pre-filled text
   */
  getWhatsAppUrl: function (customMessage) {
    const defaultMsg = `Hi ${this.DEALERSHIP_NAME}, I want to know more about the ${this.BRAND_NAME} electric scooters (No License Required).`;
    const message = customMessage || defaultMsg;
    return `https://wa.me/${this.PHONE}?text=${encodeURIComponent(message)}`;
  },

  /**
   * Initializes mobile navigation drawer and event listeners
   */
  initNav: function () {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const closeBtn = document.getElementById('mobileDrawerClose');
    const overlay = document.getElementById('mobileNavOverlay');
    const drawer = document.getElementById('mobileNavDrawer');

    if (toggleBtn && drawer && overlay) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      const closeMenu = () => {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      };

      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      overlay.addEventListener('click', closeMenu);
    }

    // Header scroll background elevation
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
          header.style.boxShadow = 'none';
        }
      });
    }
  },

  /**
   * Initializes FAQ accordion toggles
   */
  initFAQ: function () {
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
      const header = card.querySelector('.faq-header');
      if (header) {
        header.addEventListener('click', () => {
          const isOpen = card.classList.contains('open');
          // Close all
          faqCards.forEach(c => c.classList.remove('open'));
          // Toggle current
          if (!isOpen) {
            card.classList.add('open');
          }
        });
      }
    });
  },

  /**
   * Initializes Contact / Test Ride Form to redirect to WhatsApp
   */
  initContactForm: function () {
    const form = document.getElementById('inquiryForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('formName')?.value.trim() || 'Customer';
        const phone = document.getElementById('formPhone')?.value.trim() || '';
        const model = document.getElementById('formModel')?.value || 'Urban Bikes E-Scooter';
        const inquiryType = document.getElementById('formInquiryType')?.value || 'Test Ride & Price Quote';
        const notes = document.getElementById('formNotes')?.value.trim() || 'Please share details and showroom location.';

        const message = `Hi NJ Motors,\n\nName: ${name}\nPhone: ${phone}\nInterested Model: ${model}\nInquiry: ${inquiryType}\nNote: ${notes}\n\nPlease get back to me with details and confirmation!`;

        const waUrl = NJ_MOTORS.getWhatsAppUrl(message);
        window.open(waUrl, '_blank');
      });
    }
  },

  /**
   * Formats numbers to Indian currency notation
   */
  formatCurrency: function (num) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  }
};

/**
 * Global Product Card Battery Toggle Switcher
 * Dynamically switches specs, links, and WhatsApp inquiry text on cards
 */
function toggleCardBattery(event, scooterId, batteryType) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const card = document.getElementById(`card-${scooterId}`) || (event ? event.target.closest('.scooter-card') : null);
  if (!card) return;

  const scooters = window.SCOOTERS_DATA || [];
  const scooter = scooters.find(s => s.id === scooterId);

  const liVar = scooter?.batteryVariants?.lithium || {
    range: '80 - 110 km',
    chargingTime: '3.5 - 4 Hours',
    warranty: '3 Years Warranty'
  };

  const grVar = scooter?.batteryVariants?.graphene || {
    range: '65 - 80 km',
    chargingTime: '6 - 7 Hours',
    warranty: '1 Year Warranty'
  };

  const isLithium = batteryType === 'lithium';
  const activeVar = isLithium ? liVar : grVar;

  // 1. Update button states
  const buttons = card.querySelectorAll('.card-battery-btn');
  buttons.forEach(btn => {
    const btnType = btn.getAttribute('data-battery') || btn.getAttribute('data-type');
    if (btnType === batteryType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2. Update Spec Pills (Target specific elements accurately)
  const rangePill = card.querySelector('.spec-pill-range');
  const chargePill = card.querySelector('.spec-pill-charge');
  const warrantyPill = card.querySelector('.spec-pill-warranty');

  if (rangePill) {
    const icon = rangePill.querySelector('.spec-pill-icon');
    const strong = rangePill.querySelector('.spec-pill-text strong');
    const span = rangePill.querySelector('.spec-pill-text span');
    if (icon) icon.textContent = '⚡';
    if (strong) strong.textContent = activeVar.range;
    if (span) span.textContent = isLithium ? 'Certified Range' : 'Graphene Range';
  }

  if (chargePill) {
    const icon = chargePill.querySelector('.spec-pill-icon');
    const strong = chargePill.querySelector('.spec-pill-text strong');
    const span = chargePill.querySelector('.spec-pill-text span');
    if (icon) icon.textContent = isLithium ? '⚡' : '🔌';
    if (strong) strong.textContent = activeVar.chargingTime;
    if (span) span.textContent = isLithium ? 'Fast Charging' : 'Standard Charge';
  }

  if (warrantyPill) {
    const icon = warrantyPill.querySelector('.spec-pill-icon');
    const strong = warrantyPill.querySelector('.spec-pill-text strong');
    const span = warrantyPill.querySelector('.spec-pill-text span');
    if (icon) icon.textContent = '🛡️';
    if (strong) strong.textContent = isLithium ? '3 Years' : '1 Year';
    if (span) span.textContent = isLithium ? 'Lithium Warranty' : 'Graphene Warranty';
  }

  // 3. Update Details link (passes &battery=lithium/graphene to PDP)
  const detailsLinks = card.querySelectorAll('.card-details-btn, .scooter-name a, .scooter-img-box a');
  detailsLinks.forEach(link => {
    link.href = `product.html?id=${scooterId}&battery=${batteryType}`;
  });

  // 4. Update WhatsApp Inquire link
  const inquireBtn = card.querySelector('.card-inquire-btn, a.btn-whatsapp');
  if (inquireBtn) {
    const scooterName = scooter?.name || 'Urban eBikes';
    const scooterPrice = scooter?.price || '';
    const batteryLabel = isLithium ? 'Lithium Battery (3-Yr Warranty, Fast Charge)' : 'Graphene Battery (1-Yr Warranty, 6-7h Charge)';
    const waText = encodeURIComponent(`Hi NJ Motors, I want to inquire about the Urban eBikes ${scooterName} with ${batteryLabel} (Price: ${scooterPrice}, Range: ${activeVar.range}). Please share Doorstep Home Delivery details!`);
    inquireBtn.href = `https://wa.me/916238669531?text=${waText}`;
  }
}

window.toggleCardBattery = toggleCardBattery;

document.addEventListener('DOMContentLoaded', () => {
  NJ_MOTORS.initNav();
  NJ_MOTORS.initFAQ();
  NJ_MOTORS.initContactForm();
});
