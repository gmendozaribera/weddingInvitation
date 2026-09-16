// Exporta index.html a PDF: abre el sobre, espera animaciones/imagenes,
// y captura todo el contenido como una sola pagina continua (sin cortes).
//
// Uso: node scripts/export-to-pdf.js [archivo-salida.pdf]

const path = require('path');
const http = require('http');
const fs = require('fs');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.resolve(ROOT, process.argv[2] || 'invitacion-marizol-german.pdf');

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg',
  '.ico': 'image/x-icon',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(ROOT, reqPath);
      if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); return res.end('Not found'); }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

(async () => {
  const server = await startServer();
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}/`;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 448, height: 900 }, deviceScaleFactor: 2 });

  await page.goto(url, { waitUntil: 'networkidle' });

  // Abrir el sobre (mismo evento que dispara invitation.js)
  await page.click('#intro-overlay');
  await page.waitForTimeout(1100); // espera la animacion (750ms) + margen

  // Ocultar controles que no tienen sentido en un PDF estatico
  await page.evaluate(() => {
    const hide = (sel) => { const el = document.querySelector(sel); if (el) el.style.display = 'none'; };
    hide('#bottom-controls');
    document.querySelectorAll('button').forEach((b) => {
      if (b.querySelector('svg.lucide-palette')) b.closest('div.pointer-events-none')?.style.setProperty('display', 'none');
    });
  });

  await page.waitForTimeout(300);

  const height = await page.evaluate(() => document.body.scrollHeight);

  await page.pdf({
    path: OUT,
    printBackground: true,
    width: '448px',
    height: `${height}px`,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });

  await browser.close();
  server.close();

  console.log('PDF generado en:', OUT);
})().catch((err) => {
  console.error('Error exportando PDF:', err);
  process.exit(1);
});
