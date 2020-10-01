var compteur=0;
var randomOrdi=0;
var signeOrdi="";
var signeUti="";
function changeImage(signe) {
    if (signe=="pierre") {
        document.getElementById("image").src="pierre.jpg";
        signeUti="pierre";
    }
    else if (signe=="feuille") {
        document.getElementById("image").src="feuille.jpg";
        signeUti="feuille";
    }
    else {
        document.getElementById("image").src="ciseaux.jpg";
        signeUti="ciseaux";
    }
    compteur++;
    console.log("compteur: " +compteur);
    document.getElementById("compteur").innerText=compteur;

    choixOrdi();
console.log("choix de l'ordinateur : " + signeOrdi);
console.log("choix de l'utilisateur : " + signeUti);
    if (signeOrdi==signeUti) {
        console.log("egalité");
    }
}
function choixOrdi() {
    randomOrdi=Math.round(Math.random()*3);
    console.log(randomOrdi);
    if (randomOrdi==1) {
        signeOrdi="pierre";
    }
    else if (randomOrdi==2) {
        signeOrdi="feuille";
    } else {
        signeOrdi="ciseaux";
    }
    changeOrdi(signeOrdi);
}

function changeOrdi(signe) {
    if (signe=="pierre") {
        document.getElementById("signeOrdi").src="pierre.jpg";
    }
    else if (signe=="feuille") {
        document.getElementById("signeOrdi").src="feuille.jpg";
    }
    else {
        document.getElementById("signeOrdi").src="ciseaux.jpg";
    }
}

function changeNom() {
    var person =window.prompt("Quel est votre nom ?")
    if(person != null) {
        document.getElementById("joueur").innerHTML=person;
    }
}