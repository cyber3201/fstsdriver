const DATA = {
  "tronc-commun": {
    label: "Tronc commun",
    description: "Analyse, programmation et bases scientifiques.",
    filieres: {
      "maths-fondamentales": {
        label: "Mathématiques fondamentales",
        description: "Analyse, algèbre et physique pour débuter.",
        modules: [
          {
            title: "Analyse I",
            resources: [
              {
                url: "https://drive.google.com/file/d/1aExampleMathAnalyse1/view",
                label: "📄 Cours PDF – Analyse I",
              },
              {
                url: "https://drive.google.com/file/d/1bExampleMathAnalyse1TD/view",
                label: "📝 TD – Analyse I",
              },
            ],
          },
          {
            title: "Algorithmique I",
            resources: [
              {
                url: "https://drive.google.com/file/d/1cExampleAlgoCours/view",
                label: "📄 Cours PDF – Algorithmique I",
              },
              {
                url: "https://drive.google.com/file/d/1dExampleAlgoTP/view",
                label: "💻 TP – Algorithmique I",
              },
            ],
          },
          {
            title: "Physique Générale",
            resources: [
              {
                url: "https://drive.google.com/file/d/1eExamplePhysique/view",
                label: "📽️ Vidéo – Cinématique",
              },
            ],
          },
        ],
      },
      "informatique-intro": {
        label: "Informatique &amp; algorithmique",
        description: "Programmation et structures de données.",
        modules: [
          {
            title: "Programmation C",
            resources: [
              {
                url: "https://drive.google.com/file/d/1fExampleProgC/view",
                label: "📄 Cours PDF – Programmation C",
              },
              {
                url: "https://drive.google.com/drive/folders/1gExampleProgCFolder",
                label: "📁 Dossier – Exercices et corrections",
              },
            ],
          },
          {
            title: "Architecture des Ordinateurs",
            resources: [
              {
                url: "https://drive.google.com/file/d/1hExampleArchCours/view",
                label: "📊 Slides – Architecture",
              },
            ],
          },
        ],
      },
    },
  },
  licence: {
    label: "Licence",
    description: "Filières professionnalisantes et spécialisées.",
    filieres: {
      gi: {
        label: "Génie Informatique (GI)",
        description: "Développement logiciel et systèmes.",
        modules: [
          {
            title: "Structures de Données Avancées",
            resources: [
              {
                url: "https://drive.google.com/file/d/2aExampleSDA/view",
                label: "📄 Cours PDF – Structures de Données",
              },
              {
                url: "https://drive.google.com/file/d/2bExampleSDA/view",
                label: "📝 TD – Listes et arbres",
              },
            ],
          },
          {
            title: "Développement Web",
            resources: [
              {
                url: "https://drive.google.com/file/d/2cExampleWebSlides/view",
                label: "📊 Slides – HTML &amp; CSS",
              },
              {
                url: "https://drive.google.com/drive/folders/2dExampleWebFolder",
                label: "📁 Dossier – Projets",
              },
            ],
          },
          {
            title: "Bases de Données",
            resources: [
              {
                url: "https://drive.google.com/file/d/2eExampleBDD/view",
                label: "📄 Cours PDF – SQL",
              },
              {
                url: "https://drive.google.com/file/d/2fExampleBDDTP/view",
                label: "🧪 TP – Modélisation",
              },
            ],
          },
        ],
      },
      gc: {
        label: "Génie Civil (GC)",
        description: "Structures, matériaux et topographie.",
        modules: [
          {
            title: "Mécanique des Structures",
            resources: [
              {
                url: "https://drive.google.com/file/d/2gExampleMeca/view",
                label: "📄 Cours PDF – Mécanique",
              },
            ],
          },
          {
            title: "Résistance des Matériaux",
            resources: [
              {
                url: "https://drive.google.com/file/d/2hExampleRDM/view",
                label: "📊 Slides – RDM",
              },
            ],
          },
          {
            title: "Topographie",
            resources: [
              {
                url: "https://drive.google.com/drive/folders/2iExampleTopoFolder",
                label: "📁 Dossier – Travaux pratiques",
              },
            ],
          },
        ],
      },
    },
  },
  master: {
    label: "Master",
    description: "Programmes spécialisés de niveau Bac+5.",
    filieres: {
      msd: {
        label: "Management des Systèmes Décisionnels (MSD)",
        description: "Business intelligence et gouvernance.",
        modules: [
          {
            title: "Data Warehouse",
            resources: [
              {
                url: "https://drive.google.com/file/d/3aExampleDW/view",
                label: "📄 Cours PDF – Modélisation multidimensionnelle",
              },
              {
                url: "https://drive.google.com/file/d/3bExampleDWTP/view",
                label: "🧪 TP – ETL avec Talend",
              },
            ],
          },
          {
            title: "Data Mining",
            resources: [
              {
                url: "https://drive.google.com/file/d/3cExampleDM/view",
                label: "📊 Slides – Classification",
              },
              {
                url: "https://drive.google.com/drive/folders/3dExampleDMFolder",
                label: "📁 Dossier – Jeux de données",
              },
            ],
          },
        ],
      },
      sitd: {
        label: "Sécurité &amp; Ingénierie des Technologies de Données (SITD)",
        description: "Sécurité, Big Data et infrastructures.",
        modules: [
          {
            title: "Sécurité Réseau",
            resources: [
              {
                url: "https://drive.google.com/file/d/3eExampleSecReseau/view",
                label: "📄 Cours PDF – Sécurité réseau",
              },
              {
                url: "https://drive.google.com/file/d/3fExampleSecLab/view",
                label: "🧪 TP – Pare-feux",
              },
            ],
          },
          {
            title: "Big Data Processing",
            resources: [
              {
                url: "https://drive.google.com/drive/folders/3gExampleBigData",
                label: "📁 Dossier – TP Spark",
              },
            ],
          },
        ],
      },
    },
  },
  ingenieur: {
    label: "Cycle d’ingénieur",
    description: "Formations d’ingénieur de la FSTS.",
    filieres: {
      imi: {
        label: "Ingénierie Mécatronique et Industrielle (IMI)",
        description: "Automatisation et robotique.",
        modules: [
          {
            title: "Automatique Avancée",
            resources: [
              {
                url: "https://drive.google.com/file/d/4aExampleAuto/view",
                label: "📄 Cours PDF – Automatique",
              },
              {
                url: "https://drive.google.com/file/d/4bExampleAuto/view",
                label: "📊 Slides – Commande PID",
              },
            ],
          },
          {
            title: "Robotique",
            resources: [
              {
                url: "https://drive.google.com/drive/folders/4cExampleRobot",
                label: "📁 Dossier – Projets",
              },
            ],
          },
        ],
      },
      irssi: {
        label: "Ingénierie des Réseaux et Systèmes Sécurisés (IRSSI)",
        description: "Systèmes, réseaux et cybersécurité.",
        modules: [
          {
            title: "Administration Système Avancée",
            resources: [
              {
                url: "https://drive.google.com/file/d/4dExampleSysAdmin/view",
                label: "📄 Cours PDF – Linux avancé",
              },
            ],
          },
          {
            title: "Audit de Sécurité",
            resources: [
              {
                url: "https://drive.google.com/drive/folders/4eExampleAudit",
                label: "📁 Dossier – Guides d’audit",
              },
              {
                url: "https://drive.google.com/file/d/4fExampleAuditSlides/view",
                label: "📊 Slides – Outils et méthodologie",
              },
            ],
          },
        ],
      },
      qhse: {
        label: "Qualité, Hygiène, Sécurité, Environnement (QHSE)",
        description: "Gestion des risques et conformité.",
        modules: [
          {
            title: "Management QSE",
            resources: [
              {
                url: "https://drive.google.com/file/d/4gExampleQSE/view",
                label: "📄 Cours PDF – Normes ISO",
              },
            ],
          },
          {
            title: "Gestion de Crise",
            resources: [
              {
                url: "https://drive.google.com/file/d/4hExampleCrisis/view",
                label: "🎥 Vidéo – Gestion d’incident",
              },
            ],
          },
        ],
      },
    },
  },
};

