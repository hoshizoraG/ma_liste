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

document.getElementById('logo').addEventListener('click', function() {
    var gif = document.getElementById('gif');
    
    // Show the GIF and restart it
    gif.style.display = 'block';
    gif.src = gif.src;  // Restart the GIF by resetting the source

    // Optional: Hide the GIF after 5 seconds (adjust as needed)
    setTimeout(function() {
        gif.style.display = 'none';
    }, 5000);  // Hide after 5 seconds
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

// Fonction qui vérifie la position des éléments pour les rendre visibles au défilement
function checkVisibility() {
    const boxes = document.querySelectorAll('.box');
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Position du défilement

    // Parcours toutes les box et vérifie si elles sont visibles dans la fenêtre
    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top + scrollTop; // Position top de la box
        if (boxTop < scrollTop + windowHeight - 100) { // Si l'élément est visible dans la fenêtre
            box.classList.add('visible'); // Ajouter la classe "visible" pour activer l'animation
        }
    });
}

// Ajouter un événement qui déclenche la fonction lorsque l'utilisateur fait défiler la page
window.addEventListener('scroll', checkVisibility);

// Appel initial pour vérifier si les éléments sont déjà visibles au chargement
document.addEventListener('DOMContentLoaded', checkVisibility);
