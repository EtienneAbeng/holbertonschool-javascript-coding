const fs = require('fs');

const countStudents = (path) => {
  const fields = {}; // Objet pour stocker les étudiants par filière
  let data;

  // Lire le fichier de manière synchrone
  try {
    data = fs.readFileSync(path);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Convertir en chaîne de caractères, diviser en lignes et filtrer les lignes vides
  data = data.toString().split('\n').filter((element) => element.length > 0);
  data.shift(); // Supprimer la première ligne (en-tête)

  // Traiter chaque ligne
  data.forEach((element) => {
    const row = element.split(',');
    if (row[3] in fields) {
      fields[row[3]].push(row[0]); // Ajouter à la filière existante
    } else {
      fields[row[3]] = [row[0]]; // Créer une nouvelle filière
    }
  });

  // Afficher le nombre total d'étudiants
  console.log(`Number of students: ${data.length}`);
  
  // Afficher le nombre d'étudiants par filière
  for (const field in fields) {
    const list = fields[field];
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.toString().replace(/,/g, ', ')}`);
  }
};

module.exports = countStudents;
