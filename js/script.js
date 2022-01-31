/**
 * VÉRIFICATION D'UN FORMULAIRE
 */

// Sélectionne le champ texte du nom
let lastname = document.querySelector('#lastname');

// Applique un écouteur d'évènement sur les changements effectués dans le champ
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event
lastname.addEventListener('input', function() {
    
    let response = notEmpty(this.value);
    // console.log(response);

    // Récupération de l'erreur à afficher si besoin
    let error = document.querySelector('#lastnameError');

    // Applique une bordure rouge par défaut
    this.style.border = '2px solid red';
    error.style.display = 'block';

    // Applique une bordure verte si le champ n'est pas vide
    // Equivalent : if (response === true) { ... }
    if (response) {
        this.style.border = '2px solid green';
        error.style.display = 'none';
    }
});