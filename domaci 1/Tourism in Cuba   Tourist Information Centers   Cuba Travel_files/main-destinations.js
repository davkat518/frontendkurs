$(document).ready(function () {
	// MODULO DE NUESTROS DESTINOS HOME SLIDES CON CAPTION (MUSTRA Y OCULTA) //
	$('.boxgrid.captionfull').hover(function () {
		$(".cover", this).stop().animate({ top: '0px' }, { queue: false, duration: 160 });
		$(".ancla", this).stop().animate({ top: '35%' }, { queue: false, duration: 160 });
	}, function () {
		$(".cover", this).stop().animate({ top: '80%' }, { queue: false, duration: 160 });
		$(".ancla", this).stop().animate({ top: '3%' }, { queue: false, duration: 160 });
	});
});