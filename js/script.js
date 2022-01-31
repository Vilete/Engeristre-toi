/**
 * VÉRIFICATION D'UN FORMULAIRE
 */


/**
 * VÉRIFICATION DU NOM
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


/**
 * VÉRIFICATION DU PRÉNOM
 */

// Sélectionne le champ texte du prénom
let firstname = document.querySelector('#firstname');

// Applique un écouteur d'évènement sur les changements effectués dans le champ
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event
firstname.addEventListener('input', function() {
    
    let response = notEmpty(this.value);
    let error = document.querySelector('#firstnameError');

    this.style.border = '2px solid red';
    error.style.display = 'block';

    if (response) {
        this.style.border = '2px solid green';
        error.style.display = 'none';
    }
});


/**
 * VÉRIFICATION DU PSEUDO
 */

// Sélectionne le champ texte du prénom
let pseudo = document.querySelector('#pseudo');
pseudo.addEventListener('input', function() {

    // Vérfifie la longueur d'une chaîne
    let response = isLength(this.value, 5);
    let error = document.querySelector('#pseudoError');

    this.style.border = '2px solid red';
    error.style.display = 'block';

    if (response) {
        this.style.border = '2px solid green';
        error.style.display = 'none';
    }
});


/**
 * VÉRIFICATION DE L'ADRESSE EMAIL
 */
let email = document.querySelector('#email');
email.addEventListener('input', function() {

    let response = isEmail(this.value);
    let error = document.querySelector('#emailError');

    this.style.border = '2px solid red';
    error.style.display = 'block';

    if(response) {
        this.style.border = '2px solid green';
        error.style.display = 'none';
    }
});


/**
 * VÉRIFICATION DU MOT DE PASSE
 */

// Sélectionne le champ texte du prénom
let password = document.querySelector('#password');
password.addEventListener('input', function() {

    // Vérifie la longueur d'une chaîne
    let response = isLength(this.value, 6);
    let error = document.querySelector('#passwordError');

    this.style.border = '2px solid red';
    error.style.display = 'block';

    if (response) {
        this.style.border = '2px solid green';
        error.style.display = 'none';
    }
});