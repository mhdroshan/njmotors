/**
 * NJ MOTORS - Centralized Scooter Data Store
 * Provides instant synchronous availability for file:// and offline environments,
 * while matching data/scooters.json exactly.
 * Product data based on authentic Urban eBikes lineup (urbanebikes.in).
 */

window.SCOOTERS_DATA = [
  {
    "id": "urban-legend",
    "name": "Urban Legend",
    "tagline": "The Everyday Smart City Rider",
    "category": "Daily Commute",
    "badge": "Best Seller",
    "price": "₹54,999",
    "numericPrice": 54999,
    "range": "75 - 85 km",
    "rangeKm": 85,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion (Smart BMS)",
    "batteryCapacity": "60V 24Ah Advanced Lithium / Lead-Acid",
    "motor": "BLDC Hub Motor (Waterproof High-Torque)",
    "chargingTime": "3.5 - 4 Hours",
    "brakes": "Front Disc / Rear Drum with E-ABS",
    "tyres": "90/100-10 Tubeless All-Weather Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Legend is engineered for college students and everyday city commuters. Featuring smart wireless control, exceptional energy efficiency, front disc braking, and an ultra-comfortable ergonomic ride with zero registration paperwork.",
    "colors": [
      { "name": "Royal Maroon", "hex": "#881337", "image": "assets/images/legend-maroon.png" },
      { "name": "Ocean Blue", "hex": "#1d4ed8", "image": "assets/images/legend-blue.png" },
      { "name": "Titanium Grey", "hex": "#64748b", "image": "assets/images/falcon-grey.png" },
      { "name": "Racing Yellow", "hex": "#eab308", "image": "assets/images/y1.png" }
    ],
    "features": [
      "Keyless Entry & Smart Remote Start",
      "Anti-Theft Alarm with Motor Lock",
      "USB Mobile Charging Socket",
      "Cruise Control System",
      "Reverse Gear Assist for Easy Parking",
      "3-Speed Riding Modes (Eco / City / Turbo)",
      "Up to 3-Year Comprehensive Warranty",
      "Zero RTO Registration & No License Needed"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h (Govt. Approved Non-RTO)",
        "Certified Range": "85 km per charge",
        "Motor Type": "BLDC Hub Motor (Waterproof High-Torque)",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability / Climb": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "60V 24Ah Advanced Lithium-ion / Lead-Acid",
        "Battery Placement": "Portable Detachable Under-seat",
        "Charging Time": "3.5 - 4 Hours to 100%",
        "Charger Type": "Smart Micro-controller with Auto-cut",
        "Power Consumption": "~1.2 Units per Full Charge (approx. ₹8)"
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
    "name": "Urban Fusion",
    "tagline": "Fusion Of Power & Passion",
    "category": "Sport & Style",
    "badge": "Popular",
    "price": "₹58,499",
    "numericPrice": 58499,
    "range": "80 - 90 km",
    "rangeKm": 90,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion (Smart BMS)",
    "batteryCapacity": "60V 26Ah Smart Lithium-ion / Lead-Acid",
    "motor": "BLDC Hub Motor (High Efficiency)",
    "chargingTime": "3.5 - 4 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Anti-Skid Tubeless",
    "payload": "165 kg",
    "weight": "70 kg",
    "groundClearance": "175 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Fusion blends stylish dynamic body styling with reliable electric engineering. Engineered with 3 speed modes, USB connectivity, cruise control, and keyless ignition for an exciting commute.",
    "colors": [
      { "name": "Crimson Red", "hex": "#dc2626", "image": "assets/images/fusion-red.png" },
      { "name": "Midnight Blue", "hex": "#1e3a8a", "image": "assets/images/legend-blue.png" },
      { "name": "Steel Grey", "hex": "#475569", "image": "assets/images/falcon-grey.png" },
      { "name": "Sunset Yellow", "hex": "#eab308", "image": "assets/images/y1.png" }
    ],
    "features": [
      "Keyless Entry System with Smart Key",
      "Anti-Theft Alarm Protection with Motor Cut-off",
      "USB Mobile Phone Fast Charger",
      "Cruise Control for Smooth Cruising",
      "Reverse Assist Gear",
      "3 Speed Selectable Drive Modes",
      "Up to 3-Year Quality Warranty",
      "Telescopic Front & Hydraulic Rear Suspension"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h (Govt. Approved Non-RTO)",
        "Certified Range": "90 km per charge",
        "Motor Type": "BLDC Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "13 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "60V 26Ah Smart BMS Lithium-ion / Lead Acid",
        "Battery Placement": "Detachable Under-seat",
        "Charging Time": "3.5 - 4 Hours",
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
    "name": "Urban Falcon",
    "tagline": "Swift, Agile & Aerodynamic Flight",
    "category": "Commuter",
    "badge": "Customer Choice",
    "price": "₹56,999",
    "numericPrice": 56999,
    "range": "80 - 90 km",
    "rangeKm": 90,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion (Smart BMS)",
    "batteryCapacity": "60V 26Ah Smart Lithium / Lead Acid",
    "motor": "BLDC Hub Motor",
    "chargingTime": "3.5 - 4 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless",
    "payload": "165 kg",
    "weight": "69 kg",
    "groundClearance": "175 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Falcon is crafted with sharp aerodynamic contours and swift acceleration for effortless daily commuting across busy town roads with zero petrol consumption.",
    "colors": [
      { "name": "Slate Grey", "hex": "#64748b", "image": "assets/images/falcon-grey.png" },
      { "name": "Pearl White", "hex": "#f8fafc", "image": "assets/images/optima-white.png" },
      { "name": "Deep Maroon", "hex": "#881337", "image": "assets/images/legend-maroon.png" },
      { "name": "Electric Blue", "hex": "#2563eb", "image": "assets/images/legend-blue.png" }
    ],
    "features": [
      "Keyless Entry with Push Start",
      "Smart Anti-Theft Alarm System",
      "USB Fast-Charging Port for Mobile",
      "Cruise Control Function",
      "Reverse Gear Capability",
      "3-Speed Performance Modes",
      "Up to 3-Year Warranty",
      "Alloy Wheels with Tubeless Tyres"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range": "90 km per charge",
        "Motor Power": "BLDC High Efficiency Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "13 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "60V 26Ah Smart Lithium / Lead-Acid",
        "Battery Placement": "Detachable Under-seat",
        "Charging Time": "3.5 - 4 Hours",
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
    "name": "Urban Optima",
    "tagline": "The Optimus Speed & Efficiency",
    "category": "Efficiency / Value",
    "badge": "Top Value",
    "price": "₹53,999",
    "numericPrice": 53999,
    "range": "75 - 85 km",
    "rangeKm": 85,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion",
    "batteryCapacity": "48V / 60V 24Ah Battery",
    "motor": "BLDC Hub Motor",
    "chargingTime": "3.5 - 4 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "155 kg",
    "weight": "67 kg",
    "groundClearance": "170 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Optima delivers maximum cost-efficiency, smooth low-drag acceleration, and everyday reliability with minimal operating costs under ₹0.15/km.",
    "colors": [
      { "name": "Metallic Maroon", "hex": "#881337", "image": "assets/images/optima-maroon.png" },
      { "name": "Glossy White", "hex": "#f8fafc", "image": "assets/images/optima-white.png" },
      { "name": "Ocean Blue", "hex": "#1d4ed8", "image": "assets/images/legend-blue.png" },
      { "name": "Titanium Grey", "hex": "#64748b", "image": "assets/images/falcon-grey.png" }
    ],
    "features": [
      "Keyless Smart Entry",
      "Anti-Theft Warning Siren",
      "USB Fast-Charge Port",
      "Cruise Control System",
      "Reverse Mode for Easy Manoeuvring",
      "3-Speed Power Modes",
      "Up to 3-Year Warranty",
      "Low Running Cost (~₹8 per 80 km)"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range": "85 km per charge",
        "Motor Power": "BLDC Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "48V/60V 24Ah Lead Acid / Lithium-ion",
        "Battery Placement": "Detachable Pack",
        "Charging Time": "3.5 - 4 Hours",
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
    "name": "Urban Phantom",
    "tagline": "The Speed Of Phantom",
    "category": "Premium Commute",
    "badge": "Flagship",
    "price": "₹63,999",
    "numericPrice": 63999,
    "range": "90 - 100 km",
    "rangeKm": 100,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion (60V/72V)",
    "batteryCapacity": "60V / 72V 30Ah High-Performance Pack",
    "motor": "BLDC High-Torque Hub Motor",
    "chargingTime": "4 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-12 Large Tubeless Tyres",
    "payload": "175 kg",
    "weight": "72 kg",
    "groundClearance": "180 mm",
    "warranty": "Up to 3 Years Comprehensive Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Phantom delivers imposing road presence, 12-inch oversized alloy wheels for effortless road stability, colored digital instrumentation, and a 60/72V dual-voltage capable controller.",
    "colors": [
      { "name": "Glacier White", "hex": "#ffffff", "image": "assets/images/phantom-white.png" },
      { "name": "Royal Blue", "hex": "#1e40af", "image": "assets/images/phantom-blue.png" },
      { "name": "Matte Titanium Grey", "hex": "#4b5563", "image": "assets/images/phantom-grey.png" },
      { "name": "Solar Yellow", "hex": "#eab308", "image": "assets/images/y1.png" }
    ],
    "features": [
      "Keyless Entry & Remote Push-Button Start",
      "Anti-Theft Alarm with Wheel Lock",
      "Colored Digital Multi-Function Display",
      "USB Fast-Charging Port",
      "Large 12-inch Alloy Wheels for High Ground Clearance",
      "Reverse Gear Assistance",
      "3-Speed Drive Modes",
      "Up to 3-Year Warranty"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range": "100 km per charge",
        "Motor Power": "BLDC High Torque Hub Motor",
        "Controller": "60/72V Smart Wireless Controller",
        "Gradeability": "15 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "60V / 72V 30Ah Lead Acid / Lithium-ion",
        "Battery Placement": "Central Weight-Balanced Under-seat",
        "Charging Time": "3.5 - 4 Hours",
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
    "name": "Urban Phantom+",
    "tagline": "Feel The Wild Speed",
    "category": "Extended Performance",
    "badge": "Max Range",
    "price": "₹68,999",
    "numericPrice": 68999,
    "range": "100 - 110 km",
    "rangeKm": 110,
    "topSpeed": "25 km/h",
    "batteryType": "60V/72V Dual-Ready Lithium-ion",
    "batteryCapacity": "72V 32Ah Advanced Lithium / Lead-Acid",
    "motor": "BLDC Heavy Duty Hub Motor",
    "chargingTime": "4 - 4.5 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-12 Extra-Grip Tubeless",
    "payload": "180 kg",
    "weight": "74 kg",
    "groundClearance": "180 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "The Phantom+ is the extended-range evolution of the Phantom lineup, packing 72V dual-voltage support, 110km certified single-charge range, and plush long-distance seating.",
    "colors": [
      { "name": "Cyber Cyan", "hex": "#0284c7", "image": "assets/images/phantom-plus.png" },
      { "name": "Matte Titanium Grey", "hex": "#4b5563", "image": "assets/images/phantom-grey.png" },
      { "name": "Glacier White", "hex": "#ffffff", "image": "assets/images/phantom-white.png" },
      { "name": "Royal Blue", "hex": "#1e40af", "image": "assets/images/phantom-blue.png" }
    ],
    "features": [
      "Extended 110 KM Range for Inter-City Rides",
      "Keyless Smart Entry & Engine Push Start",
      "Anti-Theft Alarm with Motion Sensor",
      "Colored High-Resolution Digital Dashboard",
      "USB Fast Phone Charging Port",
      "12-Inch Tubeless Alloy Wheel System",
      "Reverse Gear & 3-Speed Modes",
      "Up to 3-Year Comprehensive Warranty"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range": "110 km per charge",
        "Motor Power": "BLDC Heavy-Duty Hub Motor",
        "Controller": "60/72V Smart Wireless Controller",
        "Gradeability": "15 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "72V 32Ah High-Energy Density Lithium / Lead-Acid",
        "Battery Placement": "Detachable Pack",
        "Charging Time": "4 - 4.5 Hours",
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
    "name": "Urban Phantom Gen I",
    "tagline": "The Original Power Pioneer",
    "category": "Heritage / Sport",
    "badge": "Gen I Icon",
    "price": "₹65,999",
    "numericPrice": 65999,
    "range": "95 - 105 km",
    "rangeKm": 105,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion",
    "batteryCapacity": "60V / 72V 30Ah Lithium Pack",
    "motor": "BLDC High-Efficiency Hub Motor",
    "chargingTime": "4 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-12 Tubeless Tyres",
    "payload": "175 kg",
    "weight": "73 kg",
    "groundClearance": "180 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Phantom Gen I features iconic sport decals, colored smart display, 12-inch wheels, and robust suspension engineered for superior performance on all Indian road conditions.",
    "colors": [
      { "name": "Stealth Carbon Black", "hex": "#18181b", "image": "assets/images/phantom-gen-i.png" },
      { "name": "Pearl White", "hex": "#ffffff", "image": "assets/images/phantom-white.png" },
      { "name": "Royal Blue", "hex": "#1e40af", "image": "assets/images/phantom-blue.png" },
      { "name": "Titanium Grey", "hex": "#4b5563", "image": "assets/images/phantom-grey.png" }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft Alarm System",
      "Colored Digital Cockpit Display",
      "USB Mobile Charging Socket",
      "Large 12-inch Alloy Wheels",
      "Reverse Gear Drive Assist",
      "3-Speed Power Selection",
      "Up to 3-Year Manufacturer Warranty"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range": "105 km per charge",
        "Motor Power": "BLDC High-Efficiency Hub Motor",
        "Controller": "60/72V Smart Wireless Controller",
        "Gradeability": "14 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "60V / 72V 30Ah Lithium-ion / Lead-Acid",
        "Battery Placement": "Removable Pack",
        "Charging Time": "3.5 - 4 Hours",
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
    "name": "Urban Destiny",
    "tagline": "Comfortable Elegance For Everyday Travel",
    "category": "Comfort & Family",
    "badge": "Family Choice",
    "price": "₹55,499",
    "numericPrice": 55499,
    "range": "80 - 85 km",
    "rangeKm": 85,
    "topSpeed": "25 km/h",
    "batteryType": "Lead Acid / Li-ion (Detachable)",
    "batteryCapacity": "60V 24Ah Smart Lithium / Lead-Acid",
    "motor": "BLDC Smooth-Torque Hub Motor",
    "chargingTime": "3.5 - 4 Hours",
    "brakes": "Front Disc / Rear Drum",
    "tyres": "90/100-10 Tubeless Tyres",
    "payload": "160 kg",
    "weight": "68 kg",
    "groundClearance": "170 mm",
    "warranty": "Up to 3 Years Warranty",
    "licenseRequired": "No Driving License Required (CMVR Non-RTO)",
    "description": "Urban Destiny combines elegant curves, plush dual-density seating, deep under-seat boot space, and smart keyless security for an effortless family riding experience.",
    "colors": [
      { "name": "Ruby Red", "hex": "#b91c1c", "image": "assets/images/destiny-red.png" },
      { "name": "Ocean Blue", "hex": "#1d4ed8", "image": "assets/images/legend-blue.png" },
      { "name": "Metallic Grey", "hex": "#64748b", "image": "assets/images/falcon-grey.png" },
      { "name": "Pearl White", "hex": "#ffffff", "image": "assets/images/optima-white.png" }
    ],
    "features": [
      "Keyless Entry & Remote Start",
      "Anti-Theft System with Alert Buzzer",
      "USB Mobile Fast-Charging Socket",
      "Cruise Control for Fatigue-Free Cruising",
      "Reverse Assist Gear",
      "3-Speed Electronic Throttle Modes",
      "Extra Padded Ergonomic Cushion Seat",
      "Up to 3-Year Comprehensive Warranty"
    ],
    "specs": {
      "Performance": {
        "Top Speed": "25 km/h",
        "Certified Range": "85 km per charge",
        "Motor Power": "BLDC Smooth-Torque Hub Motor",
        "Controller": "48/60V Smart Wireless Controller",
        "Gradeability": "12 Degrees"
      },
      "Battery & Electricals": {
        "Battery Technology": "60V 24Ah Smart Lithium / Lead-Acid",
        "Battery Placement": "Detachable Under-seat",
        "Charging Time": "3.5 - 4 Hours",
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
