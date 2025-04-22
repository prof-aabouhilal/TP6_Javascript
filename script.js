// Récupération des éléments HTML
const menuLinks = document.querySelectorAll("#menu a");
const images = document.querySelectorAll(".gallery-img");
const themeButton = document.getElementById("theme-toggle");
const body = document.body;

// Ajouter un événement de survol sur chaque lien du menu pour changer la couleur
menuLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    link.style.color = "#ff6347"; // Changer la couleur au survol
  });

  link.addEventListener("mouseout", function () {
    link.style.color = ""; // Réinitialiser la couleur lorsque la souris quitte
  });
});

// Ajouter un événement de clic sur chaque image pour afficher un message dans la console
images.forEach((image) => {
  image.addEventListener("click", function () {
    console.log(`Vous avez cliqué sur l'image : ${image.alt}`);
  });
});

// Ajouter un événement de clic sur le bouton pour changer le thème de la page
themeButton.addEventListener("click", function () {
  body.classList.toggle("dark-theme"); // Basculer entre le thème clair et sombre
});
