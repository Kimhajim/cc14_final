document.addEventListener('DOMContentLoaded', function () {
    // COOKIE BANNER FIX
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookie');

    if (!localStorage.getItem('cookieAccepted')) {
        cookieBanner.style.display = 'block'; // Show banner if cookies not accepted
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', function () {
            localStorage.setItem('cookieAccepted', 'true'); // Store user acceptance
            cookieBanner.style.display = 'none'; // Hide banner
        });
    }

    //  MENU TOGGLE FIX
    const menuToggle = document.querySelector('#menuToggle');
    const menuContent = document.querySelector('#menuContent');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            menuContent.style.display = isExpanded ? 'none' : 'block';
        });
    }

    // 🛠️ SLIDER FUNCTIONALITY FIX
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');
    const chevronLeft = document.querySelector('.chevron-left');
    const chevronRight = document.querySelector('.chevron-right');

    function updateSlider() {
        if (slider) {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    function changeSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    if (chevronLeft) chevronLeft.addEventListener('click', prevSlide);
    if (chevronRight) chevronRight.addEventListener('click', changeSlide);

    setInterval(changeSlide, 3000); // Auto-slide every 3 seconds

    // 🛠️ SWIPE FUNCTIONALITY FIX
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        if (touchStartX - touchEndX > 100) changeSlide(); // Swipe left
        if (touchEndX - touchStartX > 100) prevSlide();   // Swipe right
    }

    const bannerSlider = document.querySelector('.banner-slider');
    if (bannerSlider) {
        bannerSlider.addEventListener('touchstart', handleTouchStart);
        bannerSlider.addEventListener('touchend', handleTouchEnd);
    }
});
