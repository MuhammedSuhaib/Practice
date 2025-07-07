const path = require('path');
                        //(code/path.js,go a step back,into the output folder,into the file Synchronous.txt)
const samplePath = path.join(__dirname, '..', 'output', 'Synchronous.txt');

console.log('Path practice ✅');
console.log('📂 Full Path:', samplePath);
console.log('📄 File Name:', path.basename(samplePath));
console.log('📁 Directory:', path.dirname(samplePath));
console.log('🧩 Extension:', path.extname(samplePath));
console.log('📍 Absolute:', path.resolve(samplePath));
//  Why it's useful:
// Cross-platform: works on Windows, Mac, Linux

// Avoids bugs: no need to write "../output/Synchronous.txt" manually (slashes vary by OS)