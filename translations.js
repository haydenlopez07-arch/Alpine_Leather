const translations = {

  en: {

    home: "Home",
    support: "Support",
    service: "Service",
    about: "About",
    account: "Account",

    faqs: "FAQs",
    privacy: "Privacy",
    terms: "Terms",

    classes: "Classes",
    leather: "Leather Work",
    bags: "Bags & Cases",
    wallets: "Wallets & Purses",
    other: "Other",

    contact: "Contact Us",
    portfolio: "Portfolio",
    updates: "Farm Updates",
    products: "Other Farm Products",

    login: "Log In",
    signup: "Sign Up",
    profile: "Profile",

    heroTitle: "Premium Handmade Leather",

    heroText:
      "Crafted with care. Designed for durability. Built for everyday life.",

    explore: "Explore Products",

    craftTitle: "Our Craft",

    craftText:
      "At Alpine Leather, we believe in quality over quantity. Every piece is handcrafted using premium materials to ensure durability and timeless style.",

    footer:
      "© 2026 Alpine Leather | Built with craftsmanship",

    view: "View",

    english: "English",
    japanese: "日本語"
  },

  jp: {

    home: "ホーム",
    support: "サポート",
    service: "サービス",
    about: "会社情報",
    account: "アカウント",

    faqs: "よくある質問",
    privacy: "プライバシー",
    terms: "利用規約",

    classes: "クラス",
    leather: "レザーワーク",
    bags: "バッグ＆ケース",
    wallets: "財布＆小物",
    other: "その他",

    contact: "お問い合わせ",
    portfolio: "作品集",
    updates: "農場ニュース",
    products: "農場製品",

    login: "ログイン",
    signup: "新規登録",
    profile: "プロフィール",

    heroTitle: "高級ハンドメイドレザー",

    heroText:
      "丁寧に作られた、耐久性に優れた日常使いのレザー製品。",

    explore: "商品を見る",

    craftTitle: "職人技",

    craftText:
      "Alpine Leatherでは、大量生産ではなく品質を重視しています。すべての商品は高品質な素材を使用し、職人によって丁寧に作られています。",

    footer:
      "© 2026 Alpine Leather | 職人技で作られています",

    view: "表示",

    english: "English",
    japanese: "日本語"
  }
};

function setLanguage(language) {

  localStorage.setItem("language", language);

  const lang = translations[language];

  document.documentElement.lang = language === "jp" ? "ja" : "en";

  document.body.classList.toggle(
    "japanese-mode",
    language === "jp"
  );

  // NAVBAR
  updateText("nav-home", lang.home);
  updateText("nav-support", lang.support);
  updateText("nav-service", lang.service);
  updateText("nav-about", lang.about);
  updateText("nav-account", lang.account);

  // DROPDOWNS
  updateText("faq-link", lang.faqs);
  updateText("privacy-link", lang.privacy);
  updateText("terms-link", lang.terms);

  updateText("classes-link", lang.classes);
  updateText("leather-link", lang.leather);
  updateText("bags-link", lang.bags);
  updateText("wallets-link", lang.wallets);
  updateText("other-link", lang.other);

  updateText("contact-link", lang.contact);
  updateText("portfolio-link", lang.portfolio);
  updateText("updates-link", lang.updates);
  updateText("products-link", lang.products);

  updateText("login-link", lang.login);
  updateText("signup-link", lang.signup);
  updateText("profile-link", lang.profile);

  // HERO
  updateText("hero-title", lang.heroTitle);
  updateText("hero-text", lang.heroText);

  updateText("explore-btn", lang.explore);
  updateText("contact-btn", lang.contact);

  // CRAFT
  updateText("craft-title", lang.craftTitle);
  updateText("craft-text", lang.craftText);

  // FOOTER
  updateText("footer-text", lang.footer);

  // BUTTON
  const button = document.getElementById("lang-toggle");

  if (button) {
    button.textContent =
      language === "jp"
      ? lang.english
      : lang.japanese;
  }
}

function updateText(id, text) {

  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const savedLanguage =
    localStorage.getItem("language") || "en";

  setLanguage(savedLanguage);

  const button = document.getElementById("lang-toggle");

  if (button) {

    button.addEventListener("click", () => {

      const current =
        localStorage.getItem("language") || "en";

      const newLanguage =
        current === "en" ? "jp" : "en";

      setLanguage(newLanguage);
    });
  }
});