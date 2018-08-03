$( document ).ready(function() {

	var quantidade = 15;

	for (var i = 1; i <=quantidade; i++) {
		$(".tabuleiro").append('<div class="casinha" id="'+i+'">' +
			'<img class="imagem imagem1" src="images/marmota2.jpg" width="100" /> ' +
			'<img class="imagem imagem2" src="images/marmota1.jpg" width="100" />' +
		'</div>');
	}

	$(".tabuleiro").css({cursor : 'url(../images/marreta.jpg), auto'});

});