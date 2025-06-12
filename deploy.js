// This script helps ensure proper deployment on Vercel
const fs = require('fs');
const path = require('path');

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(process.cwd(), '.nojekyll'), '');

console.log('Deployment preparation complete!'); 