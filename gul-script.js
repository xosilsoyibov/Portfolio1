/* ==========================================================
   HAR BIR DO'KON UCHUN FAQAT SHU QISMNI O'ZGARTIRASIZ (SHOP)
   ========================================================== */
const SHOP = {
  name: "Gul Olami",
  telegram: "Tadbirkor_0703",            // @ belgisiz
  phone: "+998200027668",
  phoneText: "+998 20 002 76 68",
  map: "https://maps.google.com/?q=Chilonzor+Toshkent",

  // Do'konga xos matnlar, ikki tilda
  text: {
    uz: {
      heroTag: "🌸 Shahar bo'ylab yetkazib berish",
      heroTitle: "Har bir lahzaga mos gullar",
      heroText: "Yangi gullar va chiroyli buketlar. Tanlang, buyurtma bering, biz eshigingizgacha yetkazamiz.",
      address: "Toshkent, Chilonzor tumani",
      hours: "Har kuni 07:00 - 09:00||14:00 - 02:00",
      stats: [
        { num: "1-2 soat", label: "yetkazish vaqti" },
        { num: "100%", label: "yangi gullar" },
        { num: "Har kuni", label: "ishlaymiz" }
      ]
    },
    ru: {
      heroTag: "🌸 Доставка по городу",
      heroTitle: "Цветы для каждого момента",
      heroText: "Свежие цветы и красивые букеты. Выбирайте, заказывайте — мы доставим до двери.",
      address: "Ташкент, Чиланзарский район",
      hours: "Ежедневно 07:00 - 09:00||14:00 - 02:00",
      stats: [
        { num: "1-2 часа", label: "время доставки" },
        { num: "100%", label: "свежие цветы" },
        { num: "Каждый день", label: "работаем" }
      ]
    }
  },

  // Kategoriyalarning ruscha nomi (kalit: o'zbekcha nom)
  categoriesRu: {
    "Atirgullar": "Розы",
    "Aralash": "Ассорти",
    "Lola va boshqalar": "Тюльпаны и другие",
    "Sovg'a to'plamlari": "Подарочные наборы"
  },

  products: [
    { id: "1", category: "Atirgullar", icon: "🌹", name: "Qizil atirgullar (11 ta)", desc: "Klassik qizil atirgullar, sovg'a qadog'ida.", price: 250000, oldPrice: 290000, badge: "Mashhur", image: "images/atirgul-11.jpg",
      ru: { name: "Красные розы (11 шт.)", desc: "Классические красные розы в подарочной упаковке.", badge: "Хит" } },
    { id: "2", category: "Atirgullar", icon: "🌹", name: "Pushti atirgullar (21 ta)", desc: "Nozik pushti rangli atirgullar buketi.", price: 420000, image: "images/atirgul-pushti.jpg",
      ru: { name: "Розовые розы (21 шт.)", desc: "Нежный букет из розовых роз." } },
    { id: "3", category: "Aralash", icon: "💐", name: "Aralash buket", desc: "Mavsumiy gullardan rang-barang buket.", price: 180000, image: "images/aralash-buket.jpg",
      ru: { name: "Букет-ассорти", desc: "Разноцветный букет из сезонных цветов." } },
    { id: "4", category: "Aralash", icon: "🌸", name: "Bahor buketi", desc: "Yengil va xushbo'y bahor gullari.", price: 210000, badge: "Yangi", image: "images/bahor-buketi.jpg",
      ru: { name: "Весенний букет", desc: "Лёгкий и ароматный букет весенних цветов.", badge: "Новинка" } },
    { id: "5", category: "Lola va boshqalar", icon: "🌷", name: "Lola buketi (15 ta)", desc: "Yorqin lolalardan tayyorlangan buket.", price: 200000, image: "images/lola-buketi.jpg",
      ru: { name: "Букет тюльпанов (15 шт.)", desc: "Букет из ярких тюльпанов." } },
    { id: "6", category: "Lola va boshqalar", icon: "🌻", name: "Kungaboqar buketi", desc: "Quyoshdek iliq kayfiyat uchun.", price: 150000, image: "images/kungaboqar.jpg",
      ru: { name: "Букет подсолнухов", desc: "Тёплое солнечное настроение." } },
    { id: "7", category: "Sovg'a to'plamlari", icon: "🎁", name: "Buket + shokolad", desc: "Aralash buket va shokolad to'plami.", price: 260000, image: "images/buket-shokolad.jpg",
      ru: { name: "Букет + шоколад", desc: "Букет-ассорти и набор шоколада." } },
    { id: "8", category: "Sovg'a to'plamlari", icon: "🧸", name: "Buket + o'yinchoq", desc: "Buket va yumshoq ayiqcha sovg'a sifatida.", price: 290000, oldPrice: 320000, badge: "Chegirma", image: "images/buket-oyinchoq.jpg",
      ru: { name: "Букет + игрушка", desc: "Букет и мягкий мишка в подарок.", badge: "Скидка" } }
  ],

  // Sharhlar mijoz yozgan tilda ko'rinadi (tarjima qilinmaydi)
  reviews: [
    { name: "Abdulloh", stars: 5, text: "Sayt yangiligiga qaramay zo'r ishlayabdi" },
    { name: "Nilufar", stars: 5, text: "Gul do'konga foydasi tegadigan ish qilibsiz" },
    { name: "Sardor", stars: 5, text: "Menga yetib keldi rasmdagidan ham zo'r ekan" }
  ]
};

