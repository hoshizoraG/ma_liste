// Gère l'affichage de la flèche
window.onscroll = function() {
    const scrollToTop = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.classList.add('show'); // Ajoute la classe show
        scrollToTop.classList.remove('hide'); // Retire la classe hide
    } else {
        scrollToTop.classList.add('hide'); // Ajoute la classe hide
        scrollToTop.classList.remove('show'); // Retire la classe show
    }
};

// Gère le clic sur la flèche
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.scrollTo({
        top: 0, // Remonte en haut
        behavior: 'smooth' // Défilement en douceur
    });
});

// Gère le clic sur le logo
document.getElementById('logo').addEventListener('click', function() {
    alert('bravo tu as decouvert le secret, tu as gagné le droit de me faire plus de cadeau! :)');
});

window.addEventListener('wheel', function(event) {
    // Empêche le défilement vers le haut si on est déjà en haut
    if (window.scrollY === 0 && event.deltaY < 0) {
        event.preventDefault(); // Empêche le défilement vers le haut
    }
    
    // Empêche le défilement vers le bas si on est déjà en bas
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll && event.deltaY > 0) {
        event.preventDefault(); // Empêche le défilement vers le bas
    }
}, { passive: false });
