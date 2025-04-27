// Além do conteúdo, é possível alterar propriedades CSS dos elementos HTML? É possível acrescentar e remover propriedades também?

// 1. acessando a propiedade style do elemento diretamente
var elemento = document.getElementById('minha-div')
elemento.style.color = 'blue'
elemento.style.fontSize = '20px'

// 2. Usado setAttribute para manipulações mais gerais
var elemento = document.getElementById('minha-div')
elemento.setAttribute('style', 'color: green; font-size: 18px;')

// 3. usando a propiedade cssText 
var elemento = document.getElementById('minha-div');
elemento.style.cssText = "color: red; font-size: 18px; background-color: yellow;";




