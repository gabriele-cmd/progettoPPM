window.addEventListener('scroll', function() {
    const logoContainer = document.getElementById('desc-logo');
    const stickyBar = document.getElementById('sticky-bar');
    const logoRect = logoContainer.getBoundingClientRect();

    // Se il logo è sopra la finestra, mostra la sticky bar
    if (logoRect.bottom <= 0) {
        stickyBar.classList.add('visible');
    } else {
        stickyBar.classList.remove('visible');
    }
});