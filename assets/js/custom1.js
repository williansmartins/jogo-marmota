var quantidade = 15;
var velocidade = 500;

$( document ).ready(function() {


	for (var i = 1; i <=quantidade; i++) {
		$(".tabuleiro").append('<div class="casinha" id="'+i+'">' +
			'<img class="imagem imagem1" src="images/marmota2.jpg" width="100" /> ' +
			'<img class="imagem imagem2" src="images/marmota1.jpg" width="100" />' +
		'</div>');
	}
	
	//$(".tabuleiro .casinha .imagem2").removeClass('hide');

	$(".tabuleiro .casinha .imagem").hide();

	var myVar = setInterval(apresentar, velocidade);
});

function apresentar() {
	var numeroRandomico = Math.floor(Math.random() * quantidade) + 1;
  	$(".tabuleiro .casinha .imagem").hide();
  	$(".tabuleiro .casinha#"+numeroRandomico+" .imagem2").show();
  	//console.info("numeroRandomico" + numeroRandomico);
}
 
function stopColor() {
  clearInterval(myVar);
}