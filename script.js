// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


// Ensure ScrollTrigger is available
if (typeof ScrollTrigger === 'undefined') {
    console.log('ScrollTrigger not loaded, loading from CDN...');
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    script.onload = () => {
        gsap.registerPlugin(ScrollTrigger);
        console.log('ScrollTrigger loaded successfully');
    };
    document.head.appendChild(script);
}

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function () {
    // Scroll to top immediately when DOM is ready
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Also scroll to top on page load
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('svg');

            // Toggle content visibility
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';

                // Animate content appearance
                gsap.fromTo(content,
                    { opacity: 0, height: 0 },
                    { opacity: 1, height: 'auto', duration: 0.3, ease: 'power2.out' }
                );
            } else {
                gsap.to(content, {
                    opacity: 0,
                    height: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            }
        });
    });
});

// Simple Page Load Animation - Elements appear once and stay visible
window.addEventListener('load', () => {
    // Scroll to top on page load - multiple methods for reliability
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force scroll to top after a short delay
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 100);

    // Also scroll to top when page is refreshed
    if (performance.navigation.type === 1) {
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 200);
    }
    // Ensure testimonials are visible first
    gsap.set('.testimonial-card', { opacity: 1, scale: 1 });

    // Hero Section - Appear at specific times
    gsap.set('.animate-fade-in-left', { opacity: 0, x: -100 });
    gsap.set('.animate-fade-in-right', { opacity: 0, x: 100 });
    gsap.set('.floating', { opacity: 0, scale: 0 });

    // Appear at 0.8s
    gsap.to('.animate-fade-in-left', {
        duration: 0.1,
        x: 0,
        opacity: 1,
        ease: 'none',
        delay: 0.8
    });

    // Appear at 1.0s
    gsap.to('.animate-fade-in-right', {
        duration: 0.1,
        x: 0,
        opacity: 1,
        ease: 'none',
        delay: 1.0
    });

    // Appear at 1.2s
    gsap.to('.floating', {
        duration: 0.1,
        scale: 1,
        opacity: 1,
        ease: 'none',
        delay: 1.2
    });

    // Scroll-triggered animations for other sections
    gsap.set('.card-hover', { opacity: 0, x: -100 });
    gsap.set('.testimonial-card', { opacity: 0, x: -100 });
    gsap.set('.faq-toggle', { opacity: 0, x: -100 });
    gsap.set('.cta-button', { opacity: 0, x: -100 });

    // Fallback: If ScrollTrigger is not available, use delayed animations
    if (typeof ScrollTrigger === 'undefined') {
        console.log('Using fallback animations');
        gsap.to('.card-hover', { duration: 0.8, x: 0, opacity: 1, stagger: 0.1, ease: 'power2.out', delay: 2 });
        gsap.to('.testimonial-card', { duration: 0.8, x: 0, opacity: 1, stagger: 0.1, ease: 'power2.out', delay: 3 });
        gsap.to('.faq-toggle', { duration: 0.8, x: 0, opacity: 1, stagger: 0.1, ease: 'power2.out', delay: 4 });
        gsap.to('.cta-button', { duration: 0.8, x: 0, opacity: 1, ease: 'power2.out', delay: 5 });
        return;
    }

    // Feature cards - scroll triggered
    gsap.to('.card-hover', {
        scrollTrigger: {
            trigger: '.card-hover',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Hero text elements - Appear at specific times
    gsap.set('.animate-fade-in-left h1', { opacity: 0, y: 30 });
    gsap.set('.animate-fade-in-left p', { opacity: 0, y: 30 });

    // Heading appears at 0.3s
    gsap.to('.animate-fade-in-left h1', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'none',
        delay: 0.3
    });

    // Paragraph appears at 0.6s
    gsap.to('.animate-fade-in-left p', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'none',
        delay: 0.6
    });

    // Testimonials - scroll triggered
    gsap.to('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // FAQ items - scroll triggered
    gsap.to('.faq-toggle', {
        scrollTrigger: {
            trigger: '.faq-toggle',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // CTA button - scroll triggered
    gsap.to('.cta-button', {
        scrollTrigger: {
            trigger: '.cta-button',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        ease: 'power2.out'
    });

    // Force scroll to top one more time after animations are set up
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 500);

    // Alternative scroll-based animations using Intersection Observer
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.classList.contains('card-hover') ||
                    element.classList.contains('testimonial-card') ||
                    element.classList.contains('faq-toggle') ||
                    element.classList.contains('cta-button')) {

                    gsap.to(element, {
                        duration: 0.8,
                        x: 0,
                        opacity: 1,
                        ease: 'power2.out'
                    });

                    // Stop observing after animation
                    observer.unobserve(element);
                }
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    document.querySelectorAll('.card-hover, .testimonial-card, .faq-toggle, .cta-button').forEach(el => {
        observer.observe(el);
    });


});

// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
});

// Hover Effects for Cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mouseenter', function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
});

// Button Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cta, .cta-button').forEach(button => {
        button.addEventListener('mouseenter', function () {
            gsap.to(this, {
                duration: 0.2,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function () {
            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('hidden');

            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                gsap.fromTo(mobileMenu,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                );
            } else {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        mobileMenu.classList.add('hidden');
                    }
                });
            }
        });
    }
});
