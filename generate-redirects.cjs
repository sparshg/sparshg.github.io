const fs = require('fs');
const path = require('path');
const redirects = {
  '/wifi-login': 'https://github.com/sparshg/wifi-login',
  '/block-game': 'https://github.com/sparshg/block-game',
  '/sms': 'https://play.google.com/store/apps/details?id=com.cc.sms_2023_cc',
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