const state = {
  nav: "home",
  group: null,
  filiere: null,
};

const navButtons = Array.from(document.querySelectorAll(".nav-btn"));
const navToggle = document.getElementById("nav-toggle");
const navToggleLabel = document.getElementById("nav-toggle-label");
const navWrapper = document.getElementById("primary-nav");
const heroCta = document.getElementById("hero-cta");
const groupView = document.getElementById("group-view");
const filiereView = document.getElementById("filiere-view");
const modulesView = document.getElementById("modules-view");
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbHome = document.getElementById("breadcrumb-home");
const breadcrumbGroup = document.getElementById("breadcrumb-group");
const breadcrumbSep = document.getElementById("breadcrumb-sep");
const breadcrumbFiliere = document.getElementById("breadcrumb-filiere");
const explorer = document.getElementById("explorer");

const navLabels = {
  home: "Accueil",
  ...Object.fromEntries(Object.entries(DATA).map(([key, value]) => [key, value.label])),
};

function buildGroupTiles() {
  const fragment = document.createDocumentFragment();
  Object.entries(DATA).forEach(([groupKey, group]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tile";
    button.dataset.group = groupKey;
    button.innerHTML = `<h3>${group.label}</h3><p>${group.description}</p>`;
    fragment.appendChild(button);
  });
  groupView.appendChild(fragment);
}

function buildFiliereTiles() {
  const fragment = document.createDocumentFragment();
  Object.entries(DATA).forEach(([groupKey, group]) => {
    Object.entries(group.filieres).forEach(([filiereKey, filiere]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tile";
      button.dataset.group = groupKey;
      button.dataset.filiere = filiereKey;
      button.innerHTML = `<h3>${filiere.label}</h3><p>${filiere.description}</p>`;
      fragment.appendChild(button);
    });
  });
  filiereView.appendChild(fragment);
}

