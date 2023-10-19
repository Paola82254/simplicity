"use strict"

//Selecionando o elemento (através de descendência) que acionará o menu
const botaoMenu = document.querySelector("nav h2");
/* console.log(botaoMenu); */ 

// Selecionando a lista/menu através da classe
const menu = document.querySelector(".menu");
/* console.log(menu); */

// Selecionando o link que está dentro do nav h2 
const textoBotao = botaoMenu.querySelector("a");
/* console.log(textoBotao); */

/* Console logs comentados pq foram usados apenas para teste */

botaoMenu.addEventListener("click", function(event){
// Anular/Prevenir o comportamento do link
    event.preventDefault();
    menu.classList.toggle("aberto");
})


