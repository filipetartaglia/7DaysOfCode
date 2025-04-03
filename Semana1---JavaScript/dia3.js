const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta inicial
rl.question('Escolha uma área para seguir na programação: Frontend ou Backend? ' ,(qualAreaProgramacao) => {

    // Escolhas do usuario
    const areaEscolhida = qualAreaProgramacao.trim().toLowerCase();

    // Caso escolha frontend
    switch (areaEscolhida) {
        case 'frontend':

            // Pergunta 2
            rl.question('Frontend, ótima escolha! Agora escolha: React ou Vue? ', (linguagemFront) => {

                const formalizaLinguagemFront = linguagemFront.trim().toLowerCase();

                // Escolher caminho do framework
                // Se for React
                if (formalizaLinguagemFront == 'react') {

                    rl.question('React, está em alta no mercado! Agora escolha: você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? opção(1) ou opção(2) ', (escolhaOpcao1) => {

                        if (escolhaOpcao1 == '1' || escolhaOpcao1 == '2'){

                            perguntarTec();
                            
                        } else {
                            console.log('Ops! Algum erro, vamos tentar novamente');
                            process.exit();
                        };
                    });

                // Se for Vue
                } else if (formalizaLinguagemFront == 'vue') {

                    rl.question('Vue, ótimo está crescendo bastante! Agora escolha: você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? opção(1) ou opção(2) ', (escolhaOpcao2) => {

                        if (escolhaOpcao2 == '1' || escolhaOpcao2 == '2') {

                            perguntarTec();
                        } else {
                            console.log('Ops! Algum erro, vamos tentar novamente');
                            process.exit();
                        } 

                    });

                // Senão é igual a erro
                } else {
                    console.log('Ops! Algum erro, vamos tentar novamente');
                    process.exit();
                }

                
            });
            break;
            

        // Caso escolha Backend
        case 'backend': 

            rl.question('Backend, ótima escolha! Agora escolha: C# ou Java? ', (linguagemBack) => {
                
                const formalizaLinguagemBack = linguagemBack.trim().toLowerCase();

                // Se for C#
                if (formalizaLinguagemBack == 'c#') {

                    rl.question('C#, está em alta no mercado! Agora escolha: você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? opção(1) ou opção(2) ', (escolhaOpcao1_2) => {
                        
                        if (escolhaOpcao1_2 == '1' || escolhaOpcao1_2 == '2'){

                            perguntarTec();
                        
                        } else {
                            console.log('Ops! Algum erro, vamos tentar novamente');
                            process.exit()
                        }

                    });

                // Se for Java
                } else if (formalizaLinguagemBack == 'java') {

                    rl.question('Java, ótima linguagem, tem bastante mercado! Agora escolha: você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? opção(1) ou opção(2) ', (escolhaOpcao2_2) => {
                        
                        if (escolhaOpcao2_2 == '1' || escolhaOpcao2_2 == '2'){

                            perguntarTec();
                        
                        } else {
                            console.log('Ops! Algum erro, vamos tentar novamente');
                            process.exit()
                        };

                    })

                // Senão é igual a erro
                } else {
                    console.log('Ops! algum erro, vamos tentar novamente')
                }

            });
            break;


        default:
            console.log('Ops! Algum erro, vamos tentar novamente');
            process.exit();
            break;
            
    };
});

function perguntarTec() {
  rl.question('E por fim, tem mais algumas tecnologias nas quais gostaria de aprender? (Digite "ok" se for positivo): ', (resposta) => {
    if (resposta.toLowerCase() === "ok") {
      
      // Perguntar pela nova tecnologia
      rl.question('Qual? ', (novaTecnologia) => {
        console.log(`${novaTecnologia} é realmente uma tecnologia muito legal!`);

        // Perguntar se deseja continuar
        perguntarSeContinua();
      });
      
    } else {
      console.log("Obrigado pelas suas respostas!");
      rl.close();
    }
  });
}

function perguntarSeContinua() {
  rl.question("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo: ", (respostaContinua) => {
    if (respostaContinua.toLowerCase() === "ok") {
      // Se o usuário responder 'ok', chama novamente a função para perguntar mais tecnologias
      perguntarTec();
    } else {
      console.log("Obrigado pelas suas respostas!");
      rl.close();
    }
  });
};