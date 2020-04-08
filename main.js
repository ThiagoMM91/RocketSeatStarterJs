function mostraAlert (){
    alert('botao clicado - onclick -> inline')
}

/*Puxamos o valor do input que tem como nome "nomeUser"
Aqui o valor ainda vem como cod html, como podemos ver no console.log*/
var inputElement = document.querySelector('input[name=nomeUser]');
console.log(inputElement)

/*Ao clicar no botão, puxamos o valor adicionado no inputElement pelo 
queryselector acima á var NomeInserido e fazemos alert usando a var.*/
var btnNome = document.querySelector(".btnAddNome");
btnNome.addEventListener("click", function (){

    /*Aqui pegamos o valor de inputElement após o click, ou seja
    após enviar um novo valor para o input. Assim ficando o que for
    inserido no espaço pelo user*/
    var nomeInserido = inputElement.value;
    alert(nomeInserido);
});


var botaoClick = document.querySelector(".botaoAdd"); 
botaoClick.addEventListener("click", function(){
    alert('fui clicado (eventlistener)');
});

var botaoClick2 = document.querySelector(".botaoAdic"); 
botaoClick2.onclick = function(){
    alert('Fui Clicado (onclick)');
};

var linkElement = document.createElement('a');
linkElement.setAttribute('href','www.skylab.rocketseat.com.br/node/curso-java-script')
linkElement.setAttribute('title', 'Site do curso de JS da Rocketseat')

var textElement = document.createTextNode('Acessar site da RocketSeat');
linkElement.appendChild(textElement);

var containerElement = document.querySelector('.appLink');
containerElement.appendChild(linkElement)

var boxElement = document.querySelector('.box');
boxElement.style.width = '100';
boxElement.style.height = '100';
boxElement.style.backgroundColor = 'cyan';

