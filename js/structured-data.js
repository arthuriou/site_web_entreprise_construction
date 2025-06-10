/**
 * Données structurées pour KAD BTP SARL - Amélioration SEO
 * Ce script ajoute des données structurées supplémentaires pour les témoignages clients
 */

document.addEventListener('DOMContentLoaded', function() {
    // Création des données structurées pour les témoignages
    const testimonialStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KAD BTP SARL",
        "review": [
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Marie Johnson"
                },
                "reviewBody": "L'équipe de KAD BTP SARL a dépassé toutes nos attentes. Leur professionnalisme et attention aux détails ont fait de notre rêve une réalité."
            },
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Samuel Lee"
                },
                "reviewBody": "Nous avons confié plusieurs projets à KAD BTP SARL et à chaque fois, ils ont démontré un niveau exceptionnel de professionnalisme et d'expertise."
            },
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Sophie Miller"
                },
                "reviewBody": "L'innovation et la créativité de KAD BTP SARL ont permis de transformer notre propriété en un espace moderne et respectueux de l'environnement."
            }
        ]
    };

    // Création et ajout du script au DOM
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(testimonialStructuredData);
    document.head.appendChild(script);

    // Modification des titres pour améliorer le SEO
    const updateHeadings = () => {
        const projectHeadings = document.querySelectorAll('.project-info h3');
        projectHeadings.forEach(heading => {
            heading.setAttribute('data-seo', 'projet-kad-btp');
        });
    };

    // Exécution après le chargement complet
    window.addEventListener('load', updateHeadings);
});
