let prato = 0;
let bebida = 0;
let sobremesa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let total = 0;

function ativarBotaoFinalizar(){
    const botao = document.querySelector('.selecionar');
    if (botao !== null){
        if (prato != 0 && bebida != 0 && sobremesa != 0){
            botao.classList.add('finalizar');
            botao.classList.remove('selecionar');
            botao.innerHTML = 'Fechar pedido';
        }
    }
}

function selecionarPrato(pratoSelecionado, preco){ 
    prato = document.querySelector(`.${pratoSelecionado} .titulo`).innerText;
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
    bebida = document.querySelector(`.${bebidaSelecionada} .titulo`).innerText;
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
    sobremesa = document.querySelector(`.${sobremesaSelecionada} .titulo`).innerText;;
    precoSobremesa = preco;
    let opcoes = document.querySelectorAll('.sobremesa .opcao');
    for (let i=0; i < opcoes.length; i++){
        opcoes[i].classList.remove('selecionado');
    }
    const opcaoSobremesa = document.querySelector(`.${sobremesaSelecionada}`);
    opcaoSobremesa.classList.add('selecionado');
    ativarBotaoFinalizar();

}

function ativarConfirmacao(){
    if (prato != 0 && bebida != 0 && sobremesa != 0){
        total = precoPrato + precoBebida + precoSobremesa;
        const confirmacao = document.querySelector('.confirmacao');
        confirmacao.classList.remove('escondido');
        document.querySelector('.opcao-prato').innerHTML = prato;
        document.querySelector('.preco-prato').innerHTML = precoPrato.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcao-bebida').innerHTML = bebida;
        document.querySelector('.preco-bebida').innerHTML = precoBebida.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcao-sobremesa').innerHTML = sobremesa;
        document.querySelector('.preco-sobremesa').innerHTML = precoSobremesa.toFixed(2).toString().replace('.', ',');
        document.querySelector('.preco-total').innerHTML = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }
}

function cancelar(){
    const confirmacao = document.querySelector('.confirmacao');
    confirmacao.classList.add('escondido');
}

function finalizarPedido(){
    if (prato != 0 && bebida != 0 && sobremesa != 0){
        total = total.toFixed(2);
        let nome = prompt('Qual seu nome?');
        let endereco = prompt('Qual seu endereço?');
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.open(`https://wa.me/5512997125935?text=${encodeURIComponent(mensagem)}`);
    }
}