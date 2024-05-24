const { readFile } = require('fs');

// Compte le nombre d'étudiants par filière dans un fichier CSV donné
function countStudents(fileName) {
  const students = {}; // Stocke les étudiants par filière
  const fields = {}; // Compte le nombre d'étudiants par filière
  let length = 0; // Compte le nombre total d'étudiants

  // Renvoie une promesse pour lire le fichier de manière asynchrone
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        // En cas d'erreur, rejette la promesse avec un message spécifique
        reject(Error('Cannot load the database'));
      } else {
        // Convertit les données en chaîne de caractères et les divise en lignes
        const lines = data.toString().split('\n');
        
        // Parcourt chaque ligne du fichier
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1; // Incrémente le nombre total d'étudiants

            // Divise la ligne en colonnes
            const field = lines[i].toString().split(',');

            // Ajoute l'étudiant à la liste de sa filière
            if (students[field[3]]) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Incrémente le compteur d'étudiants pour cette filière
            if (fields[field[3]]) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        // Affiche le nombre total d'étudiants
        const l = length - 1;
        console.log(`Number of students: ${l}`);
        
        // Affiche le nombre d'étudiants par filière et leur liste
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }

        // Résout la promesse avec les données du fichier
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
