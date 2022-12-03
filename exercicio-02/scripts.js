let titulo = document.querySelector("h1").innerHTML;
let descricao = document.querySelector("#descricao").innerHTML;
let listaItens = document.querySelectorAll(".itens");
let lista = document.querySelector("#lista");
let listaFrutas = document.querySelector("#frutas");
let quadrados = document.querySelector("#quadrados");

console.log(titulo);
console.log(descricao);
for(i=0;i<listaItens.length;i++){
    console.log(listaItens[i].innerHTML)
}

listaItens[2].innerHTML = "Bolsa";
console.log("--------------------")
console.log("O terceiro elemento foi alterado:")
console.log("--------------------")

for(i=0;i<listaItens.length;i++){
    console.log(listaItens[i].innerHTML)
}

lista.innerHTML="<li>Óculos</li>"
lista.innerHTML+="<li>Boné</li>"

let frutas =["Maçã","Banana","Uva","Abacaxi"];
for(i=0;i<frutas.length;i++){
    listaFrutas.innerHTML += "<li>"+frutas[i]+"</li>"
}

quadrados.innerHTML = "<div id='q1' style='background: red;width: 100px;height: 100px'></div>"
quadrados.innerHTML += "<div id='q2' style='background: blue;width: 200px;height: 200px; margin-top: 10px' ></div>"


