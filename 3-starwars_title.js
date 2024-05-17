const request = require('request'); // Importe le module 'request' pour effectuer des requêtes HTTP

// Construit l'URL de l'API Star Wars en ajoutant l'ID du film passé en argument
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

// Effectue une requête GET à l'URL de l'API Star Wars
request(url, (error, response, body) => {
  if (error) {
    // En cas d'erreur lors de la requête, affiche l'erreur
    console.error(error);
  } else if (response && response.statusCode === 200) {
    // Si la réponse existe et que le code de statut est 200, parse le corps de la réponse et affiche le titre du film
    console.log(JSON.parse(body).title);
  } else {
    // Si la réponse n'existe pas ou si le code de statut n'est pas 200, affiche un message d'erreur
    // let statusCode;
    if (response) {
      statusCode = response.statusCode;
    } else {
      statusCode = 'Unknown';
    }
    console.log('Error occurred. Status code: ' + statusCode);
  }
});
