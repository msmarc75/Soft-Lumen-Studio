# Soft Lumen Studio

Site vitrine du studio de développement d'applications **Soft Lumen Studio**.

Site statique, sans framework ni étape de build : du HTML, du CSS et un petit fichier JavaScript.
Il s'ouvre directement dans un navigateur et se déploie tel quel sur n'importe quel hébergeur statique.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page d'accueil (studio, ce que nous faisons, approche, applications, contact) |
| `legal.html` | Mentions légales (mentions à compléter) |
| `privacy.html` | Politique de confidentialité (utile pour les fiches App Store / Play Store) |
| `404.html` | Page d'erreur |
| `assets/css/styles.css` | Toute la mise en forme |
| `assets/js/main.js` | Thème clair/sombre, bascule FR/EN, menu mobile, apparitions au défilement |
| `assets/img/favicon.svg` | Icône du site |
| `site.webmanifest`, `robots.txt`, `sitemap.xml` | Métadonnées du site |
| `.github/workflows/pages.yml` | Déploiement automatique sur GitHub Pages |

## Lancer en local

Ouvrir `index.html` dans un navigateur suffit. Pour un vrai serveur local :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déployer sur GitHub Pages

1. Fusionner la branche sur `main`.
2. Dans le dépôt : **Settings → Pages → Source → GitHub Actions**.
3. Chaque `push` sur `main` republie le site.

Le site sera alors accessible sur `https://msmarc75.github.io/Soft-Lumen-Studio/`.
Pour un domaine personnalisé (`softlumenstudio.com` par exemple), ajouter un fichier `CNAME`
contenant le domaine, puis remplacer l'URL dans `index.html` (balises `canonical` et `og:*`),
`robots.txt` et `sitemap.xml`.

## À personnaliser avant la mise en ligne

- [ ] **Adresse e-mail** : `hello@softlumenstudio.com` est un exemple. Remplacer partout
      (`index.html`, `legal.html`, `privacy.html`, `404.html`) par la vraie adresse.
- [ ] **Mentions légales** (`legal.html`) : nom du responsable de publication, forme juridique,
      adresse, SIREN/SIRET, hébergeur. Les champs à remplir sont en italique entre crochets.
- [ ] **Politique de confidentialité** (`privacy.html`) : date de mise à jour, et une notice
      par application au moment de la publication.
- [ ] **URL du site** : remplacer `https://msmarc75.github.io/Soft-Lumen-Studio/` si un domaine
      propre est utilisé.
- [ ] **Image de partage** : `assets/img/og-image.png` (1200×630) — à remplacer par un visuel
      définitif si besoin.

## Ajouter une application publiée

Dans `index.html`, section `#apps` : remplacer une carte `card--empty` par une carte normale.

```html
<article class="card">
  <h3>Nom de l'application</h3>
  <p>Une phrase de description.</p>
  <p><a href="https://lien-vers-le-store">Télécharger</a></p>
</article>
```

Penser à retirer la phrase « Rien à montrer… pour l'instant » (clé `apps.title` dans
`assets/js/main.js`, et le texte correspondant dans `index.html`).

## Bilingue

Le site est en français par défaut, avec une bascule **FR / EN** dans l'en-tête. Les traductions
vivent dans l'objet `STRINGS` de `assets/js/main.js` ; chaque élément traduisible porte un
attribut `data-i18n="clé"` dans le HTML. Les pages légales sont en français uniquement.
