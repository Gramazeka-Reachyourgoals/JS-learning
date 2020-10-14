$(document).ready(function () {

	// hide all posts except first
	$('.tab-content>div:not(":first-of-type")').hide();
	// add to all tabs item with decorative line
	$('<div class="line"></div>').appendTo('.tab-menu li');
	// find .line element and give him width 100%
	$('.tab-menu li:first-of-type').find(':first').width('100%');

	// add attributes with count number 4 every tab
	$('.tab-menu li').each(function(i){
		$(this).attr('data-tab', 'tab'+i);
	});
	
	// add attributes with count number 4 every post
	$('.tab-content>div').each(function(i){
		$(this).attr('data-tab', 'tab'+i);
	});

	// if click on some tab code do this
	$('.tab-menu li').on('click', function(){
		
		// var with number of tab on which user click
		var dataTab = $(this).data('tab');
		// take closest to clicked tab, element .tab-wrapper  
		var getWrapper = 	$(this).closest('.tab-wrapper');
		// find div class="line" of clicked tab
		var line = $(this).find('.line');

		// remove class from all tabs
		getWrapper.find('.tab-menu li').removeClass('active');

		// add class active to clicked tab
		$(this).addClass('active');

		// hide all div.line if click
		getWrapper.find('.line').width(0);
		// animate line of active tab
		line.animate({'width':'100%'}, 'fast');

		// hide all content if click
		getWrapper.find('.tab-content>div').hide();
		// show post with attr data-tab that equals those tab on which clicked
		getWrapper.find('.tab-content>div[data-tab='+dataTab+']').show();

	})

});