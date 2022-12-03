var pares = [];
function exibePar(n1, n2){
    while(n1<=n2){
        if((n1%2)==0){
            pares.push(n1)
        }
        n1++
    }
}
exibePar(32, 321);
console.log(pares);