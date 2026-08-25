const fs = require('fs');

const scootersJsonPath = './data/scooters.json';
const scootersJsPath = './js/scooters-data.js';

let data = JSON.parse(fs.readFileSync(scootersJsonPath, 'utf8'));

// 1. Remove "Urban " from product names
data.forEach(scooter => {
  if (scooter.name.startsWith('Urban ')) {
    scooter.name = scooter.name.replace('Urban ', '');
  }
});

// Helper to deep copy a scooter
function copyScooter(sourceName, newId, newName) {
  const source = data.find(s => s.name === sourceName || s.name === `Urban ${sourceName}`);
  if (!source) {
      console.log(`Source ${sourceName} not found!`);
      return null;
  }
  const newScooter = JSON.parse(JSON.stringify(source));
  newScooter.id = newId;
  newScooter.name = newName;
  newScooter.description = newScooter.description.replace(source.name, newName).replace(`Urban ${source.name}`, newName);
  return newScooter;
}

// 2. Add new products
const newModels = [
  { source: 'Destiny', id: 'i-cruze', name: 'I cruze' },
  { source: 'Destiny', id: 'raptor-2-0', name: 'Raptor 2.0' },
  { source: 'Fusion', id: 'symphony', name: 'Symphony' },
  { source: 'Destiny', id: 'despro', name: 'Despro' }
];

newModels.forEach(model => {
  const newScooter = copyScooter(model.source, model.id, model.name);
  if (newScooter) {
    data.push(newScooter);
  }
});

fs.writeFileSync(scootersJsonPath, JSON.stringify(data, null, 2));

const jsContent = `/**
 * NJ MOTORS - Centralized Scooter Data Store
 * Provides instant synchronous availability for file:// and offline environments,
 * while matching data/scooters.json exactly.
 * Product data based on authentic Urban eBikes lineup (urbanebikes.in).
 * Dual Battery Architecture: Lithium Battery (Smart BMS, Fast Charge, 3-Yr Warranty) & Graphene Battery (1-Yr Warranty).
 */

window.SCOOTERS_DATA = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(scootersJsPath, jsContent);

console.log('Update complete.');
