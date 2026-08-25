/**
 * NJ MOTORS - Global Application Logic
 * Dealership WhatsApp: +919072430473
 */

const NJ_MOTORS = {
  PHONE: '919072430473',
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

        const message = `Hi NJ Motors,\n\nName: ${name}\nPhone: ${phone}\nInterested Model: ${model}\nInquiry: ${inquiryType}\nNote: ${notes}\n\nPlease get back to me with the best deal and test ride availability!`;

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

document.addEventListener('DOMContentLoaded', () => {
  NJ_MOTORS.initNav();
  NJ_MOTORS.initFAQ();
  NJ_MOTORS.initContactForm();
});
