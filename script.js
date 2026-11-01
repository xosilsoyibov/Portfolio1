// Mavzuni almashtirish (Dark / Light mode)
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change", function () {
  document.body.classList.toggle("light", toggle.checked);
  localStorage.setItem("theme", toggle.checked ? "light" : "dark");
});

// Ko'p tillilik (UZ / RU)
const translations = {
  uz: {
    hero_subtitle: "Kompyuter injiniringi talabasi va veb-dasturchi",
    about_title: "Men haqimda",
    about_text: "Men Soyibov Hosilbek, \"Cyber University\" kompyuter injiniringi yo'nalishi 1-kurs talabasiman. Veb-saytlar va Telegram botlar yarataman. Hozir HTML, CSS va C++ ni o'rganyapman, yangi texnologiyalarni tez o'zlashtiraman.",
    skills_title: "Ko'nikmalar",
    services_title: "Xizmatlar",
    service1_title: "Vizitka sayt",
    service1_desc: "Do'kon, kafe yoki xizmat uchun: manzil, ish vaqti, narxlar va bog'lanish tugmalari.",
    service2_title: "Telegram bot",
    service2_desc: "Buyurtma qabul qiluvchi yoki guruhni spamdan himoya qiluvchi bot yaratish.",
    service3_title: "Landing page",
    service3_desc: "Bitta sahifali, telefonga moslashgan sayt: mahsulot yoki xizmatni tanishtirish uchun.",
    services_note: "Narx loyiha murakkabligiga qarab kelishiladi. Batafsil uchun \"Bog'lanish\" bo'limiga yozing.",
    projects_title: "Loyihalar",
    project1_title: "Portfolio sayt",
    project1_desc: "Shaxsiy sayt, HTML va CSS da yozilgan.",
    project2_title: "Gul Olami sayti",
    project2_desc: "Gul do'koni uchun zamonaviy va qulay veb-sayt. Telegram orqali savat va buyurtma berish tizimi mavjud.",
    project2_link: "Saytni ochish",
    project3_title: "Telegram bot",
    project3_desc: "Telegram guruhda spam xabarlarni aniqlab, guruhni himoya qiladi.",
    bot_link: "Botni ochish",
    contact_title: "Bog'lanish",
    phone_text: "Telefon nomerim (+998 20 016 00 54)"
  },
  ru: {
    hero_subtitle: "Студент компьютерной инженерии и веб-разработчик",
    about_title: "Обо мне",
    about_text: "Я Сойибов Хосилбек, студент 1-го курса факультета компьютерной инженерии в \"Cyber University\". Создаю веб-сайты и Telegram-ботов. Сейчас изучаю HTML, CSS и C++, быстро осваиваю новые технологии.",
    skills_title: "Навыки",
    services_title: "Услуги",
    service1_title: "Сайт-визитка",
    service1_desc: "Для магазина, кафе или услуги: адрес, часы работы, цены и кнопки связи.",
    service2_title: "Telegram бот",
    service2_desc: "Создание бота для приёма заказов или защиты группы от спама.",
    service3_title: "Landing page",
    service3_desc: "Одностраничный сайт, адаптированный под мобильные устройства: для презентации товара или услуги.",
    services_note: "Цена договаривается в зависимости от сложности проекта. Подробнее пишите в раздел \"Контакты\".",
    projects_title: "Проекты",
    project1_title: "Сайт-портфолио",
    project1_desc: "Личный сайт, написанный на HTML и CSS.",
    project2_title: "Сайт Gul Olami",
    project2_desc: "Современный и удобный веб-сайт для цветочного магазина. Есть корзина и система заказа через Telegram.",
    project2_link: "Открыть сайт",
    project3_title: "Telegram бот",
    project3_desc: "Обнаруживает спам-сообщения в группе Telegram и защищает её.",
    bot_link: "Открыть бота",
    contact_title: "Контакты",
    phone_text: "Мой номер телефона (+998 20 016 00 54)"
  }
};

let currentLang = localStorage.getItem("lang") || "uz";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.getElementById("lang-uz").classList.toggle("active", lang === "uz");
  document.getElementById("lang-ru").classList.toggle("active", lang === "ru");
}

document.getElementById("lang-uz").addEventListener("click", () => setLanguage("uz"));
document.getElementById("lang-ru").addEventListener("click", () => setLanguage("ru"));

setLanguage(currentLang);