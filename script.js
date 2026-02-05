// ===================================
// NEWSPRINT PORTFOLIO - JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const hamburger = this.querySelector('.hamburger');
            if (mobileMenu.classList.contains('active')) {
                hamburger.style.backgroundColor = 'transparent';
                hamburger.style.transform = 'rotate(45deg)';
            } else {
                hamburger.style.backgroundColor = '';
                hamburger.style.transform = '';
            }
        });
        
        // Close mobile menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const hamburger = mobileMenuBtn.querySelector('.hamburger');
                hamburger.style.backgroundColor = '';
                hamburger.style.transform = '';
            });
        });
    }
    
    // ===================================
    // SMOOTH SCROLL WITH OFFSET
    // ===================================
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===================================
    // TICKER INFINITE SCROLL
    // ===================================
    const tickerContent = document.getElementById('tickerContent');
    
    if (tickerContent) {
        // Duplicate ticker items for seamless loop
        const tickerHTML = tickerContent.innerHTML;
        tickerContent.innerHTML = tickerHTML + tickerHTML + tickerHTML;
    }
    
    // ===================================
    // HEADER SCROLL EFFECT
    // ===================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 0 0 rgba(17, 17, 17, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });
    
    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        skill.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(skill);
    });
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        
        observer.observe(item);
    });
    
    // ===================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ===================================
    // DYNAMIC YEAR IN FOOTER
    // ===================================
    const currentYear = new Date().getFullYear();
    const copyrightText = document.querySelector('.footer-copyright');
    if (copyrightText) {
        copyrightText.textContent = `© ${currentYear} Wawan. All rights reserved.`;
    }
    
    // ===================================
    // TYPING EFFECT FOR HERO (Optional Enhancement)
    // ===================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 300);
    }
    
    // ===================================
    // DOWNLOAD CV BUTTON HANDLER
    // ===================================
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Check if resume.pdf exists, if not show alert
            // In production, this would link to actual PDF file
            const resumePath = this.getAttribute('href');
            if (resumePath === 'resume.pdf') {
                e.preventDefault();
                alert('Resume PDF belum tersedia. Silakan tambahkan file resume.pdf ke root directory website Anda.');
            }
        });
    }
    
    // ===================================
    // LAZY LOADING IMAGES (if any added later)
    // ===================================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // ===================================
    // PRINT STYLES MESSAGE
    // ===================================
    console.log('%c📰 NEWSPRINT PORTFOLIO', 'font-size: 20px; font-weight: bold; font-family: serif;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #666;');
    console.log('%cDesign System: Newsprint', 'font-size: 12px; color: #666;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #111;');
    
    // ===================================
    // EASTER EGG: Konami Code
    // ===================================
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            // Easter egg activated!
            document.body.style.transform = 'rotate(0.5deg)';
            setTimeout(() => {
                document.body.style.transform = 'rotate(-0.5deg)';
            }, 100);
            setTimeout(() => {
                document.body.style.transform = 'rotate(0deg)';
            }, 200);
            
            console.log('%c🎉 EASTER EGG FOUND!', 'font-size: 16px; font-weight: bold; color: #CC0000;');
            console.log('%cYou found the secret! Selamat vibecoding! 🚀', 'font-size: 12px; color: #666;');
        }
    });
    
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}