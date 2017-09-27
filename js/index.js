$(function(){
	var pages = [$("#index"),$("#aboutus"),$("#carousel-example-generic"),$("#server"),$("#anli"),$("#contact")];
	var num = 0;
	for (var i = pages.length - 1; i >= 0; i--) {
		pages[i].stop().hide();
	}
	pages[0].stop().show();
	var flag = 0;
	setInterval(function () {
		flag = 1;
	}, 2000);

	$(".whitepoint>li:eq(0)").addClass('bigpoint');   
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
		$('.img'+(oldnum+1)).stop().hide();
		$('.img'+(num+1)).stop().show();
	});


	$('.service-img li').hover(function() {
		$(this).children('div').stop().show();
	}, function() {
		$(this).children('div').stop().hide();
	});

	$("body").bind('mousewheel', function(event,delta) {
		if (delta == -1) {
			if ($(document).scrollTop() + $(window).height()+1 >= $(document).height()) {
				if (flag == 1) {
					pages[num].slideUp(1000);
					num = (num+1)%6;
					pages[num].slideDown(1000);
					flag = 0;
				}
			}
		} else {
			if ($(document).scrollTop() == 0) {
				if (num != 0){
					if (flag == 1) {
						pages[num].slideUp(1000);
						num = (num-1)%6;
						pages[num].slideDown(1000);
						flag = 0;
					}
				}
			}
		}
		//if (flag == 1) {
			$('nav ul li').filter('.nav-active').removeClass('nav-active');
			$(".whitepoint>li").removeClass('bigpoint');
			switch (num) {
				case 2:
				case 3:
				case 4:
					$("nav ul li:eq(3)").addClass('nav-active');
					$(".whitepoint>li:eq(2)").addClass('bigpoint');
					break;
				case 0:
					$("nav ul li:eq(1)").addClass('nav-active');
					$(".whitepoint>li:eq(0)").addClass('bigpoint');
					break;
				case 1:
					$("nav ul li:eq(2)").addClass('nav-active');
					$(".whitepoint>li:eq(1)").addClass('bigpoint');
					break;
				case 5:
					$("nav ul li:eq(4)").addClass('nav-active');
					$(".whitepoint>li:eq(3)").addClass('bigpoint');
					break;
				default:
					break;
			}
		//}
	});

	$("nav ul li a").click(function() {
		$('nav ul li').filter('.nav-active').removeClass('nav-active');
		$(".whitepoint>li").removeClass('bigpoint');
		switch ($(this).parent("li").index()) {
			case 3: 
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[2].stop().show();
				$(".whitepoint>li:eq(2)").addClass('bigpoint');
				break;
			case 1:
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[0].stop().show();
				$(".whitepoint>li:eq(0)").addClass('bigpoint');
				break;
			case 2:
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[1].stop().show();
				$(".whitepoint>li:eq(1)").addClass('bigpoint');
				break;
			case 4:
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[5].stop().show();
				$(".whitepoint>li:eq(3)").addClass('bigpoint');
				break;
			default:
				break;

		}
	});

	$(".whitepoint>li").click(function(event) {
		$('nav ul li').filter('.nav-active').removeClass('nav-active');
		$(".whitepoint>li").removeClass('bigpoint');
		switch ($(this).index()) {
			case 2: 
				$("nav ul li:eq(3)").addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[2].stop().show();
				$(".whitepoint>li:eq(2)").addClass('bigpoint');
				break;
			case 0:
				$("nav ul li:eq(1)").addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[0].stop().show();
				$(".whitepoint>li:eq(0)").addClass('bigpoint');
				break;
			case 1:
				$("nav ul li:eq(2)").addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[1].stop().show();
				$(".whitepoint>li:eq(1)").addClass('bigpoint');
				break;
			case 3:
				$("nav ul li:eq(4)").addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[5].stop().show();
				$(".whitepoint>li:eq(3)").addClass('bigpoint');
				break;
			default:
				break;

		}
	});


})