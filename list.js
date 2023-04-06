const aliens = [
  { name: 'Heatblast', image: 'heatblast.jpg' },
  { name: 'Four Arms', image: 'four-arms.jpg' },
  { name: 'Diamondhead', image: 'diamondhead.jpg' },
  // Add more aliens here
];

function randomAlien() {
  const randomIndex = Math.floor(Math.random() * aliens.length);
  const randomAlien = aliens[randomIndex];
  const alienImage = document.getElementById('alien-image');
  const alienName = document.getElementById('alien-name');

  alienImage.src = randomAlien.image;
  alienImage.alt = randomAlien.name;
  alienName.innerText = randomAlien.name;
}
