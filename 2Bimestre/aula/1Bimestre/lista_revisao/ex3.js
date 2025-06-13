//a) Quais são as formas de capturar um elemento HTML. Por exemplo, quero capturar uma div para alterar seu conteúdo
var div = document.getElementById('minha-div');
var divs = document.getElementsByClassName('minha-classe');
var divs = document.getElementsByTagName('div');
var div = document.querySelector('.minha-classe');
var divs = document.querySelectorAll('.minha-classe');

//b) Uma vez que o elemento foi capturado, quais são as formas de alterar seu conteúdo? Por exemplo, quero escrever “UTFPR” dentro da div capturada. 
var div = document.getElementById('minha-div');
div.innerHTML = 'UTFPR';

var div = document.getElementById('minha-div');
div.textContent = 'UTFPR';

var div = document.getElementById('minha-div');
div.innerText = 'UTFPR';
