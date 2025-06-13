// This script helps ensure proper deployment on Vercel
const fs = require('fs');
const path = require('path');

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(process.cwd(), '.nojekyll'), '');

// Ensure the out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Create a _redirects file for Netlify/Vercel (fallback routing)
fs.writeFileSync(
  path.join(outDir, '_redirects'),
  '/* /index.html 200'
);

console.log('Deployment preparation complete!'); 