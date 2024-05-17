// Import the fs (file system) module from Node.js
const fs = require('fs');

// Fonction pour lire et afficher le contenu d'un fichier
function readFileContent(filePath) {
  // Read the content of the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Si une erreur s'est produite pendant la lecture, afficher l'objet d'erreur
      console.error(err);
      return;
    }
    // Afficher le contenu du fichier
    console.log(data);
  });
}

// Obtenir le chemin du fichier à partir des arguments de la ligne de commande
const filePath = process.argv[2];

// Appeler la fonction pour lire et afficher le contenu du fichier
readFileContent(filePath);
