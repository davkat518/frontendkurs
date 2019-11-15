$(document).ready(function () {
	// ESCONDER UN TOOLTIP //
	if ($('.hotspot').outerWidth() > 0) {
		var clase = $('.hotspot');
		for (var i = 0; i < clase.length; i++) {
			$('#' + clase[i].nextElementSibling.id).hide();
		}
	}

	// MAPA CUBA || NOMBRE DE LLAMDO EN HIPERLINKS: HOTS || LLAMADO POR LOCALIZACIÓN: HOTSPOT //
	$('.hots, .hotspot').hover(function (e) {
		var clase = e.target.classList[0];
		var clase = clase.substr(8, clase.length);
		$('#' + clase).fadeTo('fast', '1', function () {
			$('#' + clase).show();
		});
	}, function (e) {
		var clase = e.target.classList[0];
		var clase = clase.substr(8, clase.length);
		$('#' + clase).fadeTo('fast', '0', function () {
			$('#' + clase).hide();
		});
	});

});
