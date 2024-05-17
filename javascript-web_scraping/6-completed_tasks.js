#!/usr/bin/node

// Importer le module 'request' pour effectuer des requêtes HTTP
const request = require('request');

// Récupérer l'URL de l'API à partir des arguments de ligne de commande
const apiUrl = process.argv[2];

// Effectuer une requête à l'API pour obtenir les tâches
request(apiUrl, (error, response, body) => {
  // Vérifier s'il y a eu une erreur lors de la requête
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Vérifier que la requête a réussi avec un code de statut 200
  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status Code:', response.statusCode);
    return;
  }

  // Analyser la réponse JSON
  const tasks = JSON.parse(body);

  // Créer un objet pour stocker le nombre de tâches complétées par utilisateur
  const completedTasksByUser = {};

  // Parcourir chaque tâche
  for (const task of tasks) {
    // Vérifier si la tâche est complétée
    if (task.completed === true) {
      // Récupérer l'ID de l'utilisateur
      const userId = task.userId;

      // Si l'utilisateur n'est pas encore dans l'objet, l'initialiser
      if (completedTasksByUser[userId] === undefined) {
        completedTasksByUser[userId] = 0;
      }

      // Incrémenter le compteur de tâches complétées pour cet utilisateur
      completedTasksByUser[userId]++;
    }
  }

  // Afficher le nombre de tâches complétées par utilisateur
  console.log(completedTasksByUser);
});
