const fs = require('fs');
const files = fs.readdirSync('./Images').filter(f => f.endsWith('.jpeg'));

const brandsModels = {
    AlfaRomeo: ['Giulia', 'Stelvio'],
    AstonMartin: ['Vantage', 'DB11'],
    Audi: ['A3', 'A4', 'Q5', 'Q7'],
    Bentley: ['Continental', 'Bentayga'],
    BMW: ['1 Series', '3 Series', 'X3', 'X5'],
    Citroen: ['C3', 'C4'],
    Cupra: ['Formentor', 'Leon'],
    Dacia: ['Duster', 'Sandero'],
    DS: ['DS 3', 'DS 7'],
    Fiat: ['500', 'Panda'],
    Ford: ['Fiesta', 'Focus', 'Puma', 'Kuga'],
    Honda: ['Civic', 'CR-V'],
    Hyundai: ['Tucson', 'i10', 'Kona', 'i20'],
    Jaguar: ['F-Pace', 'XE'],
    Jeep: ['Wrangler', 'Renegade'],
    Kia: ['Sportage', 'Picanto', 'Niro', 'Rio'],
    LandRover: ['Range Rover', 'Defender', 'Discovery'],
    Lexus: ['UX', 'NX', 'RX'],
    Mazda: ['CX-5', 'Mazda3'],
    MercedesBenz: ['C-Class', 'E-Class', 'A-Class', 'GLA'],
    MG: ['HS', 'ZS'],
    MINI: ['Hatch', 'Countryman'],
    Mitsubishi: ['Outlander', 'L200'],
    Nissan: ['Qashqai', 'Juke', 'Micra', 'Leaf'],
    Peugeot: ['208', '2008', '3008', '108'],
    Polestar: ['Polestar 2'],
    Porsche: ['911', 'Cayenne', 'Macan'],
    Renault: ['Clio', 'Captur'],
    Seat: ['Ibiza', 'Ateca'],
    Skoda: ['Octavia', 'Fabia'],
    Suzuki: ['Swift', 'Vitara'],
    Tesla: ['Model 3', 'Model Y'],
    Toyota: ['Yaris', 'Aygo', 'Corolla', 'Camry', 'RAV4'],
    Vauxhall: ['Corsa', 'Astra', 'Mokka'],
    Volkswagen: ['Golf', 'Polo', 'Tiguan', 'Passat'],
    Volvo: ['XC40', 'XC60', 'XC90']
};

function parseCar(str) {
   let b = 'Unknown';
   let m = 'Unknown';
   for (let key of Object.keys(brandsModels)) {
       let l = key.toLowerCase();
       if (l === 'landrover') l = 'land_rover';
       if (l === 'mercedesbenz') l = 'mercedes-benz';
       if (l === 'alfaromeo') l = 'alfa_romeo';
       if (l === 'astonmartin') l = 'aston_martin';
       if (l === 'kgm') l = 'kgm___ssangyong'; // there is one like that
       if (str.startsWith(l)) {
           b = key.replace(/([A-Z])/g, ' $1').trim().replace('Mercedes Benz', 'Mercedes-Benz');
           let modelStr = str.substring(l.length);
           if (modelStr.startsWith('_')) modelStr = modelStr.substring(1);
           m = modelStr.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
           return {b, m};
       }
   }
   let w = str.split('_');
   b = w[0].charAt(0).toUpperCase() + w[0].slice(1);
   m = w.slice(1).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
   return {b, m};
}

const colors = ['Black', 'Blue', 'Brown', 'Gold', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow', 'Unknown'];

const items = files.map(f => {
  // e.g. "2007_jaguar_xj_series-pic-4155628460472991600-1024x768  gold.jpeg"
  const match = f.match(/^(\d{4})_([a-z0-9_\-]+)-pic-[a-z0-9\-]+?(?:\s+([a-zA-Z]+)\s*)?\.jpeg$/i);
  if (!match) return null;
  const year = parseInt(match[1]);
  const nameParts = parseCar(match[2]);
  let colorStr = match[3] ? match[3].charAt(0).toUpperCase() + match[3].slice(1).toLowerCase() : 'Unknown';
  if(!colors.includes(colorStr)) colorStr = 'Unknown'; // Fallback
  
  return {
    year,
    brand: nameParts.b,
    model: nameParts.m,
    color: colorStr,
    image: 'Images/' + f
  }
}).filter(x => x);

fs.writeFileSync('parsed_images.json', JSON.stringify(items, null, 2));
console.log('Parsed ' + items.length + ' base configurations');
