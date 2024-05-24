// Affichez le message de bienvenue
console.log('Welcome to Holberton School, what is your name?');

// Écoutez l'entrée standard (stdin)
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  // Supprimez les sauts de ligne et espaces inutiles
  const name = data.trim();
  
  // Affichez le nom de l'utilisateur
  console.log(`Your name is: ${name}`);

  // Affichez le message de fermeture
  console.log('This important software is now closing');
  
  // Arrêtez le processus
  process.exit();
});