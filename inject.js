const fs = require('fs');

const rawJson = fs.readFileSync('parsed_images.json', 'utf8');
const replacement = `
const parsedImageData = ${rawJson};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const cars = [];
let carId = 1;

parsedImageData.forEach(data => {
    let carFeatures = [];
    let numFeatures = Math.floor(Math.random() * 8) + 3;
    for(let f=0; f<numFeatures; f++) {
        let feat = getRandomItem(featuresList);
        if(!carFeatures.includes(feat)) carFeatures.push(feat);
    }
    
    let isUsed = Math.random() > 0.3;

    cars.push({
        id: carId++,
        brand: data.brand,
        make: data.brand,
        model: data.model,
        price: Math.floor(Math.random() * 95000) + 500,
        mileage: Math.floor(Math.random() * 150000),
        year: data.year,
        colour: data.color === 'Unknown' ? getRandomItem(coloursList) : data.color,
        drivetrain: getRandomItem(drivetrains),
        gearbox: getRandomItem(gearboxes),
        bodySize: getRandomItem(bodySizes),
        cabinSize: getRandomItem(cabinSizes),
        bedSize: getRandomItem(bedSizes),
        fuelType: getRandomItem(fuelTypes),
        engineSize: parseFloat(getRandomItem(engineSizes)),
        co2Emissions: Math.floor(Math.random() * 530),
        insuranceGroup: getRandomItem(insuranceGroups),
        approvedUsed: isUsed ? 'Approved used' : 'New',
        features: carFeatures,
        seats: getRandomItem(seatCapacities),
        doors: getRandomItem(doorsCount),
        rating: getRandomItem(ratings),
        hasPhotos: true,
        history: Math.random() > 0.9 ? 'Accidents reported' : 'Clear',
        daysOnMarket: Math.floor(Math.random() * 1000) + 1,
        fuelEconomy: Math.floor(Math.random() * 445) + 4, 
        priceDrops: Math.random() > 0.8,
        sellerType: getRandomItem(sellerTypes),
        commercialUse: Math.random() > 0.8,
        ulez: Math.random() > 0.2,
        image: data.image,
        deliveryAvailable: Math.random() > 0.5 ? 'Yes' : 'No',
        interior: carFeatures.includes('Leather seats') ? 'Leather' : 'Cloth',
        availability: getRandomItem(['In Stock', '1-2 Weeks']),
        delivery: getRandomItem(['Standard Delivery', 'Next-Day Delivery', 'Click & Collect'])
    });
});
`;

let content = fs.readFileSync('script.js', 'utf8');
const lines = content.split('\n');
const startIndex = lines.findIndex(l => l.startsWith('const images = ['));
const endIndex = lines.findIndex(l => l.startsWith('// Shuffle cars array'));

if(startIndex > -1 && endIndex > -1) {
    lines.splice(startIndex, endIndex - startIndex, replacement);
    fs.writeFileSync('script.js', lines.join('\n'));
    console.log('Successfully injected cars into script.js');
} else {
    console.log('Failed to find start/end indexes');
}
