// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation simple des champs
            if (!validateForm(name, email, subject, message)) {
                return false;
            }
            
            // Simuler l'envoi du formulaire avec un délai
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.classList.remove('hidden');
                
                // Réinitialiser le formulaire
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
                
                // Après 5 secondes, masquer le message de succès et afficher à nouveau le formulaire
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                    contactForm.style.display = 'block';
                }, 5000);
            }, 1500);
        });
    }
    
    // Fonction pour la validation du formulaire
    function validateForm(name, email, subject, message) {
        let isValid = true;
        
        // Réinitialiser les messages d'erreur
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.remove());
        
        // Valider le nom
        if (name === '') {
            showError('name', 'Veuillez entrer votre nom complet');
            isValid = false;
        }
        
        // Valider l'email
        if (email === '') {
            showError('email', 'Veuillez entrer votre adresse e-mail');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Veuillez entrer une adresse e-mail valide');
            isValid = false;
        }
        
        // Valider le sujet
        if (subject === '') {
            showError('subject', 'Veuillez entrer un sujet');
            isValid = false;
        }
        
        // Valider le message
        if (message === '') {
            showError('message', 'Veuillez entrer votre message');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Votre message doit contenir au moins 10 caractères');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Fonction pour afficher les messages d'erreur
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = '#dc3545';
        errorMessage.style.fontSize = '14px';
        errorMessage.style.marginTop = '5px';
        errorMessage.textContent = message;
        
        field.parentNode.appendChild(errorMessage);
        field.style.borderColor = '#dc3545';
        
        // Enlever la bordure rouge lorsque l'utilisateur commence à taper
        field.addEventListener('input', function() {
            this.style.borderColor = '';
            const error = this.parentNode.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        });
    }
    
    // Fonction pour valider le format de l'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Animer les éléments de la page contact au défilement
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    checkFade(); // Vérifier au chargement initial
    
    // Animation du lien d'ancre vers le formulaire
    document.querySelectorAll('a[href="#contactForm"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const form = document.getElementById('contactForm');
            if (form) {
                form.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Mettre en évidence le formulaire avec un effet
                form.classList.add('highlight');
                
                setTimeout(() => {
                    form.classList.remove('highlight');
                }, 1000);
            }
        });
    });
    
    // Ajouter la classe CSS pour l'effet de surbrillance
    const style = document.createElement('style');
    style.textContent = `
        @keyframes formHighlight {
            0% { box-shadow: 0 0 0 rgba(255, 183, 3, 0); }
            50% { box-shadow: 0 0 20px rgba(255, 183, 3, 0.5); }
            100% { box-shadow: 0 0 0 rgba(255, 183, 3, 0); }
        }
        
        .highlight {
            animation: formHighlight 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // Afficher un message de confirmation avant de quitter la page si le formulaire est modifié
    let formModified = false;
    
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                formModified = true;
            });
        });
        
        window.addEventListener('beforeunload', function(e) {
            if (formModified && !formSuccess.classList.contains('hidden')) {
                e.preventDefault();
                e.returnValue = 'Vous avez des modifications non enregistrées. Êtes-vous sûr de vouloir quitter cette page?';
                return e.returnValue;
            }
        });
    }
}); 