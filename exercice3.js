// Récupération des éléments HTML
let form1 = document.getElementById("form1");
let errorMessage = document.getElementById("error-message");
let successMessage = document.getElementById("success-message");

// TODO : Complétez cette fonction pour valider le formulaire avant de l'envoyer
form1.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  // TODO : Complétez la validation des champs ici
  if (name === "" || email === "") {
    // Affichez un message d'erreur si un champ est vide
    // errorMessage.textContent = "Tous les champs doivent être remplis !";
    // successMessage.textContent = '';
  } else {
    // Affichez un message de succès si tous les champs sont remplis
    // successMessage.textContent = "Formulaire soumis avec succès !";
    // errorMessage.textContent = '';
  }
});

// TODO : Complétez cette fonction pour valider l'email avant la soumission
function validateEmail(email) {
  // Ajoutez ici votre logique pour valider l'email (expression régulière par exemple)
  // const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  // return re.test(email);
}
