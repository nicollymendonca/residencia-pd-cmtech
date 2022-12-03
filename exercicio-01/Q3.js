function habilidade(skill, find){
    var i = 0;
    while(i < skill.lenght)
    {
        if(skill.indexOf('JavaScript')[i] == find)
        {
            return true;
        }
        i++;
    }
    return false;
}

var skill = ['JavaScript', 'ReactJS', 'React Native'];
var resultado = habilidade(skill, 'javascript');
console.log(resultado);