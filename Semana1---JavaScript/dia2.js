const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {

    rl.question('Qual a sua idade? ', (idade) => {

        rl.question('Qual linguagem de programação você está estudando? ', (linguagemProg) => {
            
            rl.question(`Seu nome é ${nome}, você tem ${idade} anos, e esta estudando ${linguagemProg}. Correto? `, (corretoOuNao) => {

                if (corretoOuNao == 'sim' || 'Sim' || 'Correto' || 'correto') {
                    console.log('Que bom, vamos seguir em frente!');
                } else {
                    console.log('Por favor, revise as informações!');
                }

                process.exit();
            });
            
        });
    });
});