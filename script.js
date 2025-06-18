// Mobile menu toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(8, 8, 8, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(8, 8, 8, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Add developer illustration
function addDeveloperIllustration() {
    // Create a canvas element for the hero section background
    const heroSection = document.querySelector('.hero');
    
    // Create animated particles in the background
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '0';
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random opacity between 0.1 and 0.5
        const opacity = Math.random() * 0.4 + 0.1;
        
        // Random animation duration between 20s and 40s
        const duration = Math.random() * 20 + 20;
        
        // Apply styles
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = i % 3 === 0 ? '#6c5ce7' : (i % 3 === 1 ? '#a29bfe' : '#fd79a8');
        particle.style.opacity = opacity.toString();
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s infinite ease-in-out`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add keyframes for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-10px) translateX(-15px);
            }
            75% {
                transform: translateY(-25px) translateX(5px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Insert particles container before the first child of hero section
    heroSection.insertBefore(particlesContainer, heroSection.firstChild);
}

// Form submission
function handleFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For this demo, we'll just show a success message
            const formData = new FormData(contactForm);
            let formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Form submitted with values:', formValues);
            
            // Show success message
            contactForm.innerHTML = '<div class="success-message"><h3>Thank you for your message!</h3><p>I\'ll get back to you as soon as possible.</p></div>';
            
            // Style success message
            const successMessage = document.querySelector('.success-message');
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '20px';
            
            const successTitle = document.querySelector('.success-message h3');
            successTitle.style.color = '#6c5ce7';
            successTitle.style.marginBottom = '10px';
        });
    }
}

// Add typing animation to hero greeting
function addTypingAnimation() {
    const heroGreeting = document.querySelector('.hero-greeting');
    const originalText = heroGreeting.innerHTML;
    
    // Clear the original text
    heroGreeting.innerHTML = '';
    
    // Create a span for the cursor
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.innerHTML = '|';
    cursor.style.animation = 'blink 1s infinite';
    
    // Add keyframes for cursor blinking
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Type the text character by character
    let i = 0;
    const typeText = () => {
        if (i < originalText.length) {
            heroGreeting.innerHTML = originalText.substring(0, i + 1);
            i++;
            setTimeout(typeText, 100);
        } else {
            // Add cursor at the end
            heroGreeting.appendChild(cursor);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeText, 500);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
    initScrollAnimations();
    addDeveloperIllustration();
    handleFormSubmission();
    addTypingAnimation();
});
