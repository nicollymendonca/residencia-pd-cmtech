function experiencia(anos){
    if (anos <= 1) {
        return 'Iniciante!'
    } else if (anos > 1 && anos <= 3) { 
        return 'Intermediário!'; 
    } else if (anos > 3 && anos <= 6) {
        return 'Avançado!';
    } else if (anos >= 7) {
        return 'Jedi Master!';
    } else {
        return 'Inválido!!!';
    }
};

console.log(experiencia(7));