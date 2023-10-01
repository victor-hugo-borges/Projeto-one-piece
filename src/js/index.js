// objetivo 1 - quando clicar no botão do personagem na lista marcar o botão como selecionado
//passo 1 - pegar os botão do personagem JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll(".botao");

//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
   botao.addEventListener("click", () => {

    desselecionarBotao();

    botao.classList.add("selecionado");

    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
 
    personagens[indice].classList.add("selecionado");
   });
});

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