/* ==========================================================
   SAYT MATNLARI (umumiy, hamma do'konga bir xil)
   ========================================================== */
const UI = {
  uz: {
    nav_home: "Bosh sahifa", nav_catalog: "Buketlar", nav_features: "Afzalliklar", nav_reviews: "Sharhlar", nav_faq: "Savol-javob", nav_contact: "Aloqa",
    hero_catalog: "Buketlarni ko'rish", hero_tg: "Telegramda yozish",
    catalog_title: "Bizning buketlar",
    catalog_sub: "Tanlang, savatga qo'shing va buyurtmani Telegram orqali yuboring",
    all: "Hammasi",
    features_title: "Nega aynan biz",
    f1_t: "Tez yetkazish", f1_p: "Buyurtmani shu kunning o'zida, ko'pincha 1-2 soatda yetkazamiz.",
    f2_t: "Yangi gullar", f2_p: "Gullar har kuni yangilanadi, eskisi sotilmaydi.",
    f3_t: "Chiroyli qadoq", f3_p: "Har bir buket sovg'a qadog'ida, bepul.",
    f4_t: "Qulay buyurtma", f4_p: "Telegram orqali yozing, tez javob beramiz.",
    steps_title: "Qanday buyurtma beriladi",
    s1_t: "Buket tanlang", s1_p: "Katalogdan o'zingizga yoqqanini savatga qo'shing.",
    s2_t: "Ma'lumot yozing", s2_p: "Ism, telefon va manzilni kiriting.",
    s3_t: "Biz yetkazamiz", s3_p: "Buyurtma Telegram'ga tushadi, biz tasdiqlab yetkazamiz.",
    reviews_title: "Mijozlar fikri",
    rf_title: "Fikringizni qoldiring", rf_name: "Ismingiz", rf_text: "Fikringiz...", rf_send: "Fikrni yuborish",
    rf_note: "Fikringiz do'konga Telegram orqali yuboriladi va ko'rib chiqilgach saytga qo'yiladi.",
    faq_title: "Ko'p so'raladigan savollar",
    q1: "Yetkazib berish qancha turadi?", a1: "Narx manzilga qarab kelishiladi. Buyurtma berganingizda aniq aytamiz.",
    q2: "Buyurtmani oldindan berish mumkinmi?", a2: "Ha, sana va vaqtni izohga yozing, shunga tayyorlaymiz.",
    q3: "Qanday to'lanadi?", a3: "Naqd yoki karta orqali. Batafsil buyurtmani tasdiqlaganda kelishamiz.",
    q4: "Buketni o'zgartirish mumkinmi?", a4: "Albatta. Rang, gul turi yoki o'lchamni izohda yozing.",
    contact_title: "Bog'lanish", map_btn: "📍 Xaritada ochish",
    cart_title: "Savat", total: "Jami:",
    c_name: "Ismingiz", c_phone: "Telefon raqamingiz", c_addr: "Yetkazish manzili",
    c_note: "Izoh (sana, vaqt, tilak matni...)",
    checkout: "Telegram orqali buyurtma berish",
    add: "Savatga qo'shish",
    toast_added: "Savatga qo'shildi ✓",
    empty: "Savat hozircha bo'sh 🌸",
    toast_empty: "Avval savatga buket qo'shing",
    toast_fill: "Ism, telefon va manzilni yozing",
    toast_review: "Ism va fikrni yozing",
    toast_thanks: "Rahmat! Fikringiz yuborildi",
    sum: "so'm",
    title_tail: "Gullar yetkazib berish",
    footer: "© 2026 {name}. Barcha huquqlar himoyalangan.",
    hello: "Assalomu alaykum!",
    hello_q: "Assalomu alaykum! Savolim bor edi.",
    m_order: "Assalomu alaykum! Buyurtma bermoqchiman:",
    m_total: "Jami", m_name: "Ism", m_phone: "Telefon", m_addr: "Manzil", m_note: "Izoh",
        m_review: "⭐ Yangi fikr", m_rating: "Baho", m_opinion: "Fikr",
    photo_btn: "📷 Rasm tanlash", photo_saved: "Rasm saqlandi ✓",
    photo_full: "Xotira to'ldi, rasmni kichikroq tanlang", photo_bad: "Rasmni o'qib bo'lmadi",
    edit_note: "Tahrirlash rejimi: rasmlar faqat shu qurilmadagi brauzerda saqlanadi. Hammaga ko'rinishi uchun ⬇ bilan yuklab olib, images papkasiga qo'ying."
  },
  ru: {
    nav_home: "Главная", nav_catalog: "Букеты", nav_features: "Преимущества", nav_reviews: "Отзывы", nav_faq: "Вопросы", nav_contact: "Контакты",
    hero_catalog: "Смотреть букеты", hero_tg: "Написать в Telegram",
    catalog_title: "Наши букеты",
    catalog_sub: "Выберите, добавьте в корзину и отправьте заказ через Telegram",
    all: "Все",
    features_title: "Почему мы",
    f1_t: "Быстрая доставка", f1_p: "Доставляем в тот же день, чаще всего за 1-2 часа.",
    f2_t: "Свежие цветы", f2_p: "Цветы обновляются каждый день, залежавшиеся не продаём.",
    f3_t: "Красивая упаковка", f3_p: "Каждый букет в подарочной упаковке, бесплатно.",
    f4_t: "Удобный заказ", f4_p: "Напишите в Telegram, мы быстро ответим.",
    steps_title: "Как сделать заказ",
    s1_t: "Выберите букет", s1_p: "Добавьте понравившийся из каталога в корзину.",
    s2_t: "Укажите данные", s2_p: "Введите имя, телефон и адрес.",
    s3_t: "Мы доставим", s3_p: "Заказ придёт нам в Telegram, мы подтвердим и доставим.",
    reviews_title: "Отзывы клиентов",
    rf_title: "Оставьте свой отзыв", rf_name: "Ваше имя", rf_text: "Ваш отзыв...", rf_send: "Отправить отзыв",
    rf_note: "Отзыв придёт магазину в Telegram и появится на сайте после проверки.",
    faq_title: "Частые вопросы",
    q1: "Сколько стоит доставка?", a1: "Стоимость зависит от адреса. Точную сумму назовём при оформлении заказа.",
    q2: "Можно ли заказать заранее?", a2: "Да, укажите дату и время в комментарии, мы подготовим к этому сроку.",
    q3: "Как оплатить?", a3: "Наличными или картой. Подробности уточним при подтверждении заказа.",
    q4: "Можно ли изменить букет?", a4: "Конечно. Укажите цвет, вид цветов или размер в комментарии.",
    contact_title: "Контакты", map_btn: "📍 Открыть на карте",
    cart_title: "Корзина", total: "Итого:",
    c_name: "Ваше имя", c_phone: "Ваш номер телефона", c_addr: "Адрес доставки",
    c_note: "Комментарий (дата, время, текст открытки...)",
    checkout: "Заказать через Telegram",
    add: "В корзину",
    toast_added: "Добавлено в корзину ✓",
    empty: "Корзина пока пуста 🌸",
    toast_empty: "Сначала добавьте букет в корзину",
    toast_fill: "Укажите имя, телефон и адрес",
    toast_review: "Укажите имя и отзыв",
    toast_thanks: "Спасибо! Ваш отзыв отправлен",
    sum: "сум",
    title_tail: "Доставка цветов",
    footer: "© 2026 {name}. Все права защищены.",
    hello: "Здравствуйте!",
    hello_q: "Здравствуйте! У меня вопрос.",
    m_order: "Здравствуйте! Хочу сделать заказ:",
    m_total: "Итого", m_name: "Имя", m_phone: "Телефон", m_addr: "Адрес", m_note: "Комментарий",
        m_review: "⭐ Новый отзыв", m_rating: "Оценка", m_opinion: "Отзыв",
    photo_btn: "📷 Выбрать фото", photo_saved: "Фото сохранено ✓",
    photo_full: "Память заполнена, выберите фото поменьше", photo_bad: "Не удалось прочитать фото",
    edit_note: "Режим редактирования: фото сохраняются только в браузере этого устройства. Чтобы их видели все, скачайте через ⬇ и положите в папку images."
  }
};
/* ---------- Til ---------- */
let lang = "uz";
try {
  const saved = localStorage.getItem("lang");
  if (saved === "uz" || saved === "ru") lang = saved;
} catch (err) {}

