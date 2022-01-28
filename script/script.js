let prato = 0;
let bebida = 0;
let sobremesa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let resultado = 0;

function ativarBotaoFinalizar(){
    if (prato != 0 && bebida != 0 && sobremesa != 0){
        const botao = document.querySelector('.selecionar');
        botao.classList.add('finalizar');
        botao.classList.remove('selecionar');
        botao.innerHTML = 'Fechar pedido';
    }
}

function selecionarPrato(pratoSelecionado, preco){ 
    prato = pratoSelecionado;
    precoPrato = preco;
    let opcoes = document.querySelectorAll('.prato .opcao');
    for (let i=0; i < opcoes.length; i++){
        opcoes[i].classList.remove('selecionado');
    }
    const opcaoPrato = document.querySelector(`.${pratoSelecionado}`);
    opcaoPrato.classList.add('selecionado');
    ativarBotaoFinalizar();
}

function selecionarBebida(bebidaSelecionada, preco){
    bebida = bebidaSelecionada;
    precoBebida = preco;
    let opcoes = document.querySelectorAll('.bebida .opcao');
    for (let i=0; i < opcoes.length; i++){
        opcoes[i].classList.remove('selecionado');
    }
    const opcaoBebida = document.querySelector(`.${bebidaSelecionada}`);
    opcaoBebida.classList.add('selecionado');
    ativarBotaoFinalizar();
}

function selecionarSobremesa(sobremesaSelecionada, preco){
    sobremesa = sobremesaSelecionada;
    precoSobremesa = preco;
    let opcoes = document.querySelectorAll('.sobremesa .opcao');
    for (let i=0; i < opcoes.length; i++){
        opcoes[i].classList.remove('selecionado');
    }
    const opcaoSobremesa = document.querySelector(`.${sobremesaSelecionada}`);
    opcaoSobremesa.classList.add('selecionado');
    ativarBotaoFinalizar();

}


function finalizarPedido(){
    if (prato != 0 && bebida != 0 && sobremesa != 0){
        resultado = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
        let nome = prompt('Qual seu nome?');
        let endereco = prompt('Qual seu endereço?');
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${resultado}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.open(`https://wa.me/5512997125935?text=${encodeURIComponent(mensagem)}`);
    }
}
