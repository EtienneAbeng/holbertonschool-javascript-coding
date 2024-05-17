#!/usr/bin/node

// Importation du module 'request' pour effectuer des requêtes HTTP
const request = require('request');
// Importation du module 'fs' pour manipuler les fichiers
const fs = require('fs');

// Récupération de l'URL de la page à partir des arguments de la ligne de commande
const url = process.argv[2];
// Récupération du chemin du fichier où enregistrer le contenu à partir des arguments de la ligne de commande
const filePath = process.argv[3];

// Effectuer une requête à l'URL spécifiée
request(url, (error, response, body) => {
  // Vérifier s'il y a une erreur lors de la requête
  if (error) {
    console.error(error);
    return;
  }

  // Écrire le contenu de la réponse dans le fichier spécifié
  fs.writeFile(filePath, body, 'utf8', (err) => {
    // Vérifier s'il y a une erreur lors de l'écriture du fichier
    if (err) {
      console.error(err);
      return;
    }
    // Afficher un message indiquant que le contenu a été enregistré avec succès
    console.log(`Contenu de ${url} enregistré dans ${filePath}`);
  });
});
