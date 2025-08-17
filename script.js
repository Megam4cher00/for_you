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

// ===== Mehrere Termine speichern =====
const terminForm = document.getElementById("terminForm");
const terminListe = document.getElementById("terminListe");

// Lade vorhandene Termine
function loadTermine() {
  terminListe.innerHTML = "";
  const termine = JSON.parse(localStorage.getItem("termine")) || [];

  termine.forEach((termin, index) => {
    const terminCard = document.createElement("div");
    terminCard.classList.add("termin-card");

    const title = document.createElement("h3");
    title.textContent = `💖 ${termin.titel}`;

    const date = new Date(termin.datum);
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("de-DE", options);

    const dateP = document.createElement("p");
    dateP.textContent = `📅 ${formattedDate}`;

    // 🗑️ Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteTermin(index);
    });

    terminCard.appendChild(title);
    terminCard.appendChild(dateP);
    terminCard.appendChild(deleteBtn);

    terminListe.appendChild(terminCard);
  });
}

// Termin löschen
function deleteTermin(index) {
  let termine = JSON.parse(localStorage.getItem("termine")) || [];
  termine.splice(index, 1); // Entferne Termin
  localStorage.setItem("termine", JSON.stringify(termine));
  loadTermine(); // Liste neu laden
}

// Termin hinzufügen
terminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titel = document.getElementById("terminTitel").value;
  const datum = document.getElementById("terminDatum").value;

  const termine = JSON.parse(localStorage.getItem("termine")) || [];
  termine.push({ titel, datum });

  localStorage.setItem("termine", JSON.stringify(termine));

  loadTermine(); // neu anzeigen
  terminForm.reset();
});

// Termine anzeigen beim Laden
loadTermine();

