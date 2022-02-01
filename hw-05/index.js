/**
 * createServer metodunu kullanacağız.
 *  index, hakkimda ve iletisim sayfaları oluşturalım.
 * Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
 * port numarası olarak 5000'i kullanalım.
 */

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>index Sayfasi<h1>");
      break;
    case "/hakkimizda":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>hakkimizda Sayfasi<h1>");
      break;
    case "/iletisim":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>iletisim Sayfasi<h1>");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 sayfa bulunamadi<h1>");
      break;
  }
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalşıyor`);
});
