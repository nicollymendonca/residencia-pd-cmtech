let titulo = document.querySelector("h1").innerHTML;
let descricao = document.querySelector("#descricao").innerHTML;
let lista = document.querySelector("#lista").innerHTML;
let listaItens = document.querySelectorAll(".itens").innerHTML;
let listaFrutas = document.querySelector("#frutas").innerHTML;
let quadrados = document.querySelector("#quadrados").innerHTML;

console.log(titulo);
console.log(descricao);
for(i=0;i<listaItens.lenght;i++){
    console.log(listaItens[i].innerHTML)
}

listaItens[2].innerHTML = "Bolsa";
console.log("==========================")
console.log("O elemento 3 foi alterado: ")
console.log("==========================")

for(i=0;i<listaItens.lenght;i++){
    console.log(listaItens[i].innerHTML)
}

listaItens.innerHTML = "<li>Lanches</li>"
listaItens.innerHTML += "<li>Água</li>"

let frutas = ["Maçã", "Banana", "Uva", "Abacaxi"];
for(i=0;i<frutas.length;i++){
    listaFrutas.innerHTML += "<li>"+frutas[i]+"</li>"
}

quadrados.innerHTML = "<div id='Q1' style='background: red; width: 100px; height: 100px'></div>"
quadrados.innerHTML += "<div id='Q2' style='background: blue; width: 200px; height: 200px'></div>"
