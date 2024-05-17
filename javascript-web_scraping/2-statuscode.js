#!/usr/bin/node

const request = require('request');

// Récupérer l'URL à partir des arguments de la ligne de commande
const url = process.argv[2];

// Faire une requête GET à l'URL spécifiée
request.get(url, (error, response) => {
  if (error) {
    // En cas d'erreur, afficher l'erreur
    console.error(error);
    return;
  }
  // Afficher le code de statut de la réponse
  console.log(`code: ${response.statusCode}`);
});
