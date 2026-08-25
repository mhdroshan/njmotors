/**
 * NJ MOTORS - Centralized Scooter Data Store
 * Provides instant synchronous availability for file:// and offline environments,
 * while matching data/scooters.json exactly.
 * Product data based on authentic Urban eBikes lineup (urbanebikes.in).
 * Dual Battery Architecture: Lithium Battery (Smart BMS, Fast Charge, 3-Yr Warranty) & Graphene Battery (1-Yr Warranty).
 */

window.SCOOTERS_DATA = [
  {
    "id": "urban-legend",
    "name": "Legend",
    "tagline": "The Everyday Smart City Rider",
    "category": "Daily Commute",
    "badge": "Best Seller",
    "price": "₹55,999",
    "numericPrice": 55999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 24Ah Lithium-ion / Graphene",
    "motor": "BLDC Hub Motor (Waterproof High-Torque)",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum with E-ABS",
    "tyres": "90/100-10 Tubeless All-Weather Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Legend is engineered for college students and everyday city commuters. Available in both Lithium (3-Year Warranty, Fast Charging) and Graphene (1-Year Warranty) battery variants with zero registration paperwork.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Li-ion with Smart BMS",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 24Ah Advanced Lithium-ion (Smart BMS)",
        "placement": "Portable Detachable Under-seat",
        "powerConsumption": "~1.2 Units per Full Charge (~₹8)"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Battery Compartment",
        "powerConsumption": "~1.4 Units per Full Charge (~₹9)"
      }
    },
    "colors": [
      {
        "name": "Royal Maroon",
        "hex": "#881337",
        "image": "assets/images/legend-maroon.png"
      },
      {
        "name": "Ocean Blue",
        "hex": "#1d4ed8",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Titanium Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Racing Yellow",
        "hex": "#eab308",
        "image": "assets/images/y1.png"
      }
    ],
    "features": [
      "Keyless Entry & Smart Remote Start",
      "Anti-Theft Alarm with Motor Lock",
      "USB Mobile Charging Socket",
      "Cruise Control System",
      "Reverse Gear Assist for Easy Parking",
      "3-Speed Riding Modes (Eco / City / Turbo)",
      "Choice of Lithium (3-Yr) or Graphene (1-Yr) Battery",
      "Zero RTO Registration & No License Needed"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h (Govt. Approved Non-RTO)",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge (Cost-Effective)",
        "Motor Type": "BLDC Hub Motor (Waterproof High-Torque)",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability / Climb": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium (Auto-cut) / Standard on Graphene",
        "Charger Type": "Smart Micro-controller with Auto-cut",
        "Power Consumption": "~1.2 Units (Lithium) / ~1.4 Units (Graphene)"
      },
      "Chassis & Safety": {
        "Braking System": "Front Hydraulic Disc + Rear Drum with E-ABS",
        "Suspension": "Front Telescopic Hydraulic / Rear Hydraulic Shockers",
        "Wheel Type": "10-inch Rust-Free Alloy Wheels",
        "Tyre Size": "90/100-10 Heavy Duty Tubeless",
        "Lighting": "Full LED Projector Headlamp, LED Tail & Turn Signals"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "68 kg",
        "Carrying Capacity": "160 kg (2 Adults)",
        "Ground Clearance": "170 mm (Pothole Friendly)",
        "Under-seat Storage": "18 Litres (Fits Helmets & Bags)",
        "Boot Space & USB": "Included with Fast 2.4A Charger"
      }
    }
  },
  {
    "id": "urban-fusion",
    "name": "Fusion",
    "tagline": "Fusion Of Power & Passion",
    "category": "Sport & Style",
    "badge": "Popular",
    "price": "₹62,999",
    "numericPrice": 62999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 26Ah Lithium-ion / Graphene",
    "motor": "BLDC Hub Motor (High Efficiency)",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Anti-Skid Tubeless",
    "payload": "165 kg",
    "weight": "70 kg",
    "groundClearance": "175 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Fusion blends stylish dynamic body styling with reliable electric engineering. Choose between high-performance Lithium with Fast Charging & 3-year warranty, or economical Graphene battery with 1-year warranty.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Li-ion with Smart BMS",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 26Ah Smart BMS Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.3 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Battery Compartment",
        "powerConsumption": "~1.5 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Crimson Red",
        "hex": "#dc2626",
        "image": "assets/images/fusion-red.png"
      },
      {
        "name": "Midnight Blue",
        "hex": "#1e3a8a",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Steel Grey",
        "hex": "#475569",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Sunset Yellow",
        "hex": "#eab308",
        "image": "assets/images/y1.png"
      }
    ],
    "features": [
      "Keyless Entry System with Smart Key",
      "Anti-Theft Alarm Protection with Motor Cut-off",
      "USB Mobile Phone Fast Charger",
      "Cruise Control for Smooth Cruising",
      "Reverse Assist Gear",
      "3 Speed Selectable Drive Modes",
      "Available with Lithium (3-Yr) or Graphene (1-Yr)",
      "Telescopic Front & Hydraulic Rear Suspension"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h (Govt. Approved Non-RTO)",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Type": "BLDC Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "13 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Smart Auto Cut-Off Charger",
        "Electricity Cost": "₹0.14 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Hydraulic Disc & Rear Drum",
        "Suspension": "Heavy Duty Telescopic Front / Dual Hydraulic Rear",
        "Wheel Type": "Diamond-Cut Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "Full LED Headlamp with Halo Ring"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "70 kg",
        "Carrying Capacity": "165 kg",
        "Ground Clearance": "175 mm",
        "Under-seat Storage": "20 Litres"
      }
    }
  },
  {
    "id": "urban-falcon",
    "name": "Falcon",
    "tagline": "Swift, Agile & Aerodynamic Flight",
    "category": "Commuter",
    "badge": "Customer Choice",
    "price": "₹66,999",
    "numericPrice": 66999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 26Ah Lithium-ion / Graphene",
    "motor": "BLDC Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless",
    "payload": "165 kg",
    "weight": "69 kg",
    "groundClearance": "175 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Falcon is crafted with sharp aerodynamic contours and swift acceleration for effortless daily commuting. Available with Lithium (Fast Charge, 3-Yr Warranty) or Graphene (1-Yr Warranty) packs.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Li-ion with Smart BMS",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 26Ah Smart Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.3 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Battery Compartment",
        "powerConsumption": "~1.5 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Slate Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Pearl White",
        "hex": "#f8fafc",
        "image": "assets/images/optima-white.png"
      },
      {
        "name": "Deep Maroon",
        "hex": "#881337",
        "image": "assets/images/legend-maroon.png"
      },
      {
        "name": "Electric Blue",
        "hex": "#2563eb",
        "image": "assets/images/legend-blue.png"
      }
    ],
    "features": [
      "Keyless Entry with Push Start",
      "Smart Anti-Theft Alarm System",
      "USB Fast-Charging Port for Mobile",
      "Cruise Control Function",
      "Reverse Gear Capability",
      "3-Speed Performance Modes",
      "Lithium (3-Year) & Graphene (1-Year) Options",
      "Alloy Wheels with Tubeless Tyres"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC High Efficiency Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "13 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Smart Auto Cut-Off Charger",
        "Electricity Cost": "₹0.14 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic Dual Shocks",
        "Wheel Type": "Sport Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "LED Projector Headlamp with DRLs"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "69 kg",
        "Carrying Capacity": "165 kg",
        "Ground Clearance": "175 mm",
        "Under-seat Storage": "19 Litres"
      }
    }
  },
  {
    "id": "urban-optima",
    "name": "Optima",
    "tagline": "The Optimus Speed & Efficiency",
    "category": "Efficiency / Value",
    "badge": "Top Value",
    "price": "₹67,999",
    "numericPrice": 67999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "48V / 60V 24Ah Lithium-ion / Graphene",
    "motor": "BLDC Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "155 kg",
    "weight": "67 kg",
    "groundClearance": "170 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Optima delivers maximum cost-efficiency, smooth low-drag acceleration, and everyday reliability with minimal operating costs under ₹0.15/km.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Li-ion Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "48V/60V 24Ah Advanced Lithium-ion",
        "placement": "Detachable Pack",
        "powerConsumption": "~1.2 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "48V/60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Compartment",
        "powerConsumption": "~1.4 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Metallic Maroon",
        "hex": "#881337",
        "image": "assets/images/optima-maroon.png"
      },
      {
        "name": "Glossy White",
        "hex": "#f8fafc",
        "image": "assets/images/optima-white.png"
      },
      {
        "name": "Ocean Blue",
        "hex": "#1d4ed8",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Titanium Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      }
    ],
    "features": [
      "Keyless Smart Entry",
      "Anti-Theft Warning Siren",
      "USB Fast-Charge Port",
      "Cruise Control System",
      "Reverse Mode for Easy Manoeuvring",
      "3-Speed Power Modes",
      "Dual Battery Choices (Lithium 3-Yr / Graphene 1-Yr)",
      "Low Running Cost (~₹8 per 80 km)"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Smart Charger with Auto Cut-Off",
        "Electricity Cost": "₹0.13 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic",
        "Wheel Type": "Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "LED High-Lumen Headlamp"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "67 kg",
        "Carrying Capacity": "155 kg",
        "Ground Clearance": "170 mm",
        "Under-seat Storage": "18 Litres"
      }
    }
  },
  {
    "id": "urban-phantom",
    "name": "Phantom",
    "tagline": "The Speed Of Phantom",
    "category": "Premium Commute",
    "badge": "Flagship",
    "price": "₹73,999",
    "numericPrice": 73999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V / 72V 30Ah Lithium-ion / Graphene",
    "motor": "BLDC High-Torque Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-12 Large Tubeless Tyres",
    "payload": "175 kg",
    "weight": "72 kg",
    "groundClearance": "180 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Phantom delivers imposing road presence, 12-inch oversized alloy wheels, colored digital display, and a 60/72V dual-voltage controller with Lithium or Graphene battery options.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "High-Performance Lithium Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V / 72V 30Ah Advanced Lithium-ion",
        "placement": "Central Weight-Balanced Under-seat",
        "powerConsumption": "~1.5 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V / 72V Heavy-Duty Graphene Battery Pack",
        "placement": "Central Under-seat Compartment",
        "powerConsumption": "~1.7 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Glacier White",
        "hex": "#ffffff",
        "image": "assets/images/phantom-white.png"
      },
      {
        "name": "Royal Blue",
        "hex": "#1e40af",
        "image": "assets/images/phantom-blue.png"
      },
      {
        "name": "Matte Titanium Grey",
        "hex": "#4b5563",
        "image": "assets/images/phantom-grey.png"
      },
      {
        "name": "Solar Yellow",
        "hex": "#eab308",
        "image": "assets/images/y1.png"
      }
    ],
    "features": [
      "Keyless Entry & Remote Push-Button Start",
      "Anti-Theft Alarm with Wheel Lock",
      "Colored Digital Multi-Function Display",
      "USB Fast-Charging Port",
      "Large 12-inch Alloy Wheels for High Ground Clearance",
      "Reverse Gear Assistance",
      "3-Speed Drive Modes",
      "Choice of 3-Year Lithium or 1-Year Graphene Battery"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC High Torque Hub Motor",
        "Controller": "60/72V Smart Wireless Controller",
        "Gradeability": "15 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Fast Smart Charger",
        "Electricity Cost": "₹0.14 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Heavy Duty Telescopic Front / Dual Hydraulic Rear",
        "Wheel Type": "12-Inch Diamond-Cut Alloy Wheel",
        "Tyre Size": "90/100-12 Tubeless",
        "Lighting": "Full LED Projector Lighting Suite"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "72 kg",
        "Carrying Capacity": "175 kg",
        "Ground Clearance": "180 mm",
        "Under-seat Storage": "20 Litres"
      }
    }
  },
  {
    "id": "urban-phantom-plus",
    "name": "Phantom+",
    "tagline": "Feel The Wild Speed",
    "category": "Extended Performance",
    "badge": "Max Range",
    "price": "₹75,999",
    "numericPrice": 75999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "72V 32Ah Lithium-ion / Graphene",
    "motor": "BLDC Heavy Duty Hub Motor",
    "chargingTime": "4 - 4.5 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-12 Extra-Grip Tubeless",
    "payload": "180 kg",
    "weight": "74 kg",
    "groundClearance": "180 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "The Phantom+ is the extended-range evolution packing 72V dual-voltage support, up to 110km certified single-charge range on Lithium, and plush long-distance seating.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "High-Energy Density Lithium-ion",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "4 - 4.5 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (4 - 4.5 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "72V 32Ah High-Energy Density Lithium-ion",
        "placement": "Detachable Pack",
        "powerConsumption": "~1.7 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "72V 32Ah High-Capacity Graphene Battery Pack",
        "placement": "Under-seat Heavy Duty Compartment",
        "powerConsumption": "~1.9 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Cyber Cyan",
        "hex": "#0284c7",
        "image": "assets/images/phantom-plus.png"
      },
      {
        "name": "Matte Titanium Grey",
        "hex": "#4b5563",
        "image": "assets/images/phantom-grey.png"
      },
      {
        "name": "Glacier White",
        "hex": "#ffffff",
        "image": "assets/images/phantom-white.png"
      },
      {
        "name": "Royal Blue",
        "hex": "#1e40af",
        "image": "assets/images/phantom-blue.png"
      }
    ],
    "features": [
      "Extended 80 - 110 KM Range for Inter-City Rides",
      "Keyless Smart Entry & Engine Push Start",
      "Anti-Theft Alarm with Motion Sensor",
      "Colored High-Resolution Digital Dashboard",
      "USB Fast Phone Charging Port",
      "12-Inch Tubeless Alloy Wheel System",
      "Reverse Gear & 3-Speed Modes",
      "Lithium (3-Year) & Graphene (1-Year) Options"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC Heavy-Duty Hub Motor",
        "Controller": "60/72V Smart Wireless Controller",
        "Gradeability": "15 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "4 - 4.5 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Fast Smart Charger",
        "Electricity Cost": "₹0.14 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic Dual Shocks",
        "Wheel Type": "12-Inch Sport Alloy Wheels",
        "Tyre Size": "90/100-12 Tubeless",
        "Lighting": "Full LED Dual Projector Headlamp"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "74 kg",
        "Carrying Capacity": "180 kg",
        "Ground Clearance": "180 mm",
        "Under-seat Storage": "22 Litres"
      }
    }
  },
  {
    "id": "urban-phantom-gen-i",
    "name": "Phantom Gen I",
    "tagline": "The Original Power Pioneer",
    "category": "Heritage / Sport",
    "badge": "Gen I Icon",
    "price": "₹75,999",
    "numericPrice": 75999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V / 72V 30Ah Lithium-ion / Graphene",
    "motor": "BLDC High-Efficiency Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-12 Tubeless Tyres",
    "payload": "175 kg",
    "weight": "73 kg",
    "groundClearance": "180 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Phantom Gen I features iconic sport styling, colored smart display, 12-inch wheels, and robust suspension engineered for superior performance with both Lithium and Graphene battery options.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "High-Performance Lithium Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V / 72V 30Ah Lithium-ion Pack",
        "placement": "Removable Pack",
        "powerConsumption": "~1.5 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V / 72V Graphene Battery Pack",
        "placement": "Under-seat Compartment",
        "powerConsumption": "~1.7 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Stealth Carbon Black",
        "hex": "#18181b",
        "image": "assets/images/phantom-gen-i.png"
      },
      {
        "name": "Pearl White",
        "hex": "#ffffff",
        "image": "assets/images/phantom-white.png"
      },
      {
        "name": "Royal Blue",
        "hex": "#1e40af",
        "image": "assets/images/phantom-blue.png"
      },
      {
        "name": "Titanium Grey",
        "hex": "#4b5563",
        "image": "assets/images/phantom-grey.png"
      }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft Alarm System",
      "Colored Digital Cockpit Display",
      "USB Mobile Charging Socket",
      "Large 12-inch Alloy Wheels",
      "Reverse Gear Drive Assist",
      "3-Speed Power Selection",
      "Lithium (3-Yr) or Graphene (1-Yr) Warranty"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC High-Efficiency Hub Motor",
        "Controller": "60/72V Smart Wireless Controller",
        "Gradeability": "14 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Auto Cut-Off Smart Charger",
        "Electricity Cost": "₹0.14 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic",
        "Wheel Type": "12-Inch Alloy Wheels",
        "Tyre Size": "90/100-12 Tubeless",
        "Lighting": "Full LED Lighting with DRLs"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "73 kg",
        "Carrying Capacity": "175 kg",
        "Ground Clearance": "180 mm",
        "Under-seat Storage": "20 Litres"
      }
    }
  },
  {
    "id": "urban-destiny",
    "name": "Destiny",
    "tagline": "Comfortable Elegance For Everyday Travel",
    "category": "Comfort & Family",
    "badge": "Family Choice",
    "price": "₹73,999",
    "numericPrice": 73999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 24Ah Lithium-ion / Graphene",
    "motor": "BLDC Smooth-Torque Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Destiny combines elegant curves, plush dual-density seating, deep under-seat boot space, and smart keyless security with Lithium or Graphene battery options.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Smart Lithium Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 24Ah Smart Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.2 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Compartment",
        "powerConsumption": "~1.4 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Ruby Red",
        "hex": "#b91c1c",
        "image": "assets/images/destiny-red.png"
      },
      {
        "name": "Ocean Blue",
        "hex": "#1d4ed8",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Metallic Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Pearl White",
        "hex": "#ffffff",
        "image": "assets/images/optima-white.png"
      }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft System with Alert Buzzer",
      "USB Mobile Fast-Charging Socket",
      "Cruise Control for Fatigue-Free Cruising",
      "Reverse Assist Gear",
      "3-Speed Electronic Throttle Modes",
      "Lithium (3-Yr) or Graphene (1-Yr) Battery Options",
      "Extra Padded Ergonomic Cushion Seat"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC Smooth-Torque Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Auto Cut-Off Smart Charger",
        "Electricity Cost": "₹0.13 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic",
        "Wheel Type": "Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "LED Projector Headlamp"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "68 kg",
        "Carrying Capacity": "160 kg",
        "Ground Clearance": "170 mm",
        "Under-seat Storage": "19 Litres"
      }
    }
  },
  {
    "id": "i-cruze",
    "name": "I cruze",
    "tagline": "Comfortable Elegance For Everyday Travel",
    "category": "Comfort & Family",
    "badge": "Family Choice",
    "price": "₹73,999",
    "numericPrice": 73999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 24Ah Lithium-ion / Graphene",
    "motor": "BLDC Smooth-Torque Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban I cruze combines elegant curves, plush dual-density seating, deep under-seat boot space, and smart keyless security with Lithium or Graphene battery options.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Smart Lithium Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 24Ah Smart Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.2 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Compartment",
        "powerConsumption": "~1.4 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Ruby Red",
        "hex": "#b91c1c",
        "image": "assets/images/destiny-red.png"
      },
      {
        "name": "Ocean Blue",
        "hex": "#1d4ed8",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Metallic Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Pearl White",
        "hex": "#ffffff",
        "image": "assets/images/optima-white.png"
      }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft System with Alert Buzzer",
      "USB Mobile Fast-Charging Socket",
      "Cruise Control for Fatigue-Free Cruising",
      "Reverse Assist Gear",
      "3-Speed Electronic Throttle Modes",
      "Lithium (3-Yr) or Graphene (1-Yr) Battery Options",
      "Extra Padded Ergonomic Cushion Seat"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC Smooth-Torque Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Auto Cut-Off Smart Charger",
        "Electricity Cost": "₹0.13 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic",
        "Wheel Type": "Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "LED Projector Headlamp"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "68 kg",
        "Carrying Capacity": "160 kg",
        "Ground Clearance": "170 mm",
        "Under-seat Storage": "19 Litres"
      }
    }
  },
  {
    "id": "raptor-2-0",
    "name": "Raptor 2.0",
    "tagline": "Comfortable Elegance For Everyday Travel",
    "category": "Comfort & Family",
    "badge": "Family Choice",
    "price": "₹78,999",
    "numericPrice": 78999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 24Ah Lithium-ion / Graphene",
    "motor": "BLDC Smooth-Torque Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Raptor 2.0 combines elegant curves, plush dual-density seating, deep under-seat boot space, and smart keyless security with Lithium or Graphene battery options.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Smart Lithium Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 24Ah Smart Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.2 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Compartment",
        "powerConsumption": "~1.4 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Ruby Red",
        "hex": "#b91c1c",
        "image": "assets/images/destiny-red.png"
      },
      {
        "name": "Ocean Blue",
        "hex": "#1d4ed8",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Metallic Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Pearl White",
        "hex": "#ffffff",
        "image": "assets/images/optima-white.png"
      }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft System with Alert Buzzer",
      "USB Mobile Fast-Charging Socket",
      "Cruise Control for Fatigue-Free Cruising",
      "Reverse Assist Gear",
      "3-Speed Electronic Throttle Modes",
      "Lithium (3-Yr) or Graphene (1-Yr) Battery Options",
      "Extra Padded Ergonomic Cushion Seat"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC Smooth-Torque Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Auto Cut-Off Smart Charger",
        "Electricity Cost": "₹0.13 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic",
        "Wheel Type": "Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "LED Projector Headlamp"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "68 kg",
        "Carrying Capacity": "160 kg",
        "Ground Clearance": "170 mm",
        "Under-seat Storage": "19 Litres"
      }
    }
  },
  {
    "id": "symphony",
    "name": "Symphony",
    "tagline": "Fusion Of Power & Passion",
    "category": "Sport & Style",
    "badge": "Popular",
    "price": "₹71,999",
    "numericPrice": 71999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 26Ah Lithium-ion / Graphene",
    "motor": "BLDC Hub Motor (High Efficiency)",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Anti-Skid Tubeless",
    "payload": "165 kg",
    "weight": "70 kg",
    "groundClearance": "175 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Symphony blends stylish dynamic body styling with reliable electric engineering. Choose between high-performance Lithium with Fast Charging & 3-year warranty, or economical Graphene battery with 1-year warranty.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Li-ion with Smart BMS",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 26Ah Smart BMS Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.3 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Battery Compartment",
        "powerConsumption": "~1.5 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Crimson Red",
        "hex": "#dc2626",
        "image": "assets/images/fusion-red.png"
      },
      {
        "name": "Midnight Blue",
        "hex": "#1e3a8a",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Steel Grey",
        "hex": "#475569",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Sunset Yellow",
        "hex": "#eab308",
        "image": "assets/images/y1.png"
      }
    ],
    "features": [
      "Keyless Entry System with Smart Key",
      "Anti-Theft Alarm Protection with Motor Cut-off",
      "USB Mobile Phone Fast Charger",
      "Cruise Control for Smooth Cruising",
      "Reverse Assist Gear",
      "3 Speed Selectable Drive Modes",
      "Available with Lithium (3-Yr) or Graphene (1-Yr)",
      "Telescopic Front & Hydraulic Rear Suspension"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h (Govt. Approved Non-RTO)",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Type": "BLDC Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "13 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Smart Auto Cut-Off Charger",
        "Electricity Cost": "₹0.14 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Hydraulic Disc & Rear Drum",
        "Suspension": "Heavy Duty Telescopic Front / Dual Hydraulic Rear",
        "Wheel Type": "Diamond-Cut Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "Full LED Headlamp with Halo Ring"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "70 kg",
        "Carrying Capacity": "165 kg",
        "Ground Clearance": "175 mm",
        "Under-seat Storage": "20 Litres"
      }
    }
  },
  {
    "id": "despro",
    "name": "Despro",
    "tagline": "Comfortable Elegance For Everyday Travel",
    "category": "Comfort & Family",
    "badge": "Family Choice",
    "price": "₹76,999",
    "numericPrice": 76999,
    "range": "80 - 110 km (Lithium) / 65 - 80 km (Graphene)",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "Lithium / Graphene Battery Options",
    "batteryCapacity": "60V 24Ah Lithium-ion / Graphene",
    "motor": "BLDC Smooth-Torque Hub Motor",
    "chargingTime": "3.5 - 4 Hrs (Lithium) / 6 - 7 Hrs (Graphene)",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "3 Years (Lithium) / 1 Year (Graphene)",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Despro combines elegant curves, plush dual-density seating, deep under-seat boot space, and smart keyless security with Lithium or Graphene battery options.",
    "batteryVariants": {
      "lithium": {
        "name": "Lithium Battery (Smart BMS)",
        "type": "Advanced Smart Lithium Pack",
        "range": "80 - 110 km",
        "rangeKm": 110,
        "certifiedRange": "80 - 110 km per charge",
        "chargingTime": "3.5 - 4 Hours",
        "fastCharging": true,
        "chargingFeature": "Fast Charging (3.5 - 4 Hrs to 100%)",
        "warranty": "3 Years Warranty",
        "warrantyYears": 3,
        "technology": "60V 24Ah Smart Lithium-ion",
        "placement": "Detachable Under-seat",
        "powerConsumption": "~1.2 Units per Full Charge"
      },
      "graphene": {
        "name": "Graphene Battery",
        "type": "High-Durability Graphene Pack",
        "range": "65 - 80 km",
        "rangeKm": 80,
        "certifiedRange": "65 - 80 km per charge",
        "chargingTime": "6 - 7 Hours",
        "fastCharging": false,
        "chargingFeature": "Standard Charging (6 - 7 Hrs, No Fast Charge)",
        "warranty": "1 Year Warranty",
        "warrantyYears": 1,
        "technology": "60V Heavy-Duty Graphene Battery",
        "placement": "Under-seat Compartment",
        "powerConsumption": "~1.4 Units per Full Charge"
      }
    },
    "colors": [
      {
        "name": "Ruby Red",
        "hex": "#b91c1c",
        "image": "assets/images/destiny-red.png"
      },
      {
        "name": "Ocean Blue",
        "hex": "#1d4ed8",
        "image": "assets/images/legend-blue.png"
      },
      {
        "name": "Metallic Grey",
        "hex": "#64748b",
        "image": "assets/images/falcon-grey.png"
      },
      {
        "name": "Pearl White",
        "hex": "#ffffff",
        "image": "assets/images/optima-white.png"
      }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft System with Alert Buzzer",
      "USB Mobile Fast-Charging Socket",
      "Cruise Control for Fatigue-Free Cruising",
      "Reverse Assist Gear",
      "3-Speed Electronic Throttle Modes",
      "Lithium (3-Yr) or Graphene (1-Yr) Battery Options",
      "Extra Padded Ergonomic Cushion Seat"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range (Lithium)": "80 - 110 km per charge",
        "Certified Range (Graphene)": "65 - 80 km per charge",
        "Motor Power": "BLDC Smooth-Torque Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Options": "Lithium Battery (Smart BMS) / Graphene Battery",
        "Battery Warranty": "3 Years (Lithium) / 1 Year (Graphene)",
        "Charging Time": "3.5 - 4 Hours (Lithium Fast Charge) / 6 - 7 Hours (Graphene)",
        "Fast Charging": "Supported on Lithium / Standard on Graphene",
        "Charger Type": "Auto Cut-Off Smart Charger",
        "Electricity Cost": "₹0.13 per km"
      },
      "Chassis & Safety": {
        "Braking System": "Front Disc & Rear Drum",
        "Suspension": "Front Telescopic / Rear Hydraulic",
        "Wheel Type": "Alloy Wheels",
        "Tyre Size": "90/100-10 Tubeless",
        "Lighting": "LED Projector Headlamp"
      },
      "Dimensions & Utility": {
        "Kerb Weight": "68 kg",
        "Carrying Capacity": "160 kg",
        "Ground Clearance": "170 mm",
        "Under-seat Storage": "19 Litres"
      }
    }
  }
];