/* ---------- Sahifalar ---------- */
const PAGES = ["home", "catalog", "features", "reviews", "faq", "contact"];
let currentPage = "home";

/* ---------- Yordamchi funksiyalar ---------- */
const $ = (id) => document.getElementById(id);
const t = (key) => (UI[lang] && UI[lang][key]) || UI.uz[key] || key;
const shopText = () => SHOP.text[lang] || SHOP.text.uz;
const pf = (p, field) => (lang === "ru" && p.ru && p.ru[field]) || p[field];
const catName = (c) => (lang === "ru" && SHOP.categoriesRu[c]) || c;
const byId = (id) => SHOP.products.find((p) => String(p.id) === String(id));
const money = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + t("sum");
const tgLink = (text) => "https://t.me/" + SHOP.telegram + "?text=" + encodeURIComponent(text);

function toast(text) {
  const el = $("toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2000);
}

function setTitle() {
  document.title =
    currentPage === "home"
      ? SHOP.name + " | " + t("title_tail")
      : t("nav_" + currentPage) + " | " + SHOP.name;
}

/* ---------- Paydo bo'lish animatsiyasi ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
function observe() {
  document.querySelectorAll(".reveal:not(.show)").forEach((el) => io.observe(el));
}

/* ---------- Sahifani almashtirish ---------- */
function pageFromHash() {
  const name = (window.location.hash || "").replace("#", "");
  return PAGES.indexOf(name) >= 0 ? name : "home";
}

function showPage(name) {
  if (PAGES.indexOf(name) < 0) name = "home";
  currentPage = name;

  document.querySelectorAll("[data-page]").forEach((el) => {
    el.classList.toggle("active", el.dataset.page === name);
  });
   document.querySelectorAll("[data-page]").forEach((el) => {
    const on = el.dataset.page === name;
    el.classList.toggle("active", on);
    el.style.display = on ? (el.classList.contains("hero") ? "flex" : "block") : "none";
  });

  $("nav-links").classList.remove("open");
  setTitle();
  window.scrollTo(0, 0);
  observe();
}

window.addEventListener("hashchange", () => showPage(pageFromHash()));

/* ---------- Sahifa matnlari (til almashganda yangilanadi) ---------- */
function applyStatic() {
  const s = shopText();
  document.documentElement.lang = lang;
  setTitle();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  $("lang-toggle").checked = lang === "ru";
  $("logo").textContent = SHOP.name + " 🌸";
  $("hero-tag").textContent = s.heroTag || "";
  $("hero-tag").style.display = s.heroTag ? "" : "none";
  $("hero-title").textContent = s.heroTitle;
  $("hero-text").textContent = s.heroText;
  $("hero-tg").href = tgLink(t("hello_q"));
  $("tg-link").href = tgLink(t("hello"));
  $("float-tg").href = tgLink(t("hello"));
  $("phone-link").href = "tel:" + SHOP.phone;
  $("phone-link").textContent = "📞 " + SHOP.phoneText;
  $("map-link").href = SHOP.map;
  $("address").textContent = "📍 " + s.address;
  $("hours").textContent = "🕒 " + s.hours;
  $("footer-text").textContent = t("footer").replace("{name}", SHOP.name);

  $("stats").innerHTML = s.stats
    .map((x) => "<div><strong>" + x.num + "</strong><span>" + x.label + "</span></div>")
    .join("");

  $("reviews-box").innerHTML = SHOP.reviews
    .map(
      (r) =>
        '<div class="review reveal"><div class="stars">' +
        "★".repeat(r.stars) +
        "</div><p>" + r.text + "</p><strong>" + r.name + "</strong></div>"
    )
    .join("");
}

/* ---------- Katalog ---------- */
let activeCat = "all";

function renderFilters() {
  const cats = ["all"].concat([...new Set(SHOP.products.map((p) => p.category))]);
  const box = $("filters");
  box.innerHTML = "";
  cats.forEach((c) => {
    const b = document.createElement("button");
    b.className = "chip" + (c === activeCat ? " active" : "");
    b.textContent = c === "all" ? t("all") : catName(c);
    b.onclick = () => {
      activeCat = c;
      renderFilters();
      renderProducts();
    };
    box.appendChild(b);
  });
}

function renderProducts() {
  const note = $("edit-note");
  note.hidden = !EDIT;
  note.textContent = EDIT ? t("edit_note") : "";

  const list = SHOP.products.filter((p) => activeCat === "all" || p.category === activeCat);
  $("products").innerHTML = list
    .map((p) => {
      const src = photos[p.id] || p.image;
      const tools = EDIT
        ? '<div class="photo-tools">' +
          '<button class="photo-up" data-id="' + p.id + '">' + t("photo_btn") + "</button>" +
          (photos[p.id]
            ? '<button class="photo-dl" data-id="' + p.id + '" aria-label="Download">⬇</button>' +
              '<button class="photo-del" data-id="' + p.id + '" aria-label="Delete">🗑</button>'
            : "") +
          "</div>"
        : "";
      return (
        '<article class="product reveal">' +
        '<div class="pic"><span class="emoji">' + p.icon + "</span>" +
        '<img src="' + src + '" alt="' + pf(p, "name") + '" loading="lazy" onerror="this.remove()">' +
        (pf(p, "badge") ? '<span class="badge">' + pf(p, "badge") + "</span>" : "") +
        tools +
        "</div>" +
        '<div class="info"><h3>' + pf(p, "name") + "</h3>" +
        '<p class="desc">' + pf(p, "desc") + "</p>" +
        '<div class="price-row"><span class="price">' + money(p.price) + "</span>" +
        (p.oldPrice ? '<s class="old">' + money(p.oldPrice) + "</s>" : "") +
        "</div>" +
        '<button class="btn btn-full add" data-id="' + p.id + '">' + t("add") + "</button>" +
        "</div></article>"
      );
    })
    .join("");
  observe();
}

$("products").addEventListener("click", (e) => {
  const btn = e.target.closest(".add");
  if (!btn) return;
  addToCart(btn.dataset.id);
});

/* ---------- Savat ---------- */
let cart = {};
try {
  cart = JSON.parse(localStorage.getItem("cart") || "{}");
} catch (err) {
  cart = {};
}

function saveCart() {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {}
}

function cartTotal() {
  return Object.keys(cart).reduce((sum, id) => {
    const p = byId(id);
    return p ? sum + p.price * cart[id] : sum;
  }, 0);
}

function renderCart() {
  Object.keys(cart).forEach((id) => {
    if (!byId(id)) delete cart[id];
  });
  const ids = Object.keys(cart);
  const count = ids.reduce((n, id) => n + cart[id], 0);
  $("cart-count").textContent = count;
  $("cart-total").textContent = money(cartTotal());

  if (!ids.length) {
    $("cart-items").innerHTML = '<p class="empty">' + t("empty") + "</p>";
  } else {
    $("cart-items").innerHTML = ids
      .map((id) => {
        const p = byId(id);
        return (
          '<div class="cart-row"><span class="ico">' + p.icon + "</span>" +
          '<div class="meta">' + pf(p, "name") + "<br><small>" + money(p.price * cart[id]) + "</small></div>" +
          '<div class="qty">' +
          '<button data-act="dec" data-id="' + id + '">−</button>' +
          "<span>" + cart[id] + "</span>" +
          '<button data-act="inc" data-id="' + id + '">+</button>' +
          "</div></div>"
        );
      })
      .join("");
  }
  saveCart();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  toast(t("toast_added"));
}

$("cart-items").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = btn.dataset.id;
  if (btn.dataset.act === "inc") cart[id] += 1;
  if (btn.dataset.act === "dec") {
    cart[id] -= 1;
    if (cart[id] <= 0) delete cart[id];
  }
  renderCart();
});

