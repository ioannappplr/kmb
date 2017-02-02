$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('#coverArea').css('height', $(window).height()+'px');
	$('.cover_photo').css('height', $(window).height()+'px');
}