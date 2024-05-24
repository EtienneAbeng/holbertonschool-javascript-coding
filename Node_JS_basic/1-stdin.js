// Affiche un message de bienvenue et demande le nom de l'utilisateur
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Écoute l'événement 'readable' sur stdin
process.stdin.on('readable', () => {
  // Lit les données de stdin
  const name = process.stdin.read();
  
  // Si des données ont été lues, affiche le nom de l'utilisateur
  if (name !== null) {
    // Utilise trim() pour supprimer les espaces et les sauts de ligne superflus
    process.stdout.write(`Your name is: ${name.trim()}\n`);
  }
});

// Écoute l'événement 'end' sur stdin, qui se produit quand l'utilisateur termine l'entrée
process.stdin.on('end', () => {
  // Affiche un message de fermeture
  process.stdout.write('This important software is now closing\n');
});
