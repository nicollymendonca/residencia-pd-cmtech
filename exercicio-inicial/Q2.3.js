function notas(nota){
    var nota = Number(prompt("Digite aqui a sua nota: "));
    if(nota >= 0.0 && nota <= 4.9){
        var notaF = "Sua nota é D!";
    }
    else if(nota >= 5.0 && nota <= 6.9){
        var notaF = "Sua nota é C";
    }
    else if(nota >= 7.0 && nota <= 8.9){
        var notaF = "Sua nota é B";
    }
    else{
        var notaF = "Sua nota é A!"
    }
    return notaF
}
document.write(notas());