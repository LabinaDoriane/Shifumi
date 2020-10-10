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

    if (compteur==1 &&  signeUti=="pierre" && signeOrdi=="feuille" ||compteur==1 &&   signeUti=="feuille" && signeOrdi=="ciseaux" ||compteur==1 &&   signeUti=="ciseaux" && signeOrdi=="pierre") {
        document.getElementById("led1").style.backgroundColor="red";
        document.getElementById("led.1").style.backgroundColor="green";
    }
    else if ( compteur==1 &&  signeOrdi=="pierre" && signeUti=="feuille" || compteur==1 &&  signeOrdi=="feuille" && signeUti=="ciseaux" || compteur==1 &&  signeOrdi=="ciseaux" && signeUti=="pierre") {
        document.getElementById("led1").style.backgroundColor="green";
        document.getElementById("led.1").style.backgroundColor="red";
    }
    else if (compteur==1) {
        document.getElementById("led1").style.backgroundColor="orange";
        document.getElementById("led.1").style.backgroundColor="orange";
    }
    


    if (compteur==2 && signeUti=="pierre" && signeOrdi=="feuille" ||compteur==2 && signeUti=="feuille" && signeOrdi=="ciseaux" ||compteur==2 &&signeUti=="ciseaux" && signeOrdi=="pierre") {
        document.getElementById("led2").style.backgroundColor="red";
        document.getElementById("led.2").style.backgroundColor="green";
    }
    else if (compteur==2 && signeOrdi=="pierre" && signeUti=="feuille" || compteur==2 && signeOrdi=="feuille" && signeUti=="ciseaux" || compteur==2 && signeOrdi=="ciseaux" && signeUti=="pierre") {
        document.getElementById("led2").style.backgroundColor="green";
        document.getElementById("led.2").style.backgroundColor="red";
    }
    else if (compteur==2 ) {
        document.getElementById("led2").style.backgroundColor="orange";
        document.getElementById("led.2").style.backgroundColor="orange";
    }



    if (compteur==3 && signeUti=="pierre" && signeOrdi=="feuille" ||compteur==3 && signeUti=="feuille" && signeOrdi=="ciseaux" ||compteur==3 &&signeUti=="ciseaux" && signeOrdi=="pierre") {
        document.getElementById("led3").style.backgroundColor="red";
        document.getElementById("led.3").style.backgroundColor="green";
    }
    else if (compteur==3 && signeOrdi=="pierre" && signeUti=="feuille" || compteur==3 && signeOrdi=="feuille" && signeUti=="ciseaux" || compteur==3 && signeOrdi=="ciseaux" && signeUti=="pierre") {
        document.getElementById("led3").style.backgroundColor="green";
        document.getElementById("led.3").style.backgroundColor="red";
    }
    else if (compteur==3 ) {
        document.getElementById("led3").style.backgroundColor="orange";
        document.getElementById("led.3").style.backgroundColor="orange";
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