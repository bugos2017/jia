$(function(){
	var pages = [$("#index"),$("#aboutus"),$("#carousel-example-generic"),$("#server"),$("#anli"),$("#contact")];
	var num = 0;
	for (var i = pages.length - 1; i >= 0; i--) {
		pages[i].hide();
	}
	pages[0].show();   
	/*$('.service-body>li').hover(function() {
		$(this).children('button').removeClass('btn-default');
		$(this).children('button').addClass('btn-primary');
	}, function() {
		$(this).children('button').removeClass('btn-primary');
		$(this).children('button').addClass('btn-default');
	});*/
	$('.service-img li').addClass('col-md-3 col-lg-3 col-sm-6 col-xs-6');
	$('.service-body>li>button').click(function(event) {
		var old = $('.service-body>li button').filter('.btn-primary');
		var num = $(this).parents('li').index();
		var oldnum = old.parents('li').index();
		old.removeClass('btn-primary');
		old.addClass('btn-default');
		$(this).addClass('btn-primary');
		$('.img'+(oldnum+1)).hide();
		$('.img'+(num+1)).show();
	});


	$('.service-img li').hover(function() {
		$(this).children('div').show();
	}, function() {
		$(this).children('div').hide();
	});

	$("body").bind('mousewheel', function(event,delta) {
		if (delta === -1) {
			if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
				pages[num].hide();
				num = (num+1)%6;
				pages[num].show();
			}
		} else {
			if ($(document).scrollTop() == 0) {
				if (num != 0){
					pages[num].hide();
					num = (num-1)%6;
					pages[num].show();
				}
			}
		}
	});


})