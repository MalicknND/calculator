function addition(nombreA, nombreB) {
  let result = nombreA + nombreB;
  return result;
}
function multiplication(nombreA, nombreB) {
  let result = nombreA * nombreB;
  return result;
}
function soustraction(nombreA, nombreB) {
  let result = nombreA - nombreB;
  return result;
}
function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error('Vous ne pouvez pas diviser par 0.');
  }
  let result = nombreA / nombreB;
  return result;
}

do {
  var choix = Number(
    prompt(
      'Que souhaitez vous faire ? \n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n'
    )
  );
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
do {
  var premierNombre = Number(prompt('Entrer le premier nombre'));
  var deuxiemeNombre = Number(prompt('Entrer le deuxieme nombre'));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

try {
  switch (choix) {
    case 1:
      var resultat = addition(premierNombre, deuxiemeNombre);
      break;

    case 2:
      var resultat = multiplication(premierNombre, deuxiemeNombre);
      break;

    case 3:
      var resultat = soustraction(premierNombre, deuxiemeNombre);
      break;

    case 4:
      var resultat = division(premierNombre, deuxiemeNombre);

      break;

    default:
      throw new Error('Une erreur est survenue');
  }

  alert('Voici le résultat ' + resultat);
} catch (error) {
  alert(error);
}
