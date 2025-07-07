const fs = require('fs').promises;

async function run() {
  try {
    console.log('Start 📝');

    // Write
    await fs.writeFile('output/example.txt', '⛈🌧!!');
    console.log('write done ✅');

    // Read (raw buffer)
    console.log('reading mode (UNREADABLE)');
    const buffer = await fs.readFile('output/example.txt');
    console.log('non err', buffer);

    // Read (readable)
    console.log('reading mode (READABLE)');
    const content = await fs.readFile('output/example.txt', 'utf-8');
    console.log('non err\n', content, '\n', '-x-'.repeat(9));

    // Append
    console.log('append mode');
    await fs.appendFile('output/example.txt', '\n\n🍕☕🍵🧉🍽');
    console.log('append done 🍽');

  } catch (err) {
    console.error('❌ Error:', err);
  }
}

run();
