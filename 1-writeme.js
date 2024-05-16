const fs = require('fs');

// Récupérer le chemin du fichier et la chaîne à écrire depuis les arguments de la ligne de commande
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Écrire la chaîne dans le fichier
fs.writeFile(filePath, stringToWrite, 'utf8', (err) => {
  if (err) {
    // Si une erreur s'est produite pendant l'écriture, afficher l'objet d'erreur
    console.error(err);
    return;
  }
  // L'écriture est réussie
  console.log('The file was writting with success.');
});
