const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma_clean.json', 'utf8'));
const home = data.nodes['0:1'].document.children.find(c => c.id === '1:2826');
const heading = home.children.find(c => c.id === '1:2831');
console.log(JSON.stringify(heading, null, 2));
