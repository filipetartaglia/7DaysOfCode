// Chama a biblioteca de prompt - para fazer perguntas no nodejs
let prompt = require('prompt-sync')();

// Declara as arrays de opções de categoria da comida
let proteinas = [];
let carboidratos = [];
let frutas = [];

// Função da lista de compras
function listaCompras() {

// Pergunta se quer adicionar comida a lista
let perguntaAdicionarComida = prompt('Você quer adicionar uma comida na sua lista de compras? ');

// Transforma a string da resposta em um padrão
let respostaComida = perguntaAdicionarComida.trim().toLowerCase();

// Se for a resposta da pergunta for sim
if (respostaComida == 'sim') {
    
    let perguntaComida = prompt('Qual comida você deseja inserir? ');
    let categoriaComida = prompt('Em qual categoria esta comida se encaixa? (proteina) (carboidrato) (fruta) - (escreva igual as opções dadas): ');
    let padraCategoriaComida = categoriaComida.trim().toLowerCase();

    switch (padraCategoriaComida) {

        case 'proteina':
            proteinas.push(perguntaComida);
            break;

        case 'carboidrato':   
            carboidratos.push(perguntaComida);
        break;

        case 'fruta':
            frutas.push(perguntaComida);
        break;
            
        default:
            console.log('Categoria inválida!');
            break;
        
    };


// Se a resposta for não
} else if (respostaComida == 'não' || respostaComida == 'nao') {
    console.log('\nLista de Compras:')
    console.log('\nProteínas: ' + proteinas.join(', '));
    console.log('Carboidrato: ' + carboidratos.join(', '));
    console.log('Frutas: ' + frutas.join(', '));

    let removerItemLista = prompt('Você deseja remover algum item da lista? ');
    let padraoRemoverItemLista = removerItemLista.trim().toLowerCase();

    switch (padraoRemoverItemLista) {

        case 'sim':
            let qualItemRemover = prompt('Qual item da lista deseja remover? ').toLowerCase();
            
            for (let i = 0; i < proteinas.length; i++) {
                const elemento = proteinas[i];
                proteinas.splice(elemento);
            };
            console.log('\nProteínas: ' + proteinas.join(', '));
        break;  
       
    }

    process.exit();
     
// Caso não seja nenhuma
} else {
    console.log('Ops! Algum erro, tente novamente');
    listaCompras();
}
};

// Chama a função para executar
listaCompras();