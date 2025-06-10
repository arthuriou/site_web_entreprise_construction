/**
 * Fichier JavaScript principal pour le site KAD BTP SARL
 * Inclut des fonctions pour améliorer le SEO et les performances
 */

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments du DOM une seule fois
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const scrollElements = document.querySelectorAll('.fade-in');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialNav = document.querySelectorAll('.testimonial-nav span');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const teamMembers = document.querySelectorAll('.team-member');
    const totalSlides = testimonialCards ? testimonialCards.length : 0;
    const hero = document.querySelector('.hero');
    const testimonialSliderContainer = document.querySelector('.testimonial-slider-container');
    const mapContainer = document.querySelector('.leaflet-map');

    // Rendre immédiatement visibles les deux premières sections
    document.getElementById('accueil').style.opacity = '1';
    document.getElementById('accueil').style.visibility = 'visible';
    const companyOverview = document.querySelector('.company-overview');
    if (companyOverview) {
        companyOverview.style.opacity = '1';
        companyOverview.style.visibility = 'visible';
        companyOverview.style.display = 'block';
    }

    // Amélioration de la navigation mobile
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Délégation d'événements pour les liens de navigation
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Fermer le menu mobile quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && 
                !e.target.closest('nav') && 
                !e.target.closest('.hamburger')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Fonction optimisée pour détecter les éléments visibles - modifiée pour éviter les problèmes
    const handleScrollAnimation = () => {
        // Utiliser requestAnimationFrame pour optimiser les performances
        window.requestAnimationFrame(() => {
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            
            scrollElements.forEach((el) => {
                // Rendre les éléments visibles par défaut
                el.classList.add('visible');
                el.classList.add('always-visible');
                
                // Ce bloc est conservé mais ne sera pas exécuté en raison de la condition toujours fausse
                // maintenant que nous avons ajouté 'always-visible' à tous les éléments
                if (!el.classList.contains('always-visible')) {
                    const elementTop = el.getBoundingClientRect().top;
                    if (elementTop <= viewportHeight - 100) {
                        el.classList.add('visible');
                        el.classList.add('always-visible');
                    }
                }
            });
        });
    };
    
    // Appeler immédiatement la fonction pour rendre les éléments visibles
    handleScrollAnimation();
    
    // Optimiser le scroll listener avec throttling
    let scrollThrottleTimer;
    window.addEventListener('scroll', () => {
        if (!scrollThrottleTimer) {
            scrollThrottleTimer = setTimeout(() => {
                scrollThrottleTimer = null;
                
                // Vérifier le header sticky
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }, 100); // Limiter à 10 fois par seconde
        }
    });

    // Fonction pour la hauteur responsive de la section hero - modifiée pour corriger les problèmes
    const adjustHeroHeight = () => {
        if (!hero) return;
        
        // S'assurer que la section hero est visible en premier lieu
        hero.style.visibility = 'visible';
        hero.style.display = 'block';
        hero.style.opacity = '1';
        
        // Gérer différemment pour mobile
        if (window.innerWidth <= 768) {
            if (hero.classList.contains('mobile-adjusted')) {
                // S'adapter à la hauteur de l'écran
                const viewportHeight = window.innerHeight;
                const headerHeight = header ? header.offsetHeight : 70;
                
                // Définir une hauteur minimale plus adaptée aux petits écrans
                hero.style.paddingTop = `${headerHeight + 20}px`; // Augmenté pour éviter chevauchement
                hero.style.minHeight = `${viewportHeight}px`;
            }
        } else {
            // Pour les écrans plus grands, comportement normal
            hero.style.minHeight = '100vh';
            hero.style.paddingTop = '100px'; // Augmenté pour plus d'espace
        }
    };

    // Appliquer immédiatement les ajustements
    adjustHeroHeight();

    // Optimiser l'événement de redimensionnement avec debouncing
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            adjustHeroHeight();
            fixMobileIssues();
        }, 250);
    });

    // Fonction pour corriger des problèmes spécifiques sur mobile
    const fixMobileIssues = () => {
        // Corriger les problèmes d'affichage des images sur mobile
        const projectImages = document.querySelectorAll('.project-image');
        const teamImages = document.querySelectorAll('.member-image');
        const mobileTitle = document.querySelector('.mobile-title');
        
        if (window.innerWidth <= 576) {
            // Optimiser les images de projet
            projectImages.forEach(img => {
                img.style.height = '180px';
            });
            
            // Optimiser les images d'équipe
            teamImages.forEach(img => {
                img.style.height = '200px';
            });
            
            // Optimiser le titre H1 pour mobile
            if (mobileTitle) {
                mobileTitle.style.fontSize = '26px';
                mobileTitle.style.lineHeight = '1.3';
                mobileTitle.style.padding = '0 5px';
                mobileTitle.style.textAlign = 'center';
            }
        } else if (window.innerWidth <= 768) {
            // Tablettes et mobiles larges
            if (mobileTitle) {
                mobileTitle.style.fontSize = '32px';
                mobileTitle.style.lineHeight = '1.3';
                mobileTitle.style.textAlign = 'center';
            }
        } else {
            // Réinitialiser pour les grands écrans
            projectImages.forEach(img => img.style.height = '');
            teamImages.forEach(img => img.style.height = '');
            
            if (mobileTitle) {
                mobileTitle.style.fontSize = '';
                mobileTitle.style.lineHeight = '';
                mobileTitle.style.textAlign = '';
                mobileTitle.style.padding = '';
            }
        }
    };

    // Appeler la fonction au chargement
    window.addEventListener('load', () => {
        adjustHeroHeight();
        fixMobileIssues();
        
        // Assurer la visibilité des sections principales
        document.getElementById('accueil').style.opacity = '1';
        document.getElementById('accueil').style.visibility = 'visible';
        document.getElementById('accueil').style.display = 'block';
        
        if (companyOverview) {
            companyOverview.style.opacity = '1';
            companyOverview.style.visibility = 'visible';
            companyOverview.style.display = 'block';
        }
    });

    // Gestion du carrousel de témoignages
    if (testimonialSlider && testimonialNav.length > 0) {
        let currentSlide = 0;

        const showSlide = (index) => {
            // Ajuster l'index
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            // Déplacer le slider
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Mettre à jour les indicateurs
            testimonialNav.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        };

        // Naviguer avec les dots
        testimonialNav.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
            else if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
        });

        // Support du swipe sur mobile
        if (testimonialSliderContainer) {
            let touchStartX = 0;
            
            testimonialSliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});
            
            testimonialSliderContainer.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > 50) {
                    showSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
                }
            }, {passive: true});
        }
        
        // Initialiser le premier slide
        showSlide(0);
    }

    // Filtrer les membres de l'équipe
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Mettre à jour l'état actif des boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Récupérer la catégorie de filtre
            const filter = btn.getAttribute('data-filter');
            
            // Filtrer les membres
            teamMembers.forEach(member => {
                if (filter === 'all') {
                    member.style.display = 'block';
                } else {
                    const memberCategory = member.getAttribute('data-category');
                    if (memberCategory === filter) {
                        member.style.display = 'block';
                    } else {
                        member.style.display = 'none';
                    }
                }
            });
        });
    });

    // Navigation fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation des nombres dans les statistiques
    const animateNumbers = () => {
        const statsElements = document.querySelectorAll('.stat-item h3, .stat-card h3');
        
        statsElements.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000; // 2 secondes
            const step = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const updateNumber = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            // Vérifier si l'élément est visible avant d'animer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateNumber();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(stat);
        });
    };

    // Animation de chargement initial
    const runInitialAnimation = () => {
        document.body.classList.add('page-loaded');
        
        // Animer les éléments visibles dans la fenêtre
        setTimeout(() => {
            // Gérer d'abord les éléments avec des délais personnalisés
            const elementsWithCustomDelay = Array.from(document.querySelectorAll('[data-delay]'));
            
            elementsWithCustomDelay.forEach(el => {
                const delay = parseInt(el.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    el.classList.add('visible');
                    el.classList.add('always-visible');
                }, delay);
            });
            
            // Puis animer les autres éléments visibles
            const elementsInViewport = Array.from(scrollElements).filter(el => 
                el.getBoundingClientRect().top < window.innerHeight && !el.hasAttribute('data-delay')
            );
            
            elementsInViewport.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('visible');
                    el.classList.add('always-visible');
                }, (i * 150) + 500); // Commence après les éléments avec délais personnalisés
            });
        }, 100);
    };

    // Ajouter des attributs data-category aux membres de l'équipe pour le filtrage
    teamMembers.forEach(member => {
        const role = member.querySelector('p').textContent.toLowerCase();
        if (role.includes('architecte')) {
            member.setAttribute('data-category', 'architects');
        } else if (role.includes('ingénieur')) {
            member.setAttribute('data-category', 'engineers');
        } else if (role.includes('chef') || role.includes('directeur')) {
            member.setAttribute('data-category', 'managers');
        } else {
            member.setAttribute('data-category', 'others');
        }
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('prestationForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulation d'envoi de formulaire
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                alert('Votre demande a été envoyée avec succès. Nous vous contacterons bientôt !');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Smooth scrolling pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fermer le menu mobile si ouvert
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }
                
                // Mise à jour de l'URL pour le SEO sans rechargement de page
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });

    // Animation au défilement
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (position < screenPosition) {
                element.classList.add('active');
            }
        });
    }
    
    // Vérifier les éléments au chargement initial
    checkFade();
    
    // Et au défilement
    window.addEventListener('scroll', checkFade);
    
    // Témoignages - Carrousel
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const navDots = document.querySelectorAll('.testimonial-nav span');
    
    if (testimonialSlider && testimonialCards.length > 0) {
        let currentIndex = 0;
        const cardWidth = testimonialCards[0].offsetWidth;
        
        // Fonction pour mettre à jour le carrousel
        function updateSlider() {
            testimonialSlider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            // Mettre à jour les points de navigation
            navDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Événements des boutons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCards.length - 1;
                updateSlider();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < testimonialCards.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        }
        
        // Points de navigation
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    }
    
    // Filtres d'équipe
    const filterButtons = document.querySelectorAll('.filter-btn');
    const teamMembers = document.querySelectorAll('.team-member');
    
    if (filterButtons.length > 0 && teamMembers.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Filtrer les membres de l'équipe
                teamMembers.forEach(member => {
                    if (filter === 'all' || member.classList.contains(filter)) {
                        member.style.display = 'block';
                    } else {
                        member.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Appliquer les attributs data pour le SEO
    document.querySelectorAll('.service-card').forEach(card => {
        card.setAttribute('data-service', 'construction-togo');
    });
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('data-project', 'kadbtp-realisation');
    });

    // Améliorer la performance en chargeant les images progressivement
    if ('loading' in HTMLImageElement.prototype) {
        // Si le navigateur supporte le lazy loading natif
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            // S'assurer que l'attribut est correctement défini
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback pour les navigateurs plus anciens
        const lazyLoad = () => {
            document.querySelectorAll('img[data-src]').forEach(img => {
                if (img.getBoundingClientRect().top <= window.innerHeight) {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                }
            });
        };
        
        // Charger les images visibles initialement
        lazyLoad();
        
        // Et au défilement
        window.addEventListener('scroll', lazyLoad);
    }
}); 