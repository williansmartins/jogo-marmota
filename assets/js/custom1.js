var quantidade = 15;
var tempo = 1000;

$( document ).ready(function() {


	for (var i = 1; i <=quantidade; i++) {
		$(".tabuleiro").append('<div class="casinha" id="'+i+'">' +
			'<img class="imagem imagem1 visibility-hidden" src="images/marmota2.jpg" width="100" /> ' +
			'<img class="imagem imagem2 visibility-hidden" src="images/marmota1.jpg" width="100" />' +
		'</div>');
	}
	
	//$(".tabuleiro .casinha .imagem2").removeClass('hide');

	$(".tabuleiro .casinha .imagem").css('visibility', 'hidden');

	var myVar = setInterval(apresentar, tempo);
});

function apresentar() {
	var numeroRandomico = Math.floor(Math.random() * quantidade) + 1;
  	$(".tabuleiro .casinha .imagem").css('visibility', 'hidden');
  	$(".tabuleiro .casinha#"+numeroRandomico+" .imagem1").css('visibility', 'visible');
  	console.info("numeroRandomico" + numeroRandomico);
}
 
function stopColor() {
  clearInterval(myVar);
}