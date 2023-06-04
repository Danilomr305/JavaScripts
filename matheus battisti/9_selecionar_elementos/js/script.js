// Selecionar por ID
var tituloSecao = document.getElementById("titulo-secao");

console.log("tituloselao");

// Selecionar o elemento por Classe
var paragrafoDescricao = document.getElementById("description");

console.log("paragrafoDescricao");

var paragrafoDescricaoB = document.getElementById("description-b");

console.log("paragrafoDescricaoB");

// Selecionar elementos por tags
var paragrafos = document.getElementsByTagName("p");

console.log(paragrafos);

// Seletores por CSS - Query Selector
var itemLista = document.querySelectorAll("#lista .item");

console.log("itemLista");

//--
var titulo = document.querySelector("#titulo-secao");

console.log("titulo");

// Problema querySelector
var itemListaB = document.querySelector("#lista .item");

console.log("itensListaB");