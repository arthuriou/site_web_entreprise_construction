# KAD BTP SARL - Site Web

Ce dépôt contient le site web vitrine de KAD BTP SARL, une entreprise spécialisée dans l'étude, la conception et la réalisation de travaux de bâtiment et de travaux publics au Togo.

## Structure du projet

```
site_web_kadbtp/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── construction-d-une-nouvelle-maison-en-beton.jpg
│   ├── des-collegues-souriants-de-l-entrepot-scannent-le-code-a-barres-d-une-boite-en-carton-et-discutent.jpg
│   ├── jeune-homme-de-construction-afro-americain-ignorant-en-uniforme-avec-un-casque-de-securite-tenant-et-regardant-un-rouleau-a-peinture-isole-sur-fond-orange-avec-espace-pour-copie.jpg
│   ├── jeune-homme-de-race-noire-avec-plan-stading-pres-d-un-batiment-en-verre.jpg
│   ├── maison-d-habitation-en-cours-de-construction.jpg
│   └── travailleur-afro-americain-debout-en-uniforme-portant-un-casque-de-securite-dans-une-usine.jpg
├── index.html
└── README.md
```

## Fonctionnalités

- **Design responsive optimisé** : Le site s'adapte parfaitement à tous les types d'écrans (desktop, tablettes, mobiles)
- **Thème moderne bleu/noir** : Interface élégante avec palette de couleurs bleu et noir
- **Animations au défilement** : Les éléments apparaissent avec une animation fade-in lors du défilement
- **Carrousel de témoignages** : Navigation manuelle avec boutons et swipe sur mobile
- **Chargement optimisé** : Lazy loading des images et chargement conditionnel de la carte
- **Carte interactive** : Localisation avec Leaflet chargée uniquement lorsque nécessaire
- **Menu mobile amélioré** : Navigation optimisée pour les appareils tactiles
- **Optimisation des performances** : Throttling des événements, délégation d'événements
- **Affichage adaptatif des sections** : Mise en page fluide sur tous les appareils

## Améliorations récentes

- **Optimisation mobile complète** : Correction de problèmes de responsivité et d'affichage
- **Performance améliorée** : Temps de chargement réduit et meilleure gestion des ressources
- **Texte H1 optimisé** : Meilleur affichage du titre principal sur appareils mobiles
- **Correction du défilement horizontal** : Élimination des problèmes de dépassement sur mobile
- **Formulaires adaptés** : Meilleure expérience utilisateur sur les formulaires en version mobile

## Installation

1. Clonez ce dépôt sur votre serveur web :
```
git clone https://github.com/votre-utilisateur/site-web-kadbtp.git
```

2. Assurez-vous que toutes les images sont présentes dans le dossier `images/`

3. Ouvrez `index.html` dans votre navigateur pour visualiser le site

## Personnalisation

### Couleurs
Les couleurs principales sont définies comme variables CSS dans le fichier `css/style.css` :
```css
:root {
    --primary-color: #4C7BE1; /* Couleur principale (bleu) */
    --secondary-color: #023047; /* Couleur secondaire (bleu foncé) */
    --dark-color: #121212; /* Couleur sombre */
    --light-color: #f8f9fa; /* Couleur claire */
    --gray-color: #6c757d; /* Couleur grise */
    --success-color: #28a745; /* Couleur de succès */
}
```

Modifiez ces variables pour changer le thème de couleurs du site.

### Adaptation mobile
Le site est entièrement responsive avec une attention particulière aux appareils mobiles :
- Design fluide s'adaptant automatiquement à la largeur d'écran
- Menu hamburger optimisé pour la navigation tactile
- Images et textes redimensionnés pour une meilleure lisibilité
- Performances optimisées pour les appareils à faible bande passante

## Contacts

- Adresse : Ségbé, Rue des Bâtisseurs, Lomé, Togo
- Téléphone : (+228) 92 48 58 81
- Email : contact@kadbtp.com

## Licence
Tous droits réservés © 2023 KAD BTP SARL