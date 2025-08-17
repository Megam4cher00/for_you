// Startdatum: 13.03.2025
const startDate = new Date("2025-03-13T00:00:00");

// Funktion zum Berechnen der Stunden
function updateHoursTogether() {
  const now = new Date();
  const diff = now - startDate;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  document.getElementById("hoursTogether").textContent = hours + " Stunden ❤️";
}

// Initialer Aufruf + jede Minute aktualisieren
updateHoursTogether();
setInterval(updateHoursTogether, 60 * 1000);

// Audio-Button
const voiceBtn = document.getElementById("voiceBtn");
const voice = document.getElementById("voice");

voiceBtn.addEventListener("click", () => {
  voice.play();
});
