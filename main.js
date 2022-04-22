const titles = document.querySelectorAll(".titre");

//On crée une boucle pour écouter le click sur chaque titre :
for(let title of titles){
    //on crée un event pour chaque clique sur chaque titre :
    title.addEventListener("click", () => {
        //on récupère le numéro du titre actif :
        let num = title.getAttribute("data-tab");
        //On enlève la class "active" de la div actuellement affichée :
        let texteActiveRemove = document.querySelector(".tabs div.active");
        texteActiveRemove.classList.remove("active");
        //On attribue la class "active" à la div cliquée par l'utilisateur grâce à la variable "num:"
        let texteActiveAdd = document.querySelector("#texte"+num);
        texteActiveAdd.classList.add("active")

        //Pour les titres : 
        //On désactive le titre actif :
        let titreActifRemove = document.querySelector("nav ul li.active")
        titreActifRemove.classList.remove("active");
        //On active le titre clické par l'utilisateur :
        let titreActiveAdd = document.querySelector("#titre"+num);
        titreActiveAdd.classList.add("active")
    })
}