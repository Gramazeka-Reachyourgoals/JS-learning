$(document).ready(function () {

	// hide all ul excet first
	$('.item_global>ul').hide();

	$('.item_global>h4').click(function () {

		// find exact h4 on which user click & take next ul(list) for next actions
		var findArticle = $(this).next('ul');

		// find wrapper for our h4, it's need if on the page exist more than 1 accordion
		var findWrapper = $(this).closest('.wrapper');

		// add active status to h4
		$(this).addClass('active');

		// if user click on exact elem and it shown
		if (findArticle.is(':visible')) {

			// than hide it with animation slideUp(we can use 'fast'=10 & 'slow'=600 & default(empty)=400 - miliseconds)
			findArticle.slideUp();

			// toggle active status to h4
			$(this).toggleClass('active');

		} else {

			// if elem is hide than hide all others .item-global>.item(lists) with anim slideUp 400ms
			findWrapper.find('>.item_global>.item').slideUp();
			// remove active status from all h4
			findWrapper.find('>.item_global>h4').removeClass('active');

			// and list of clicked h4 show with slideDown
			findArticle.slideDown();
			// add active status to clicked h4
			findArticle.prev('h4').addClass('active');

		};
	});
});