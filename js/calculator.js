/**
 * NJ MOTORS - Fuel Savings Calculator Logic
 * Compares Petrol 2-Wheeler expenses vs Urban Bikes Electric Scooter
 */

function initSavingsCalculator() {
  const slider = document.getElementById('dailyKmSlider');
  const kmDisplay = document.getElementById('dailyKmValue');
  const monthlySavingsEl = document.getElementById('calcMonthlySavings');
  const yearlySavingsEl = document.getElementById('calcYearlySavings');
  const petrolCostEl = document.getElementById('calcPetrolCost');
  const evCostEl = document.getElementById('calcEvCost');

  if (!slider) return;

  // Assumptions for standard Indian conditions
  // Petrol Scooter: Mileage 40 km/L, Petrol Price ₹102/L => ₹2.55 per km + ₹0.30 maintenance = ₹2.85/km
  // Urban Bikes EV: Electricity Cost ₹7/unit, 1.2 units per 80 km => ₹0.11/km + ₹0.04 maintenance = ₹0.15/km
  const PETROL_COST_PER_KM = 2.85;
  const EV_COST_PER_KM = 0.15;
  const DAYS_PER_MONTH = 30;

  function updateCalculations() {
    const dailyKm = parseInt(slider.value, 10);
    if (kmDisplay) kmDisplay.textContent = `${dailyKm} km / day`;

    const monthlyKm = dailyKm * DAYS_PER_MONTH;
    const yearlyKm = dailyKm * 365;

    const monthlyPetrol = monthlyKm * PETROL_COST_PER_KM;
    const monthlyEv = monthlyKm * EV_COST_PER_KM;
    const monthlySavings = monthlyPetrol - monthlyEv;
    const yearlySavings = monthlySavings * 12;

    if (monthlySavingsEl) monthlySavingsEl.textContent = NJ_MOTORS.formatCurrency(monthlySavings);
    if (yearlySavingsEl) yearlySavingsEl.textContent = NJ_MOTORS.formatCurrency(yearlySavings);
    if (petrolCostEl) petrolCostEl.textContent = `${NJ_MOTORS.formatCurrency(monthlyPetrol)} / mo`;
    if (evCostEl) evCostEl.textContent = `${NJ_MOTORS.formatCurrency(monthlyEv)} / mo`;
  }

  slider.addEventListener('input', updateCalculations);
  updateCalculations();
}

document.addEventListener('DOMContentLoaded', initSavingsCalculator);