function openCart() {
  $("drawer").classList.add("open");
  $("overlay").classList.add("open");
}
function closeCart() {
  $("drawer").classList.remove("open");
  $("overlay").classList.remove("open");
}
$("cart-open").onclick = openCart;
$("cart-close").onclick = closeCart;
$("overlay").onclick = closeCart;

/* ---------- Buyurtma yuborish ---------- */
$("checkout").onclick = () => {
  const ids = Object.keys(cart);
  if (!ids.length) {
    toast(t("toast_empty"));
    return;
  }
  const name = $("f-name").value.trim();
  const phone = $("f-phone").value.trim();
  const address = $("f-address").value.trim();
  const note = $("f-note").value.trim();
  if (!name || !phone || !address) {
    toast(t("toast_fill"));
    return;
  }

  let msg = t("m_order") + "\n\n";
  ids.forEach((id, i) => {
    const p = byId(id);
    msg += (i + 1) + ") " + pf(p, "name") + " x" + cart[id] + " = " + money(p.price * cart[id]) + "\n";
  });
  msg += "\n" + t("m_total") + ": " + money(cartTotal());
  msg += "\n\n" + t("m_name") + ": " + name + "\n" + t("m_phone") + ": " + phone + "\n" + t("m_addr") + ": " + address;
  if (note) msg += "\n" + t("m_note") + ": " + note;

  window.open(tgLink(msg), "_blank");
};

