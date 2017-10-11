var num = 0;
var isMobile = {  
    Android: function() {  
        return navigator.userAgent.match(/Android/i) ? true : false;  
    },  
    BlackBerry: function() {  
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
    },  
    iOS: function() {  
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
    },  
    Windows: function() {  
        return navigator.userAgent.match(/IEMobile/i) ? true : false;  
    },  
    any: function() {  
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  
    }  
};  
function liandong(number) {
	$("#carousel-example-generic").stop().hide();
	$("#server").stop().show();
	num = 3;
	var old = $('.service-body>li button').filter('.btn-default');
	var oldnum = old.parents('li').index();
	old.removeClass('btn-default');
	old.css('background', '');
	$('.service-body>li:eq('+number+') button').addClass('btn-default');
	$('.service-body>li:eq('+number+') button').css('background', 'rgba(0,0,0,0.5)');
	$('.img'+(oldnum+1)).stop().hide();
	$('.img'+(number+1)).stop().show();
}
function show1() {
	$("#address").html("广州市海珠区宝岗大道中新大厦1408室");
}
function show2() {
	$("#address").html("工厂地址");
}
$(function(){
	var pages = [$("#index"),$("#aboutus"),$("#carousel-example-generic"),$("#server"),$("#anli"),$("#contact")];
	for (var i = pages.length - 1; i >= 0; i--) {
		pages[i].stop().hide();
	}
	pages[0].stop().show();
	var flag = 0;
	setInterval(function () {
		flag = 1;
	}, 2000);
	hideNav();

	$(".contact>li:eq(2)>div>div:eq(1)").click(function(event) {
		pages[0].stop().show();
		num = 0;
		hideNav();
	});

	$(".anli-body>li").slice(2, 8).hide();
	$("#getmore").click(function(event) {
		$(".anli-body>li").slice(2, 8).show();
		$(this).hide();
	});

	if (isMobile.any()) {
		alert("hhh");
		$(".carousel-inner img:eq(0)").attr('src', 'img/carousel11.png');
		$(".carousel-inner img:eq(1)").attr('src', 'img/carousel22.png');
		$(".carousel-inner img:eq(2)").attr('src', 'img/carousel33.png');
		$("#aboutus").addClass('test');
		$(".abouttext1").css('margin-left', '0');
	}

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
		var old = $('.service-body>li button').filter('.btn-default');
		var num = $(this).parents('li').index();
		var oldnum = old.parents('li').index();
		old.removeClass('btn-default');
		old.css('background', '');
		$(this).addClass('btn-default');
		$(this).css('background', 'rgba(0,0,0,0.5)');
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
		hideNav();
	});

	$("nav ul li a").click(function() {
		$('nav ul li').filter('.nav-active').removeClass('nav-active');
		$(".whitepoint>li").removeClass('bigpoint');
		switch ($(this).parent("li").index()) {
			case 3: 
				num = 2;
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[2].stop().show();
				$(".whitepoint>li:eq(2)").addClass('bigpoint');
				break;
			case 1:
				num = 0;
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[0].stop().show();
				$(".whitepoint>li:eq(0)").addClass('bigpoint');
				break;
			case 2:
				num = 1;
				$(this).parents('li').addClass('nav-active');
				for (var i = pages.length - 1; i >= 0; i--) {
					pages[i].stop().hide();
				}
				pages[1].stop().show();
				$(".whitepoint>li:eq(1)").addClass('bigpoint');
				break;
			case 4:
				num = 5;
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
		hideNav();
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
		hideNav();
	});


	function debounce(fn, delay){
	  var timer = null; // 声明计时器
	  return function(){
	    var context = this;
	    var args = arguments;
	    clearTimeout(timer);
	    timer = setTimeout(function(){
	      fn.apply(context, args);
	    }, delay);
	  };
	}

	function hideNav() {
		if (num == 0) {
			$(".logo-bg").css('background', 'rgba(0,0,0,0)');
			$(".mynav").css('background', 'rgba(0,0,0,0)');
			$(".realnav>li").removeClass('nav-active');
		} else {
			$(".logo-bg").css('background', '');
			$(".mynav").css('background', '');
		}
	}


})