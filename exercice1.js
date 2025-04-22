// Récupération des éléments HTML

// à compléter

// Définir une liste de couleurs à alterner (à compléter)
const colors = ["lightblue", "lightgreen", "lightcoral"]; // Ajoutez d'autres couleurs si nécessaire
let currentColorIndex = 0;

// TODO : Complétez cette fonction pour changer la couleur du div à chaque clic
btn1.addEventListener("click", function () {
  // Complétez cette ligne pour changer la couleur du div

  // Logique pour alterner les couleurs à chaque clic
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Modifiez cette logique si nécessaire
});

// TODO : Complétez cette fonction pour changer le texte du bouton lors du survol
btn1.addEventListener("mouseover", function () {
  // Modifiez le texte du bouton ici
});

// TODO : Complétez cette fonction pour réinitialiser le texte du bouton lorsqu'on quitte le survol
btn1.addEventListener("mouseout", function () {
  // Réinitialisez le texte ici
});
