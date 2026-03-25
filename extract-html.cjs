const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to local server...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  console.log('Scrolling to trigger lazy loads and animations...');
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 200;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight + 1000) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
    // Scroll back up to normal state
    window.scrollTo(0, 0);
  });
  
  console.log('Waiting for animations to settle...');
  await page.waitForTimeout(2000);

  console.log('Extracting root HTML...');
  const rootHtml = await page.evaluate(() => {
    const root = document.getElementById('root');
    if(!root) return document.body.innerHTML; 
    // Clone to remove unwanted tags without affecting actual page
    const clone = root.cloneNode(true);
    const scripts = clone.querySelectorAll('script');
    scripts.forEach(s => s.remove());
    return clone.innerHTML;
  });

  const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IIIP - Modern Hiring</title>
    <!-- Basic Fonts from Google Fonts if needed -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
</head>
<body class="font-sans antialiased text-gray-900 bg-[#0B051A] selection:bg-[#7c3aed] selection:text-white">
    <div id="root">${rootHtml}</div>
    <script src="script.js"></script>
</body>
</html>`;

  fs.mkdirSync('html-version', { recursive: true });
  fs.writeFileSync('html-version/index.html', finalHtml);
  
  await browser.close();
  console.log('HTML extraction complete - created html-version/index.html');
})();
