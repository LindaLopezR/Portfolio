$(document).ready(function() {

	var controller = $.superscrollorama();
	// Animación texto
	controller.addTween('#hire div', TweenMax.from( $('#hire div'), .5, {css:{opacity:0}}));

	// Animación imagenes
	controller.addTween('#showcase h2', TweenMax.from( $('#showcase h2'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#showcase p', TweenMax.from( $('#showcase p'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
  // controller.addTween('#showcase #myCarousel', TweenMax.from( $('#showcase #myCarousel'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
	$('#showcase .figure-proyect').css('position','relative').each(function() {
		controller.addTween('#showcase #gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
	});

	// Desplazamiento
	$(function(){
    $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 1000);
          return false;
        }
      }
    });
  });
});

