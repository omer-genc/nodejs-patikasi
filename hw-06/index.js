/**
 * koa paketini indirelim.
 * index, hakkimda ve iletisim sayfaları oluşturalım.
 * Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
 * port numarası olarak 3000'i kullanalım.
 *
 */

const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  switch (ctx.path) {
    case "/":
      indexPage(ctx);
      break;
    case "/aboutus":
      aboutUs(ctx);
      break;
    case "/contact":
      ctx.body = "<h1>Iletisim syafasi</h1>";
      break;
    default:
      ctx.body = "<h1>404 not found</h1>";
      break;
  }
});

function indexPage(ctx) {
  ctx.body = "<h1>index page</h1>";
}
function aboutUs(ctx) {
  ctx.body = "<h1>Hakkimizda sayfasi</h1>";
}

app.listen(3000);
