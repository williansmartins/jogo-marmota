var quantidade = 15;
var velocidade = 2000;

$( document ).ready(function() {
	popularCasinhas();
	esconderMarmotas();
	animarMarmotas();
	prepararAcaoDasMarmotas();
});

function prepararAcaoDasMarmotas(){
	$(".imagem1").click(function(){
		console.info($(this));
		var id = $(this).parent().attr('id');
		console.info(id);

		$(".tabuleiro .casinha .imagem").hide();
  		$(".tabuleiro .casinha#"+id+" .imagem2").show();
	});
}

function animarMarmotas(){
	var myVar = setInterval(apresentar, velocidade);
}

function popularCasinhas(){
	for (var i = 1; i <=quantidade; i++) {
		var casinha = '<div class="casinha" id="'+i+'">' +
			'<img class="imagem imagem1" src="images/marmota1.jpg" width="100" /> ' +
			'<img class="imagem imagem2" src="images/marmota2.jpg" width="100" />' +
		'</div>';

		$(".tabuleiro").append(casinha);
	}
}

function esconderMarmotas(){
	$(".tabuleiro .casinha .imagem").hide();
}

function apresentar() {
	var numeroRandomico = Math.floor(Math.random() * quantidade) + 1;
  	$(".tabuleiro .casinha .imagem").hide();
  	$(".tabuleiro .casinha#"+numeroRandomico+" .imagem1").show();
  	//console.info("numeroRandomico" + numeroRandomico);
}
 
function stopColor() {
  clearInterval(myVar);
}