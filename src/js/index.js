// O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da pagina para as cores do tema claro ou escuro.

// -   Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no boddy pra que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua 
//     - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema    
//     - passo 2 - dar um jeit ode pegar no JS  o elemento HTML correspondente ao boddy    
//     - passo 3 - dar um jeito de identificar o clique do usuáriono botão de troca de tema
//     - passo 4 - adicionar a classe modo-escuro no body
//     - passo 5 - trocar a imagem do botão de alterar tema pra lua

// -   objetivo 2  -  quando clicar no botão de troca de tema, caso o body ja tenha a classe modo - escuro, remover a classe para mudar pro modo claro e mudar a imagem pro Sol
//  passo 6 - verificar se body tem a classe-escuro
//     -  passo 7 - remover a classe do modo-escuro do body    
//     -  passo 8 - trocar a imagemdo botão de alterar tema pra sol.

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () =>   {
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro");

if  (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagens/sun.png");
    
    } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagens/moon.png");
    }
});