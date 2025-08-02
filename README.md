# 🚀 Portfolio de KAMRAIN Majda

Un portfolio moderne et élégant développé avec React et Tailwind CSS, présentant mes compétences en développement web full-stack.

## ✨ Fonctionnalités

- **Design moderne** avec glassmorphism et animations fluides
- **Responsive** - Optimisé pour tous les appareils
- **Performance** - Chargement rapide et optimisé
- **Accessibilité** - Conforme aux standards WCAG
- **SEO friendly** - Structure sémantique optimisée

## 🛠️ Technologies utilisées

- **Frontend**: React 19, Tailwind CSS 4
- **Icons**: React Icons
- **Build Tool**: Vite
- **Animations**: CSS personnalisées
- **Deployment**: Compatible avec Vercel, Netlify, etc.

## 📁 Structure du projet

```
my-portfolio/
├── public/
│   ├── icons/          # Icônes des technologies
│   ├── logo.jpg        # Photo de profil
│   └── KAMRAINMajdacv.pdf  # CV téléchargeable
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation principale
│   │   ├── Resume.jsx      # Section présentation
│   │   ├── Skills.jsx      # Compétences techniques
│   │   ├── Projects.jsx    # Portfolio de projets
│   │   └── Footer.jsx      # Pied de page
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
└── package.json
```

## 🚀 Installation et démarrage

1. **Cloner le repository**
   ```bash
   git clone https://github.com/majda-k/my-portfolio.git
   cd my-portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile pour la production
- `npm run preview` - Prévisualise la build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Personnalisation

### Couleurs
Le thème utilise un dégradé violet/slate. Pour modifier les couleurs :

```css
/* Dans src/index.css */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #1e293b, #7c3aed, #1e293b);
}
```

### Contenu
Pour modifier le contenu, éditez les composants correspondants :
- **Informations personnelles** : `src/components/Resume.jsx`
- **Compétences** : `src/components/Skills.jsx`
- **Projets** : `src/components/Projects.jsx`
- **Navigation** : `src/components/Header.jsx`

## 🌟 Sections principales

### 1. Header
- Navigation sticky avec effet de flou
- Liens vers réseaux sociaux
- Design responsive

### 2. À propos (Resume)
- Photo de profil avec effet de survol
- Présentation personnelle
- Statistiques rapides
- Bouton de téléchargement du CV

### 3. Compétences (Skills)
- Grille interactive des technologies
- Catégorisation par domaine
- Animations au survol
- Design responsive

### 4. Projets (Projects)
- Cartes de projets avec statuts
- Technologies utilisées
- Liens vers GitHub
- Design moderne avec hover effects

### 5. Footer
- Informations de contact
- Navigation rapide
- Liens vers réseaux sociaux
- Copyright dynamique

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## ⚡ Performance

- **Lazy loading** des images
- **Code splitting** automatique
- **Optimisation CSS** avec Tailwind
- **Compression** des assets

## 🔧 Configuration avancée

### Variables d'environnement
Créez un fichier `.env` pour personnaliser :
```env
VITE_SITE_TITLE=Portfolio de KAMRAIN Majda
VITE_CONTACT_EMAIL=kamrainmajda98@gmail.com
```

### Déploiement
Le projet est prêt pour le déploiement sur :
- **Vercel** : `vercel --prod`
- **Netlify** : `netlify deploy --prod`
- **GitHub Pages** : Configurez dans les actions GitHub



## 📞 Contact

- **Email** : kamrainmajda98@gmail.com
- **LinkedIn** : [majda-kamrain-7633671a9](https://www.linkedin.com/in/majda-kamrain-7633671a9/)
- **GitHub** : [majda-k](https://github.com/majda-k)


