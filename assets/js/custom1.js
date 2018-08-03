$( document ).ready(function() {

	var casinha = '<div class="casinha">' +
		'<img class="imagem imagem1" src="images/marmota2.jpg" width="100" /> ' +
		'<img class="imagem imagem2" src="images/marmora1.jpg" width="100" />' +
	'</div>';
 

 
	for (var i = 1; i <=15; i++) {
		$(".tabuleiro").append('<div class="casinha" id="'+i+'">' +
			'<img class="imagem imagem1" src="images/marmota2.jpg" width="100" /> ' +
			'<img class="imagem imagem2" src="images/marmora1.jpg" width="100" />' +
		'</div>');
	}
});