$(function(){
	//var screenwith = $(window).width();
	var selected = $('nav ul li').filter('.nav-active');
	/*alert(screenwith);
	if(screenwith >= 768 && screenwith <= 992)
	{
		$('nav ul li:eq(0)').remove();
		for (var i = 0; i < 6; i++) 
		{
			$('nav ul li:eq('+i+')').removeClass('col-md-1 col-lg-1');
			$('nav ul li:eq('+i+')').addClass('col-sm-2 col-lg-2');
		}
	}
	/*$('nav ul li').hover(function() {
		selected.removeClass('nav-active');
		$(this).addClass('nav-active');
		$(this).filter('a').css('color', '#fff');
	}, function() {
		$(this).removeClass('nav-active');
		selected.addClass('nav-active');
		$(this).filter('a').css('color', '#000');
	});*/
	$('nav ul li a').hover(function() {
		selected.removeClass('nav-active');
		$(this).parents('li').addClass('nav-active');
		$(this).css('color', '#fff');
		if ($(this).parents('li') != $('nav ul li:eq(1)'))
		{
			$(this).children('img').addClass('img-invert');
		}
	}, function() {
		$(this).parents('li').removeClass('nav-active');
		$(this).filter('a').css('color', '#777');
		if ($(this).parents('li') == $('nav ul li:eq(1)')) 
		{
			$('nav ul li:eq(1)').children('img').addClass('img-invert');
		}
		$(this).children('img').removeClass('img-invert');
		selected.addClass('nav-active');
	});
})