/* Soft Lumen Studio — interactions du site (thème, langue, menu, apparitions) */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Thème clair / sombre                                                */
  /* ------------------------------------------------------------------ */
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fbf9f6" : "#0b0d13");
  }

  var storedTheme = null;
  try { storedTheme = localStorage.getItem("sls-theme"); } catch (e) { /* stockage indisponible */ }
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem("sls-theme", next); } catch (e) { /* stockage indisponible */ }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Langue (fr par défaut, en optionnel)                                */
  /* ------------------------------------------------------------------ */
  var STRINGS = {
    fr: {
      "meta.title": "Soft Lumen Studio — Studio indépendant de développement d'applications",
      "meta.desc": "Soft Lumen Studio est un studio indépendant qui conçoit des applications mobiles et web simples, soignées et respectueuses de la vie privée.",
      "skip": "Aller au contenu",
      "nav.studio": "Le studio",
      "nav.services": "Ce que nous faisons",
      "nav.approach": "Approche",
      "nav.apps": "Applications",
      "nav.contact": "Contact",
      "hero.eyebrow": "Studio indépendant de développement d'applications",
      "hero.lead": "Nous concevons des applications mobiles et web simples, soignées et respectueuses de votre vie privée. Une idée à la fois, faite correctement.",
      "hero.cta1": "Nous écrire",
      "hero.cta2": "Découvrir le studio",
      "hero.status": "Studio en cours de lancement — nos premières applications sont en préparation.",
      "studio.label": "Le studio",
      "studio.title": "Petit studio, grande attention aux détails",
      "studio.p1": "Soft Lumen Studio est un studio de développement indépendant. Nous partons d'une conviction simple : une application doit faire une chose, la faire bien, et ne pas demander plus que ce dont elle a besoin.",
      "studio.p2": "Pas de publicité, pas de collecte de données superflue, pas de fonctionnalités ajoutées pour faire nombre. Juste des outils clairs, rapides et agréables à utiliser au quotidien.",
      "studio.p3": "Le studio démarre : aucune application n'est encore publiée. Cette page présente ce que nous faisons et comment nous joindre en attendant les premières sorties.",
      "services.label": "Ce que nous faisons",
      "services.title": "Du concept à la mise en ligne",
      "services.c1.t": "Applications mobiles",
      "services.c1.d": "Des applications iOS et Android pensées pour l'usage réel : rapides à ouvrir, lisibles d'un coup d'œil, utilisables hors ligne quand c'est possible.",
      "services.c2.t": "Applications web",
      "services.c2.d": "Des interfaces légères et accessibles, qui fonctionnent sur n'importe quel appareil et n'imposent ni compte inutile ni téléchargement.",
      "services.c3.t": "Conception et publication",
      "services.c3.d": "Nous prenons en charge l'ensemble : cadrage de l'idée, design de l'interface, développement, publication sur les stores, puis mises à jour.",
      "approach.label": "Approche",
      "approach.title": "Quatre principes, tenus",
      "approach.s1.t": "La simplicité d'abord",
      "approach.s1.d": "Une fonctionnalité entre dans l'application seulement si elle sert vraiment. Le reste attend.",
      "approach.s2.t": "La vie privée par défaut",
      "approach.s2.d": "Le minimum de données, gardées le moins longtemps possible, et jamais revendues.",
      "approach.s3.t": "Le soin du détail",
      "approach.s3.d": "Typographie, animations, temps de chargement, textes : ce sont les détails qui rendent un outil agréable.",
      "approach.s4.t": "Livrer, puis écouter",
      "approach.s4.d": "Une première version honnête, mise entre les mains des utilisateurs, puis améliorée avec leurs retours.",
      "apps.label": "Applications",
      "apps.title": "Rien à montrer… pour l'instant",
      "apps.lead": "Nos premières applications sont en cours de développement. Cette page les accueillera dès leur publication — écrivez-nous pour être prévenu au lancement.",
      "apps.soon": "Bientôt",
      "apps.slot": "Première application",
      "apps.slot2": "Deuxième application",
      "apps.slot3": "Troisième application",
      "apps.slotd": "Cet emplacement accueillera le nom, l'icône et le lien de téléchargement de l'application.",
      "contact.label": "Contact",
      "contact.title": "Une idée, une question, un projet ?",
      "contact.lead": "Le studio est joignable directement par e-mail. Nous répondons à tous les messages sérieux, généralement sous quelques jours.",
      "contact.fine": "Vous pouvez aussi nous écrire pour signaler un bug, proposer une fonctionnalité ou demander une traduction.",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Confidentialité",
      "footer.contact": "Contact",
      "nf.title": "Page introuvable",
      "nf.lead": "Cette page n'existe pas ou a été déplacée.",
      "nf.cta": "Retour à l'accueil"
    },
    en: {
      "meta.title": "Soft Lumen Studio — Independent app development studio",
      "meta.desc": "Soft Lumen Studio is an independent studio building simple, well-crafted, privacy-respecting mobile and web apps.",
      "skip": "Skip to content",
      "nav.studio": "Studio",
      "nav.services": "What we do",
      "nav.approach": "Approach",
      "nav.apps": "Apps",
      "nav.contact": "Contact",
      "hero.eyebrow": "Independent app development studio",
      "hero.lead": "We build simple, well-crafted mobile and web apps that respect your privacy. One idea at a time, done properly.",
      "hero.cta1": "Get in touch",
      "hero.cta2": "About the studio",
      "hero.status": "The studio is getting started — our first apps are in the works.",
      "studio.label": "Studio",
      "studio.title": "A small studio with a long attention span",
      "studio.p1": "Soft Lumen Studio is an independent development studio. We start from a simple belief: an app should do one thing, do it well, and never ask for more than it needs.",
      "studio.p2": "No ads, no unnecessary data collection, no features added just to fill a list. Just clear, fast tools that are pleasant to use every day.",
      "studio.p3": "The studio is just starting: nothing has shipped yet. This page explains what we do and how to reach us until the first releases.",
      "services.label": "What we do",
      "services.title": "From idea to the store",
      "services.c1.t": "Mobile apps",
      "services.c1.d": "iOS and Android apps designed for real use: quick to open, readable at a glance, usable offline whenever possible.",
      "services.c2.t": "Web apps",
      "services.c2.d": "Light, accessible interfaces that work on any device and require neither a pointless account nor a download.",
      "services.c3.t": "Design and release",
      "services.c3.d": "We handle the whole path: shaping the idea, designing the interface, building it, shipping to the stores, then keeping it updated.",
      "approach.label": "Approach",
      "approach.title": "Four principles we actually keep",
      "approach.s1.t": "Simplicity first",
      "approach.s1.d": "A feature ships only if it genuinely earns its place. Everything else waits.",
      "approach.s2.t": "Privacy by default",
      "approach.s2.d": "The least data possible, kept for the shortest time possible, and never sold.",
      "approach.s3.t": "Care for the details",
      "approach.s3.d": "Type, motion, loading times, wording: the details are what make a tool pleasant.",
      "approach.s4.t": "Ship, then listen",
      "approach.s4.d": "An honest first version in people's hands, then improved with their feedback.",
      "apps.label": "Apps",
      "apps.title": "Nothing to show… yet",
      "apps.lead": "Our first apps are under development. They will appear here as soon as they are released — write to us to hear about the launch.",
      "apps.soon": "Soon",
      "apps.slot": "First app",
      "apps.slot2": "Second app",
      "apps.slot3": "Third app",
      "apps.slotd": "This slot will hold the app's name, icon and download link.",
      "contact.label": "Contact",
      "contact.title": "An idea, a question, a project?",
      "contact.lead": "The studio is reachable directly by email. We answer every genuine message, usually within a few days.",
      "contact.fine": "You can also write to report a bug, suggest a feature or request a translation.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy",
      "footer.contact": "Contact",
      "nf.title": "Page not found",
      "nf.lead": "This page does not exist or has been moved.",
      "nf.cta": "Back to home"
    }
  };

  var langBtn = document.getElementById("lang-toggle");
  var langLabel = document.getElementById("lang-label");

  function applyLang(lang) {
    var dict = STRINGS[lang] || STRINGS.fr;
    root.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (typeof value === "string") el.textContent = value;
    });

    if (dict["meta.title"] && document.body.dataset.page === "home") {
      document.title = dict["meta.title"];
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", dict["meta.desc"]);
    }

    if (langBtn && langLabel) {
      langLabel.textContent = lang === "fr" ? "EN" : "FR";
      langBtn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
    }
  }

  var storedLang = null;
  try { storedLang = localStorage.getItem("sls-lang"); } catch (e) { /* stockage indisponible */ }
  if (!storedLang && navigator.language && navigator.language.slice(0, 2).toLowerCase() !== "fr") {
    storedLang = "en";
  }
  if (storedLang === "en") applyLang("en");

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = root.getAttribute("lang") === "fr" ? "en" : "fr";
      applyLang(next);
      try { localStorage.setItem("sls-lang", next); } catch (e) { /* stockage indisponible */ }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Menu mobile                                                         */
  /* ------------------------------------------------------------------ */
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Apparition des sections au défilement                               */
  /* ------------------------------------------------------------------ */
  var revealable = document.querySelectorAll(".section, .hero-inner");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: .08 });

    revealable.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Année courante dans le pied de page                                 */
  /* ------------------------------------------------------------------ */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
