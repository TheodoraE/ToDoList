/////////////////// Structure Générale //////////////////
let body = document.body;
let br = document.createElement('br');

// Créer les éléments
    // Section
let section = document.createElement('section');
body.prepend(section);

let divTitre = document.createElement('div');
let divContenu = document.createElement('div');

section.append(divTitre, divContenu);

    // DivTitre
let h1 = document.createElement('h1');
h1.innerHTML = "Ma ToDo List";
divTitre.append(h1);

    // DivContenu
let divc;
var divsC;
for (let i = 0; i < 3; i++) {
    divc = document.createElement('div');
    divContenu.append(divc);
    divsC = divContenu.querySelectorAll('div');
};

    // Div 1 Contenu
let div1Label = document.createElement('label');
div1Label.innerHTML = "Ajouter une tâche :";

let div1Input = document.createElement('input');
div1Input.value = "";

let boutonAjout = document.createElement('button');
boutonAjout.innerHTML = "Ajouter";

divsC[0].append(div1Label, br, div1Input, boutonAjout);

    // Div 2 Contenu
let bouton;
let boutonsC2;
for (let i = 0; i < 3; i++) {
    bouton = document.createElement('button');
    divsC[1].append(bouton);
    boutonsC2 = divsC[1].querySelectorAll('button');
    switch(i){
        case 0:
            boutonsC2[0].innerHTML = "À faire";
            break;
        case 1:
            boutonsC2[1].innerHTML = "Terminé";
            break;
        case 2:
            boutonsC2[2].innerHTML = "Tous";
            break;
    }
};

    //Div 3 Contenu
// Rien
//////////////////////////////////////////////////////////
////////////////////// Style Général ////////////////////
// body
body.style.margin = "0%";
body.style.padding = "1%";
body.style.backgroundColor = "Linen";
// section
section.style.margin = "0% 10%";
// divTitre
divTitre.style.backgroundColor = "DodgerBlue";
divTitre.style.borderRadius = "5px";
divTitre.style.padding = "0.5% 1%";
divTitre.style.marginBottom = "2%";
    // h1 divTitre
h1.style.color = "white";
h1.style.fontWeight = "bold";
// div Contenu
divContenu.style.backgroundColor = "white";
divContenu.style.borderRadius = "5px";
divContenu.style.padding = "2%";
divContenu.style.borderTop = "3px solid DodgerBlue";
    // div0 Contenu
divsC[0].style.borderBottom = "solid 3px Linen";
divsC[0].style.paddingBottom = "2%";
        // Input
div1Input.style.border = "2px solid Linen";
div1Input.style.borderRadius = "5px";
    // div1 Contenu
divsC[1].style.display = "flex";
divsC[1].style.justifyContent = "flex-end";
divsC[1].style.padding = "2% 0%";
    // div2 Contenu
divsC[2].style.padding = "1% 0%"

// boutons
let allBoutons = document.querySelectorAll('button');
for (let i = 0; i < allBoutons.length; i++) {
    allBoutons[i].style.backgroundColor = "MediumPurple";
    allBoutons[i].style.color = "white";
    allBoutons[i].style.border = "none";
    allBoutons[i].style.borderRadius = "5px";
    allBoutons[i].style.margin = "0.5%";
    allBoutons[i].style.padding = "0.5% 1%"
}

//////////////////////////////////////////////////////////
////////////////////// Mise en fonction ////////////////////

