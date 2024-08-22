const fs = require('fs');
const path = require('path');
const redirects = {
  '/wifi-login': 'https://play.google.com/store/apps/details?id=dev.sparshg.bitslogin',
  '/block-game': 'https://sparshg.itch.io/the-block-game',
  '/sms': 'https://play.google.com/store/apps/details?id=com.cc.sms_2023_cc',
  '/map-hackathon': 'https://sparshg.dev/blogs/map-hackathon',
};

const outputDir = path.resolve(__dirname, 'build');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (const [pathname, url] of Object.entries(redirects)) {
  const filePath = path.join(outputDir, `${pathname === '/' ? 'index' : pathname}.html`);
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=${url}" />
  <title>Redirecting...</title>
</head>
<body>
  <p>If you are not redirected, <a href="${url}">click here</a>.</p>
</body>
</html>`;
  fs.writeFileSync(filePath, htmlContent);
  console.log(filePath);
}

console.log('Redirect HTML files generated successfully.');
