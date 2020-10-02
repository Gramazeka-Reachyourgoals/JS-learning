$(document).ready(function () {

	var width = $('#slider-container').width();

	// all img has width of container
	$('.slides>img').width(width);

	// block .slides width=container*quontity of images
	$('.slides').width(width * $('.slides>img').length);

	// Positioning
	// move left block .slides, so images have space where to slide
	$('.slides').css('left', -width);

	// last img become first(user can slide forever)
	$('.slides>img:last-child').prependTo('.slides');

	// move slides forward
	function nextSlide() {
		$('.slides').animate({
			'margin-left': -width
		}, 500, function () {
			$('.slides>img:first-child').appendTo('.slides');
			$('.slides').css('margin-left', 0);
		});
	}
	// move slides backward
	function prevSlide() {
		$('.slides').animate({
			'margin-left': width
		}, 500, function () {
			$('.slides>img:last-child').prependTo('.slides');
			$('.slides').css('margin-left', 0);
		});
	}

	// Controls
	$('.next').click(nextSlide);
	$('.prev').click(prevSlide);

});