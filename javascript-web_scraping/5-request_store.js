#!/usr/bin/node

// Importer le module 'request' pour effectuer des requêtes HTTP
const request = require('request');
// Importer le module 'fs' pour la gestion des fichiers
const fs = require('fs');

// Récupérer l'URL à partir des arguments de ligne de commande
const urlToRequest = process.argv[2];
// Récupérer le chemin du fichier où enregistrer la réponse à partir des arguments de ligne de commande
const filePathToStore = process.argv[3];

// Effectuer une requête à l'URL spécifiée
request(urlToRequest, (error, response, body) => {
  // Vérifier s'il y a eu une erreur lors de la requête
  if (error) {
    console.log(error);
  } else {
    // Écrire le contenu de la réponse dans le fichier spécifié
    fs.writeFile(filePathToStore, body, 'utf8', (error) => {
      // Gérer les erreurs lors de l'écriture dans le fichier
      if (error) {
        console.log(error);
      }
    });
  }
});
