// Startdatum: 13.08.2025
const startDate = new Date("2025-08-13T00:00:00");

function updateTimeTogether() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timeTogether").textContent =
    `${days} Tage, ${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden ❤️`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();
