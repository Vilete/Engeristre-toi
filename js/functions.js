/**
 * FONCTIONS DE VÉRIFICATIONS D'UN FORMULAIRE
 */

/**
 * Vérifie que la donnée reçue ne soit pas vide
 */
let notEmpty = function(value) {

    // Si la longueur de la châine est à zéro, c'est que celle-ci
    // est vide
    if (value.length === 0) {
        return false;
    }

    return true;

    // return value.length === 0;
}


/**
 * Vérifie que la donnée contient un certains nombre de caractères
 */
let isLength = function(value, min) {
    // Si la chaîne fait 5 caractères ou plus, on retourne "true"
    return value.length >= Number(min);
}


/**
 * Vérifie que la donnée soit une adresse email valide
 */
let isEmail = function(value) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;
    return pattern.test(value);
}