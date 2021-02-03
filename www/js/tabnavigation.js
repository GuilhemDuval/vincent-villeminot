//Fonction pour afficher un bouton caché
function showDiv(x){
    var id = 'hidden'+x;
    document.getElementById(id).style.position = 'static';
}

//Fonction pour masquer un bouton caché
function hideDiv(x){
    var id = 'hidden'+x;
    document.getElementById(id).style.position = 'absolute';
}
