// Fonction d'enregistrement du dresseur
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var trainerName = document.getElementById("trainerName").value;
    var email = document.getElementById("email").value;
  
    // Stockage des informations dans un cookie (exemple avec localStorage)
    var trainer = { name: trainerName, email: email };
    localStorage.setItem("trainer", JSON.stringify(trainer));
  });
  
  // Exemple de liste de Pokémon
  var pokemonData = [
    { id: 1, name: "Pikachu", stats: [80, 50, 60, 70, 90, 75] },
    { id: 2, name: "Bulbasaur", stats: [65, 70, 45, 55, 70, 45] },
    { id: 3, name: "Charizard", stats: [78, 84, 78, 109, 85, 100] },
    // Ajoutez plus de Pokémon ici...
  ];
  
  // Affichage des cartes Pokémon
  var pokemonListContainer = document.getElementById("pokemonList");
  pokemonData.forEach(function(pokemon) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${pokemon.name}</h3><button class="add-btn">Ajouter à l'équipe</button>`;
    pokemonListContainer.appendChild(card);
  
    card.querySelector(".add-btn").addEventListener("click", function() {
      var team = getTeamFromCookie(); // Récupération de l'équipe depuis le cookie
      if (team.length >= 6)

      