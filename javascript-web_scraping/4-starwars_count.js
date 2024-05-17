#!/usr/bin/node

// Importation du module 'request' pour effectuer des requêtes HTTP
const request = require('request');

// Récupération de l'URL de l'API Star Wars à partir des arguments de ligne de commande
const apiUrl = process.argv[2];

// ID du personnage "Wedge Antilles"
const characterId = 18;

// Effectuer une requête à l'API Star Wars pour obtenir les détails des films
request(apiUrl, (err, response, body) => {
    // Vérifier si une erreur est survenue
    if (err) {
        console.error(err);
    }

    // Analyser la réponse JSON
    const data = JSON.parse(body);

    // Initialiser le compteur de films
    let count = 0;

    // Parcourir les films
    for (const film of data.results) {
        // Vérifier si le casting contient l'URL du personnage "Wedge Antilles"
        for (const characterUrl of film.characters) {
            if (characterUrl.includes(characterId)) {
                // Incrémenter le compteur de films
                count++;
                break; // Sortir de la boucle interne une fois que le personnage est trouvé
            }
        }
    }


    // Afficher le nombre de films dans lesquels "Wedge Antilles" apparaît
    console.log(count);
})