/* ---------- Fikr yuborish ---------- */
$("r-send").onclick = () => {
  const name = $("r-name").value.trim();
  const stars = Number($("r-stars").value);
  const text = $("r-text").value.trim();
  if (!name || !text) {
    toast(t("toast_review"));
    return;
  }
  const msg =
    t("m_review") + "\n\n" + t("m_name") + ": " + name + "\n" +
    t("m_rating") + ": " + "★".repeat(stars) + "\n" + t("m_opinion") + ": " + text;
  window.open(tgLink(msg), "_blank");
  $("r-name").value = "";
  $("r-text").value = "";
  toast(t("toast_thanks"));
};

/* ---------- Telefon menyusi ---------- */

/* ---------- Gul rasmlari (tahrirlash rejimi) ---------- */
// Tahrirlash rejimi: saytni  ...netlify.app/?edit  ko'rinishida oching
const EDIT = /[?&]edit(=|&|$)/.test(window.location.search);

let photos = {};
try {
  photos = JSON.parse(localStorage.getItem("photos") || "{}");
} catch (err) {
  photos = {};
}

function savePhotos() {
  try {
    localStorage.setItem("photos", JSON.stringify(photos));
    return true;
  } catch (err) {
    return false;
  }
}

let photoTarget = null;

function fileName(p) {
  return (p.image || "photo.jpg").split("/").pop();
}

