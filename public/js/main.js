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
let plan = [];
divsC[2].append(plan)

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
// Variables en dehors de l'Event
let divTache;

let divIcon;
let iconCheck;
let iconEdit;
let iconDelete;
let iconSave;
let icons;

let divSpan;
let spanTache;

let inputEdit;
let inputEditValue;


// Bouton Ajout
boutonAjout.addEventListener('click', function(){
    // div tâche (1 unité de tâche)
    divTache = document.createElement('div');
    divTache.setAttribute('class', "divTache");
    divTache.style.backgroundColor = "Gainsboro";
    divTache.style.height = "45px";
    divTache.style.padding = "2%";
    divTache.style.margin = "1% 0%";
    divTache.style.borderRadius = "4px";
    divsC[2].append(divTache);

        // div Span et span
    divSpan = document.createElement('div');
    spanTache = document.createElement('span');
    spanTache.innerHTML = div1Input.value;
    divSpan.append(spanTache);

        // div Icon et icons
    divIcon = document.createElement('div');
            // Icon check
    iconCheck = document.createElement('i');
    iconCheck.setAttribute('class', "fas fa-check-circle");
    iconCheck.style.marginRight = "25px";
    iconCheck.style.color = "MediumTurquoise"
            // Icon Edit
    iconEdit = document.createElement('i');
    iconEdit.setAttribute('class', "fas fa-edit");
    iconEdit.style.marginRight = "25px";
    iconEdit.style.color = "Khaki"
            // Icon Delete
    iconDelete = document.createElement('i');
    iconDelete.setAttribute('class', "fas fa-trash-alt");
    iconDelete.style.marginRight = "25px";
    iconDelete.style.color = "red";
    iconDelete.setAttribute('id', "iconDel");
    divIcon.append(iconCheck, iconEdit, iconDelete);

    divTache.style.display = "flex";
    divTache.style.justifyContent = "space-between";
    // Tous les icons
    icons = divIcon.querySelectorAll('i');

    divTache.append(divSpan, divIcon)

    // Valeur de Input
    div1Input.value = "";
    // console.log(icons) 
    
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
        iconSave = document.createElement('i');
        iconSave.setAttribute('class', "fas fa-save");
        iconSave.style.marginRight = "20px";
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
        inputEdit = document.createElement('input');
        divSpan.append(inputEdit);
    });

    //

})