function setActiveNav(target) {
  navButtons.forEach((btn) => {
    const isActive = btn.dataset.target === target;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function scrollToExplorer() {
  explorer?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderModules(groupKey, filiereKey) {
  modulesView.innerHTML = "";
  if (!groupKey || !filiereKey) {
    return;
  }
  const group = DATA[groupKey];
  const filiere = group?.filieres[filiereKey];
  if (!filiere) {
    return;
  }

  const fragment = document.createDocumentFragment();
  filiere.modules.forEach((module) => {
    const article = document.createElement("article");
    article.className = "module-card";

    const title = document.createElement("h3");
    title.textContent = module.title;
    article.appendChild(title);

    const list = document.createElement("div");
    list.className = "link-list";

    module.resources.forEach((resource) => {
      const link = document.createElement("a");
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = resource.label;
      list.appendChild(link);
    });

    article.appendChild(list);
    fragment.appendChild(article);
  });

  modulesView.appendChild(fragment);
}

function updateBreadcrumb() {
  if (state.nav === "home") {
    breadcrumbGroup.classList.add("hidden");
    breadcrumbSep.classList.add("hidden");
    breadcrumbFiliere.classList.add("hidden");
    breadcrumbFiliere.textContent = "";
    return;
  }

  breadcrumbSep.classList.remove("hidden");
  breadcrumbGroup.classList.remove("hidden");
  breadcrumbGroup.textContent = navLabels[state.group] ?? "";

  if (!state.filiere) {
    breadcrumbFiliere.classList.add("hidden");
    breadcrumbFiliere.textContent = "";
  } else {
    breadcrumbFiliere.classList.remove("hidden");
    const label = DATA[state.group]?.filieres[state.filiere]?.label ?? "";
    breadcrumbFiliere.textContent = `› ${label}`;
  }
}

function render() {
  setActiveNav(state.nav);

  if (state.nav === "home") {
    groupView.classList.remove("hidden");
    filiereView.classList.add("hidden");
    modulesView.classList.add("hidden");
    breadcrumb.classList.add("hidden");
    updateBreadcrumb();
    renderModules(null, null);
    return;
  }

  const groupKey = state.group;
  const filiereKey = state.filiere;

  groupView.classList.add("hidden");
  breadcrumb.classList.remove("hidden");
  updateBreadcrumb();

  if (!filiereKey) {
    filiereView.classList.remove("hidden");
    modulesView.classList.add("hidden");
    Array.from(filiereView.children).forEach((tile) => {
      tile.classList.toggle("hidden", tile.dataset.group !== groupKey);
    });
    renderModules(null, null);
    return;
  }

  filiereView.classList.add("hidden");
  modulesView.classList.remove("hidden");
  renderModules(groupKey, filiereKey);
}

function openMobileNav() {
  navWrapper.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggleLabel.textContent = "Fermer le menu";
}

function closeMobileNav() {
  navWrapper.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggleLabel.textContent = "Ouvrir le menu";
}

function isMobileView() {
  return window.innerWidth <= 920;
}

buildGroupTiles();
buildFiliereTiles();
render();

document.getElementById("year").textContent = new Date().getFullYear();

heroCta?.addEventListener("click", () => {
  state.nav = "home";
  state.group = null;
  state.filiere = null;
  render();
  scrollToExplorer();
  if (isMobileView()) {
    closeMobileNav();
  }
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    if (target === "home") {
      state.nav = "home";
      state.group = null;
      state.filiere = null;
    } else {
      state.nav = target;
      state.group = target;
      state.filiere = null;
    }
    render();
    if (target !== "home") {
      scrollToExplorer();
    }
    if (isMobileView()) {
      closeMobileNav();
    }
  });
});

groupView.addEventListener("click", (event) => {
  const tile = event.target.closest(".tile");
  if (!tile) return;
  const { group } = tile.dataset;
  if (!group) return;
  state.nav = group;
  state.group = group;
  state.filiere = null;
  render();
  scrollToExplorer();
});

filiereView.addEventListener("click", (event) => {
  const tile = event.target.closest(".tile");
  if (!tile) return;
  const { group, filiere } = tile.dataset;
  if (!group || !filiere) return;
  state.nav = group;
  state.group = group;
  state.filiere = filiere;
  render();
  scrollToExplorer();
});

breadcrumbHome.addEventListener("click", () => {
  state.nav = "home";
  state.group = null;
  state.filiere = null;
  render();
  if (isMobileView()) {
    closeMobileNav();
  }
});

breadcrumbGroup.addEventListener("click", () => {
  if (!state.group) {
    state.nav = "home";
  } else {
    state.nav = state.group;
  }
  state.filiere = null;
  render();
  scrollToExplorer();
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });
}

window.addEventListener("resize", () => {
  if (!isMobileView()) {
    closeMobileNav();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navWrapper.classList.contains("open")) {
    closeMobileNav();
  }
});