function resizeImage(file, done) {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const MAX = 900;
      const k = Math.min(1, MAX / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * k);
      c.height = Math.round(img.height * k);
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0, c.width, c.height);
      done(c.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = () => done(null);
    img.src = reader.result;
  };
  reader.onerror = () => done(null);
  reader.readAsDataURL(file);
}

$("products").addEventListener("click", (e) => {
  const up = e.target.closest(".photo-up");
  const del = e.target.closest(".photo-del");
  const dl = e.target.closest(".photo-dl");

  if (up) {
    photoTarget = up.dataset.id;
    $("photo-input").value = "";
    $("photo-input").click();
  }
  if (del) {
    delete photos[del.dataset.id];
    savePhotos();
    renderProducts();
  }
  if (dl) {
    const p = byId(dl.dataset.id);
    if (p && photos[p.id]) {
      const a = document.createElement("a");
      a.href = photos[p.id];
      a.download = fileName(p);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
});

$("photo-input").onchange = () => {
  const file = $("photo-input").files[0];
  const id = photoTarget;
  if (!file || !id) return;
  resizeImage(file, (data) => {
    if (!data) {
      toast(t("photo_bad"));
      return;
    }
    const prev = photos[id];
    photos[id] = data;
    if (savePhotos()) {
      toast(t("photo_saved"));
    } else {
      if (prev) photos[id] = prev;
      else delete photos[id];
      toast(t("photo_full"));
    }
    renderProducts();
  });
};
$("burger").onclick = () => $("nav-links").classList.toggle("open");

/* ---------- Til tugmasi (UZ / RU) ---------- */
function applyAll() {
  applyStatic();
  renderFilters();
  renderProducts();
  renderCart();
  observe();
}

$("lang-toggle").onchange = () => {
  lang = $("lang-toggle").checked ? "ru" : "uz";
  try {
    localStorage.setItem("lang", lang);
  } catch (err) {}
  applyAll();
};

/* ---------- Ishga tushirish ---------- */
applyAll();
showPage(pageFromHash());