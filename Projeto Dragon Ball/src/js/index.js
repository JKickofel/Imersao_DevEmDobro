/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem 
*/

//Objetivo 1 -passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");
//Objetivo 2 - passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

//passo 1.2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		//passo 1.3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
		const botaoSelecionado = document.querySelector(".botao.selecionado");
		botaoSelecionado.classList.remove("selecionado");
		botao.classList.add("selecionado");

		//passo 2.2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
		const personagemSelecionado = document.querySelector(".personagem.selecionado");
		//passo 2.3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele. Senão, eles se sobrepõem.
		personagemSelecionado.classList.remove("selecionado");
		personagens[indice].classList.add("selecionado");
	});
});
