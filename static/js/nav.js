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
	// $('nav ul li a').hover(function() {
	// 	selected.removeClass('nav-active');
	// 	$(this).parents('li').addClass('nav-active');
	// }, function() {
	// 	$(this).parents('li').removeClass('nav-active');
	// 	selected.addClass('nav-active');
	// });

	function navshow(num) {
		selected.removeClass('nav-active');
		switch (num) {
			case 2:
			case 3:
			case 4: 
				$(".realnav>li:eq(3)").addClass('nav-active');
				break;
			case 0:
				$(".realnav>li:eq(1)").addClass('nav-active');
				break;
			case 1:
				$(".realnav>li:eq(2)").addClass('nav-active');
				break;
			case 5:
				$(".realnav>li:eq(4)").addClass('nav-active');
				break;
			default:
				break;

		}
	}
})