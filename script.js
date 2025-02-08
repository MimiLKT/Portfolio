const starContainer = document.querySelector('.stars-background');

// Crée 50 étoiles aléatoires
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Position et taille aléatoires
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  const size = Math.random() * 3 + 1; // Taille entre 1px et 4px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  starContainer.appendChild(star);
}

function toggleLights() {
  let windows = document.querySelectorAll('.window');
  windows.forEach(window => {
      if (Math.random() > 0.5) {
          window.classList.add('lit');
      } else {
          window.classList.remove('lit');
      }
  });
}

// Changer les lumières toutes les 2 secondes
setInterval(toggleLights, 4000);

let ufo = document.querySelector(".ufo");
    let rotations = 3;
    const maxRotations = 8;

    function getRandomPosition() {
        let maxX = window.innerWidth - 80; // Limite largeur écran
        let maxY = window.innerHeight - 40; // Limite hauteur écran
        let x = Math.random() * maxX;
        let y = Math.random() * maxY;
        return { x, y };
    }

    function moveUfo() {
        if (rotations < maxRotations) {
            let pos = getRandomPosition();
            ufo.style.transition = "transform 3s ease-in-out";
            ufo.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            rotations++;

            setTimeout(moveUfo, 2000); // Attend 2 sec avant le prochain mouvement
        }
    }

    // Lancement du mouvement
    moveUfo();
    
const spaceMusic = new Audio("https://www.fesliyanstudios.com/play-mp3/539");
spaceMusic.volume = 0.3; // Volume modéré

// Lancer la musique après une interaction pour éviter les blocages des navigateurs
document.addEventListener("click", () => {
    if (spaceMusic.paused) {
        spaceMusic.play();
    }
});
