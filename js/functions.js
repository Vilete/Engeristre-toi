/**
 * FONCTIONS DE VÉRIFICATIONS D'UN FORMULAIRE
 */

// Vérifie que la donnée reçue ne soit pas vide
let notEmpty = function(value) {

    // Si la longueur de la châine est à zéro, c'est que celle-ci
    // est vide
    if (value.length === 0) {
        return false;
    }

    return true;

    // return value.length === 0;
}