// Bouton Ajout
boutonAjout.addEventListener('click', function(){
    if (div1Input.value != ""){

        // div tâche (1 unité de tâche)
        let divTache = document.createElement('div');
        divTache.setAttribute('class', "divTache");
        divTache.style.backgroundColor = "Gainsboro";
        divTache.style.height = "max-content";
        divTache.style.padding = "2%";
        divTache.style.margin = "1% 0%";
        divTache.style.borderRadius = "4px";
        divsC[2].append(divTache);

            // div Span et span
        let divSpan = document.createElement('div');
        let spanTache = document.createElement('span');
        spanTache.innerHTML = div1Input.value;
        divSpan.style.width = "80%"
        divSpan.append(spanTache);

            // div Icon et icons
        let divIcon = document.createElement('div');
                // Icon check
        let iconCheck = document.createElement('i');
        iconCheck.setAttribute('class', "fas fa-check-circle");
        iconCheck.style.marginRight = "25px";
        iconCheck.style.color = "MediumTurquoise"
                // Icon Edit
        let iconEdit = document.createElement('i');
        iconEdit.setAttribute('class', "fas fa-edit");
        iconEdit.style.marginRight = "25px";
        iconEdit.style.color = "Khaki"
                // Icon Delete
        let iconDelete = document.createElement('i');
        iconDelete.setAttribute('class', "fas fa-trash-alt");
        iconDelete.style.marginRight = "25px";
        iconDelete.style.color = "red";
        iconDelete.setAttribute('id', "iconDel");
        divIcon.append(iconCheck, iconEdit, iconDelete);

        divTache.style.display = "flex";
        divTache.style.justifyContent = "space-between";
        // Tous les icons
        let icons = divIcon.querySelectorAll('i');

        divTache.append(divSpan, divIcon)

        // Valeur de Input
        div1Input.value = "";
        
        // 1er icon : Valider la tâche
        iconCheck.addEventListener('click', function(){
            if(divTache.style.backgroundColor == "green"){
                divTache.style.backgroundColor = "Gainsboro";
            } else {
                divTache.style.backgroundColor = "green";
            }
        });
        // 2ème icon : Modifier la tâche
        iconEdit.addEventListener('click', function(){
            spanTache.style.display = "none";
            iconCheck.style.display = "none";
            iconEdit.style.display = "none";
            iconDelete.style.display = "none";
            // icone Sauvegarder
            let iconSave = document.createElement('i');
            iconSave.setAttribute('class', "fas fa-save");
            iconSave.style.marginRight = "20px";
            iconSave.style.color = "Khaki"
            divIcon.append(iconSave);

            // Sauvegarder
            iconSave.addEventListener('click', function(){
                inputEditValue = inputEdit.value;
                inputEdit.style.display = "none";
                spanTache.innerHTML = inputEditValue;
                spanTache.style.display = "block";
                iconCheck.style.display = "inline-block";
                iconEdit.style.display = "inline-block";
                iconDelete.style.display = "inline-block";
                iconSave.style.display = "none";
            });

            // Input pour modifier
            let inputEdit = document.createElement('input');
            divSpan.append(inputEdit);

            // Sauvegarder avec la touche ENTER
            body.addEventListener('keydown', function(e){
                if (e.keyCode === 13) {
                    if (inputEdit.value != ""){
                        iconSave.click();
                    };
                };
            });
        });
        // 3ème icon : Supprimer la tâche
        iconDelete.addEventListener('click', function(){
            // Display
            spanTache.style.display = "none";
            iconCheck.style.display = "none";
            iconEdit.style.display = "none";
            iconDelete.style.display = "none";
            // Créer un dexième span pour le remplacer
            let spanTache2 = document.createElement('span');
            spanTache2.innerHTML = "Êtes-vous sûr de vouloir supprimer cette tâche ?";
            spanTache2.style.color = "red";
            divSpan.append(spanTache2);
            // Créer des boutons OUI et NON
            let boutonOUI = document.createElement('button');
            boutonOUI.innerHTML = "OUI";
            boutonOUI.style.backgroundColor = "green";
            boutonOUI.style.color = "white";
            boutonOUI.style.marginRight = "5px";
            boutonOUI.style.borderRadius = "5px";
            boutonOUI.style.border = "none";
            let boutonNON = document.createElement('button');
            boutonNON.innerHTML = "NON";
            boutonNON.style.backgroundColor = "red";
            boutonNON.style.color = "white";
            boutonNON.style.marginRight = "5px";
            boutonNON.style.borderRadius = "5px";
            boutonNON.style.border = "none";
            divIcon.append(boutonOUI, boutonNON);

            // Bouton OUI
            boutonOUI.addEventListener('click', function(){
                divsC[2].removeChild(divTache);
            });
            // Bouton NON
            boutonNON.addEventListener('click', function(){
                iconCheck.style.display = "inline-block";
                iconEdit.style.display = "inline-block";
                iconDelete.style.display = "inline-block";
                boutonOUI.style.display = "none";
                boutonNON.style.display = "none";
                spanTache.style.display = "block";
                spanTache2.style.display = "none";
            });
        });
        
        //// Boutons ACTIONS
        let tacheAll = divsC[2].querySelectorAll('.divTache');

        for (let i = 0; i < tacheAll.length; i++) {
            // bouton "À faire"
            boutonsC2[0].addEventListener('click', function(){
                if (tacheAll[i].style.backgroundColor != "green") {
                    tacheAll[i].style.display = "flex";
                } else {
                    tacheAll[i].style.display = "none";
                };
            });
            // bouton "Terminé"
            boutonsC2[1].addEventListener('click', function(){
                if (tacheAll[i].style.backgroundColor != "green") {
                    tacheAll[i].style.display = "none";
                } else {
                    tacheAll[i].style.display = "flex";
                };
            });
            // bouton "Tous"
            boutonsC2[2].addEventListener('click', function () {
                tacheAll[i].style.display = 'flex'
            });
        };
    };
});

// Ajouter une tâche avec la touche ENTER
body.addEventListener('keydown', function(e){
    if (e.keyCode=== 13){
        if (div1Input.value != ""){
            boutonAjout.click()
        };
    };
});
