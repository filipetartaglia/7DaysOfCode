const prompt = require('prompt-sync')();

// Variavel com o número correto
let numeroCorreto = Math.floor(Math.random() * 11);

// Perguntar o valor do chute do usuário
let perguntarValor = prompt('Chute um número de 0 a 10: ');

if (perguntarValor == numeroCorreto) {
    console.log(`Parabéns você acertou o número que é ${numeroCorreto}`);

} else {

    while (perguntarValor != numeroCorreto) {

        perguntarValor = prompt('Errou! Chute o número novamente (mais 2 tentativas): ');

        if (perguntarValor == numeroCorreto) {
            console.log(`Parabéns você acertou o número que é ${numeroCorreto}`);

        } else {
            perguntarValor = prompt('Errou! Chute o número novamente (mais 1 tentativa): ');
            
                if (perguntarValor == numeroCorreto) {
                    console.log(`Parabéns você acertou o número que é ${numeroCorreto}`);
                    
                } else {
                    perguntarValor = prompt(`Errou, acabou as tentativas! o número era: ${numeroCorreto}`)
                    break;
                };
        };
    };
};