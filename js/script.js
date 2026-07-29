document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle 
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Header Scroll 
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scroll 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Appointment Button Alert 
    const apptBtn = document.querySelectorAll('.appointment-btn');
    apptBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Redirecting to Appointment Booking...");
           
        });
    });
});
// Button Animation
const buttons = document.querySelectorAll('.btn, .hero-btn, .nav-btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-4px) scale(1.05)';
        button.style.transition = '0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });

    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.96)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-4px) scale(1.05)';
    });
});
// Smooth Page Transition
document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');

    if (href && href.endsWith('.html')) {
        link.addEventListener('click', function () {
            document.body.style.opacity = '0';

            setTimeout(() => {
                window.location = href;
            }, 250);
        });
    }
});