var dano = Number(prompt("Digite aqui como estão seus danos: "));
var saude = Number(prompt("Digite aqui como está sua saúde: "));

function PersonagemMorreu(dano, saude){
    if(dano>saude){
        return 1;
    }
    else{
        return 0;
    }
}
document.write(PersonagemMorreu(dano,saude));