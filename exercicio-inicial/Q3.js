var x = Number(prompt("Digite um número para consultar sua tabuada: "))
for(cont = 1; cont <= 10; cont++){
    var valor = x*cont
    document.write(" ",x," * ",cont," = ",valor,'<br>');
}