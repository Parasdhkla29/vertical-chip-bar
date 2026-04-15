const fs = require('fs');
const files = fs.readdirSync('./Images')
    .filter(f => f.endsWith('.jpg'));
// Shuffle images to make it look random but deterministic
for (let i = files.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [files[i], files[j]] = [files[j], files[i]];
}

let js = fs.readFileSync('./script.js', 'utf8');
const jsonArray = JSON.stringify(files.map(f => 'Images/' + f));
js = js.replace(/const images = \[[\s\S]*?\];/, `const images = ${jsonArray};`);
fs.writeFileSync('./script.js', js, 'utf8');
console.log('Updated script.js with ' + files.length + ' image paths.');
