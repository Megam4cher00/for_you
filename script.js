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

// ===== Termin-Speicherung =====
const terminForm = document.getElementById("terminForm");
const savedTerminDiv = document.getElementById("savedTermin");

// Prüfen, ob schon ein Termin gespeichert ist
function loadTermin() {
  const termin = localStorage.getItem("termin");
  if (termin) {
    const { titel, datum } = JSON.parse(termin);
    savedTerminDiv.textContent = `📅 ${titel} am ${datum}`;
  }
}

// Termin speichern
terminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titel = document.getElementById("terminTitel").value;
  const datum = document.getElementById("terminDatum").value;

  const termin = { titel, datum };
  localStorage.setItem("termin", JSON.stringify(termin));

  loadTermin(); // neu anzeigen
  terminForm.reset();
});

// Beim Laden Termin anzeigen
loadTermin();
